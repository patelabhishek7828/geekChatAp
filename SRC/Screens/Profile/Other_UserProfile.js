import { ActivityIndicator, Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { formHead } from '../../CommonCss/formCss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import TopNavBar from '../../Components/TopNavBar'
import AsyncStorage from "@react-native-async-storage/async-storage";
import nopic from '../../../assets/nopic.png';
import { Ionicons } from '@expo/vector-icons';

const Other_UserProfile = ({ navigation, route }) => {
  
  const [userData, setUserData] = useState(null);
  const { user } = route.params
  // console.log("llll", user)

  const loadData =() => {
    fetch('http://192.168.1.105:3000/differentuserdata', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email : user.email })
    }).then(res => res.json()).then(data => {
      if(data.message == 'User Found'){
        setUserData(data.user)
        isMyProfile(data.user);
        checkFollow(data.user);
      }else {
        alert('User Not Found');
        navigation.navigate('SearchuserPage')
      }
    }).catch(err =>{
      alert("Something Went Wrong")
      navigation.navigate('SearchuserPage')
    })
  }
  useEffect(() => {
    loadData();
  }, []);

  // check self profile or other
  const [isSameUser, setIsSameUser] = useState(false);
  const isMyProfile = async(otherprofile) => {
    AsyncStorage.getItem("user").then((loggedUserData)=>{
      const loggedUserObj = JSON.parse(loggedUserData);
      console.log("chk self profile or other", loggedUserObj)
      if(loggedUserObj.user.email == otherprofile.email){
        setIsSameUser(true);
        console.log("same user")
      } else {
        setIsSameUser(false);
        console.log("other user")
      }
    })
  }

  // check already follow or not this user
  const [isFollowing , setIsFollowing] = useState(false);
  const checkFollow = (otheruser) => {
    AsyncStorage.getItem('user').then(loggedUserData=>{
      const loggedUserObj = JSON.parse(loggedUserData)
      fetch('http://192.168.1.105:3000/checkFollow', {
        method:'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({followfrom: loggedUserObj.user.email, followto: otheruser.email})
      })
      .then(res => res.json()).then(data =>{
        if(data.message == 'User in following list'){
          setIsFollowing(true)
        } else if(data.message == 'User not in following list'){
          setIsFollowing(false)
        } else {
          alert('Something went wrong');
        }
      })
    })
  }

  // follow this user
  const followThisUser = async(otheruser) => {
    console.log("follow this", otheruser)
    AsyncStorage.getItem('user').then(loggedUserData =>{
      const loggedUserObj = JSON.parse(loggedUserData)
      fetch('http:192.168.1.105:3000/followUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({followfrom: loggedUserObj.user.email, followto: otheruser.email})
      })
      .then(res =>res.json()).then(data=>{
        console.log("hhhhhhhhhhhh", data)
        if(data.message == 'User Followed'){
          setIsFollowing(true);
          loadData();
        }else {
          alert("Something went wrong")
        }
      })
    })
  }

  // unfollow this user
  const unfollowThisUser = async(otheruser) => {
    AsyncStorage.getItem('user').then(loggedUserData =>{
      const loggedUserObj = JSON.parse(loggedUserData);
      fetch('http:192.168.1.105:3000/unfollowUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({followfrom: loggedUserObj.user.email , followto: otheruser.email})
      })
      .then(res =>res.json()).then(data=>{
        console.log("unfollow Done", data)
        if(data.message == 'User unFollowed'){
          setIsFollowing(false);
          loadData();
        }else {
          alert("Something went wrong")
        }
      })
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar navigation={navigation} page={"Other_UserProfile"}/>
      <Bottomnavbar navigation={navigation} page={"SearchuserPage"}/>
      <Ionicons name="reload" size={24} color="white" style={styles.refresh} onPress={() => {loadData()}}/>

      {
        userData ? 
        <ScrollView>
        <View style={styles.c1}>
          {
            userData.profilepic.length > 0 ? <Image style={styles.profilePic} source={{ uri: userData.profilepic }} />
            : <Image style={styles.profilePic} source={nopic} />
          }
          <Text style={styles.txt}>@{userData.username}</Text>
          {!isSameUser && <View style={styles.row}>
              {isFollowing? <Text style={styles.follow} onPress={() => unfollowThisUser(userData) }>unFollow</Text> : <Text style={styles.follow} onPress={() => followThisUser(userData) }>Follow</Text>}
              <Text style={styles.message} onPress={() => navigation.navigate('MessagePage', {
                fuserEmail: userData.email
              })}>Message</Text>
          </View>}
          <View style={styles.c11}>
            <View style={styles.c111}>
              <Text style={styles.txt1}>Followers</Text>
              <Text style={styles.txt2}>{userData.followers.length}</Text>
            </View>
            <View style={styles.vr1}></View>
 
            <View style={styles.c111}>
              <Text style={styles.txt1}>Following</Text>
              <Text style={styles.txt2}>{userData.following.length}</Text>
            </View>
            <View style={styles.vr1}></View>

            <View style={styles.c111}>
              <Text style={styles.txt1}>Posts</Text>
              <Text style={styles.txt2}>{userData.posts.length}</Text>
            </View>
          </View>
          {
            userData.description.length > 0 && <Text style={styles.desc}>{userData.description}</Text>
          }
        </View>

        {isFollowing || isSameUser ? 
          <View>
            {
              userData.posts.length > 0 ?
              <View style={styles.c1}>
              <Text style={styles.txt}>Posts</Text>
              <View style={styles.c13}>
                {
                  userData?.posts?.map((item) => {
                    console.log("item", item)
                    return(
                      <View style={styles.postPic} key={item.post}>
                        <Image source={{ uri: item.post }} style={styles.postPic} />
                      </View>
                    )
                  })
                }
              </View>
            </View> :
            <View style={styles.c2}>
              <Text style={styles.txt1}>You have not posted anything yet.</Text>
            </View>
          }
        </View> :
        <View style={styles.c2}>
          <Text style={styles.txt1}>Follow to see post.</Text>
        </View>
        }
      </ScrollView>
      : <ActivityIndicator />
      }
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      paddingVertical: 50,
    },
    c1: {
      width:'100%',
      alignItems:'center',
    },
    profilePic: {
      width: 150,
      height: 150,
      borderRadius: 75,
      margin: 10
    },
    txt: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
      paddingVertical: 10,
      backgroundColor:'#222222',
      paddingHorizontal: 20,
      borderRadius: 10
    },
    c11:{
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-around'
    },
    c111:{
      alignItems:'center'
    },
    txt1: {
      color: '#fff',
      fontSize: 15,
    },
    txt2: {
      color: '#fff',
      fontSize: 20,
    },
    vr1:{
      width:1,
      height:50,
      backgroundColor:'#fff'
    },
    desc:{
      color: '#fff',
      fontSize:16,
      marginVertical:10,
      width:'100%',
      padding:10,
      backgroundColor:'#222222',
      paddingVertical: 20,
    },
    c13: {
      flexDirection:'row',
      flexWrap:'wrap',
      marginBottom:20
    },
    postPic:{
      height: 118,
      width: 127,
      margin: 1,
    },
    c2: {
      width:'100%',
      alignItems: 'center',
      justifyContent: 'center',
      height: 200
    },
    refresh: {
      position:'absolute',
      top:60,
      right:25,
    },
    follow: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
      backgroundColor: '#0AD6A0',
      paddingHorizontal:30,
      paddingVertical:10,
      borderRadius:20
    },
    message: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
      backgroundColor: 'gray',
      paddingHorizontal:30,
      paddingVertical:10,
      borderRadius:20
    },
    row: {
      flexDirection: 'row'
    }
  })

export default Other_UserProfile