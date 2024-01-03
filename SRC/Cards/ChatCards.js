import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChatCards = ({ item }) => {
  return (
    <View style={styles.chatCard}>
        <Image source={{ uri: item.profile_image }} style={styles.chatUserImg} />
        <View style={styles.c1}>
            <Text style={styles.urerNameStyle}>{item.username}</Text>
            <Text style={styles.msgStyle}>{item.lastmessage}</Text>
            <Text style={styles.msgStyle}>{item.time}</Text>
        </View>
    </View> 
  )
}

const styles = StyleSheet.create({
    chatCard: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor:'#222222',
        marginTop:10,
        borderRadius: 20,
        padding: 10,
    },
    chatUserImg: {
        width: 50,
        height:50,
        borderRadius:25
    },
    c1: {
        marginLeft: 20,
    },
    urerNameStyle:{
        color: '#fff',
        fontSize: 17,
        fontWeight:'bold'
    },
    msgStyle:{
        color: 'gray',
        fontSize: 16,
    },
})

export default ChatCards
