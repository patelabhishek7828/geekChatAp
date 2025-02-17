import { StyleSheet, Text, View,Image, ScrollView, StatusBar, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import nopic from '../../../assets/nopic.png'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from "@expo/vector-icons";

const MessagePage = ({navigation, route}) => {
    const {fuserEmail} = route.params;

    const [selfUserData, setSelfUserData] = useState(null);
    const [friendUserData, setFriendUserData] = useState(null);
    
    useEffect(()=>{
        // console.log(fuserEmail);
        loadData()
    },[]);

    const loadData = async() => {
        AsyncStorage.getItem("user")
      .then(async(value) => {
        fetch('http://192.168.1.2:3000/userdata', {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + JSON.parse(value).token
          },
          body:JSON.stringify({ email : JSON.parse(value).user.email })
        }).then(res => res.json()).then(async(data) => {
          if(data.message === 'User Found'){
            console.log("su", data.user.username)
            setSelfUserData(data.user);
            
            //FRIEND USER 
            fetch('http://192.168.1.2:3000/differentuserdata', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email : fuserEmail })
                }).then(res => res.json()).then(data => {
                if(data.message == 'User Found'){
                    console.log("fu", data.user.username)
                    setFriendUserData(data.user)
                }else {
                    alert('User Not Found');
                    navigation.navigate('SearchuserPage')
                }
                }).catch(err =>{
                alert("Something Went Wrong")
                navigation.navigate('SearchuserPage')
            })
          } else {
            alert('Login Again');
            navigation.navigate('Login')
          }
        }).catch(err => {
          alert(err)
          navigation.navigate('Login')
        })
      })
      .catch((err) => {
        alert(err);
      });
    }
  return (
    <View style={styles.container}>
        <View style={styles.s1}>
            <TouchableOpacity
            onPress={() => {
            navigation.navigate("All_Chats");
            }}
            style={styles.goback}
        >
            <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
            {
                friendUserData?.profilepic ? <Image source={{ uri: friendUserData?.profilepic }} style={styles.profilePic} /> :
                <Image style={styles.profilePic} source={nopic} />
            }
            <Text style={styles.txt}>{friendUserData?.username}</Text>   
        </View>
        <View style={styles.sBottom}>
        <TextInput style={styles.botInp} placeholder='Type a message' placeholderTextColor={'gray'}/>
            <TouchableOpacity style={styles.btmBtn}>
                <Ionicons name="send" size={24} color="white" />
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default MessagePage

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:"black"
    },
    goback:{

    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 10
      },
      txt:{
        color: 'white',
        fontWeight:'bold',
        marginLeft: 10,
        fontSize: 20,
      },
      s1:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#222222', 
      },
      sBottom:{
        width:'100%',
        backgroundColor:'#444444',
        height:50,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        padding:10,
        position:'absolute',
        bottom:0,
        borderRadius:30
      },
      botInp:{
        width:'80%',
        height:40,
        fontSize:17,
        color:'white',
      }
})