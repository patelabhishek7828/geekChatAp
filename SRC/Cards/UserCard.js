import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import nopic from '../../assets/nopic.png'

const UserCard = (props) => {
    let { user, navigation } = props;
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate('Other_UserProfile', { user: user })}}>
        <View style={styles.chatCard}>
        {
            user?.profilepic ? <Image source={{ uri: user.profilepic }} style={styles.chatUserImg} /> :
            <Image source={nopic} style={styles.chatUserImg} />
        }
            <View style={styles.c1}>
                <Text style={styles.urerNameStyle}>{user.username}</Text>
            </View>
        </View>
    </TouchableOpacity>
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

export default UserCard