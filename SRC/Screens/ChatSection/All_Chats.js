import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { formHead2 } from '../../CommonCss/formCss';
import ChatCards from '../../Cards/ChatCards';

const All_Chats = ({ navigation }) => {
    let chats = [
        {
            username: 'abhishek',
            lastmessage: 'hello',
            time: '12:00',
            profile_image: 'https://media.istockphoto.com/id/1446806057/photo/young-happy-woman-student-using-laptop-watching-webinar-writing-at-home.jpg?s=1024x1024&w=is&k=20&c=ICSLSiYaIZ-Cvk9MF3iF2JmrVRmE6br6dYjCEtyjLYs=',
        },
        {
            username: 'Akshay',
            lastmessage: 'How are you?',
            time: '14:00',
            profile_image: 'https://media.istockphoto.com/id/1446806057/photo/young-happy-woman-student-using-laptop-watching-webinar-writing-at-home.jpg?s=1024x1024&w=is&k=20&c=ICSLSiYaIZ-Cvk9MF3iF2JmrVRmE6br6dYjCEtyjLYs=',
        },
        {
            username: 'abhishek patel',
            lastmessage: 'Hi',
            time: '12:00',
            profile_image: 'https://media.istockphoto.com/id/1446806057/photo/young-happy-woman-student-using-laptop-watching-webinar-writing-at-home.jpg?s=1024x1024&w=is&k=20&c=ICSLSiYaIZ-Cvk9MF3iF2JmrVRmE6br6dYjCEtyjLYs=',
        },
        {
            username: 'Rajat Patidar',
            lastmessage: 'Hello?',
            time: '14:00',
            profile_image: 'https://media.istockphoto.com/id/1446806057/photo/young-happy-woman-student-using-laptop-watching-webinar-writing-at-home.jpg?s=1024x1024&w=is&k=20&c=ICSLSiYaIZ-Cvk9MF3iF2JmrVRmE6br6dYjCEtyjLYs=',
        },
    ]

    let [keyWords, setKeyWords]  = useState('');
  return (
    <ScrollView style={styles.container}>
        <Ionicons name="arrow-back-circle" size={24} style={styles.goHomeIcon} onPress={()=>{navigation.navigate('MainPage')}} />
        <View style={styles.c1}>
            <Text style={formHead2}>Your Chats</Text>
            <TextInput onChangeText={(text) => { setKeyWords(text) }} style={styles.srchBar} placeholder='Enter Search'/>
        </View>
        <View style={styles.c2}>
            {
                chats.filter((item)=>{
                    if(keyWords == ''){
                        return item;
                    } else if(item.username.toLowerCase().includes(keyWords.toLowerCase()) || item.lastmessage.toLowerCase().includes(keyWords.toLowerCase())){
                        return item
                    }
                })
                .map((item) => {
                    return <ChatCards key={item.username} item={item}/>
                })
            }
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: '100%',
        backgroundColor:'#000'
    },
    goHomeIcon: {
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 100,
        fontSize: 30,
        color: "white" 
    },
    c1: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 25,
        backgroundColor:'#333333'
    },
    srchBar:{
        width:'90%',
        backgroundColor: "#fff",
        borderRadius: 25,
        padding: 10,
        marginTop: 15,
        fontSize:18,
    },
    c2: {
        width: '100%',
        padding: 10
    }
})

export default All_Chats