import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { icons1 } from '../CommonCss/pagecss';

const Bottomnavbar = ({ navigation, page }) => {
  return (
    <View style={styles.container}>
        { page === 'MainPage' ? <MaterialCommunityIcons style={styles.activeicons1} name="home" size={25} onPress={()=>{navigation.navigate('MainPage')}}/> : <MaterialCommunityIcons style={icons1} name="home" size={25} onPress={()=>{navigation.navigate('MainPage')}}/> }
        { page === 'SearchuserPage' ? <FontAwesome5 style={styles.activeicons1} name="search" size={25} onPress={()=>{navigation.navigate('SearchuserPage')}}/> : <FontAwesome5 style={icons1} name="search" size={25} onPress={()=>{navigation.navigate('SearchuserPage')}}/> }
        { page === 'NotificationPage' ? <FontAwesome style={styles.activeicons1} name="heart" size={25}  onPress={()=>{navigation.navigate('NotificationPage')}} /> : <Feather style={styles.icons1} name="heart" size={30} color="white" onPress={()=>{navigation.navigate('NotificationPage')}} /> }
        { page === 'My_UserProfile' ? <FontAwesome style={styles.activeicons1} name="user-circle" size={25} onPress={()=>{navigation.navigate('My_UserProfile')}}/> : <FontAwesome style={styles.icons1} name="user" size={30} color="white" onPress={()=>{navigation.navigate('My_UserProfile')}}/> }
    </View>
  )
}

export default Bottomnavbar

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#222222',
        flexDirection:'row',
        justifyContent:'space-evenly',
        position:'absolute',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        bottom:0,
        width:'100%',
        zIndex:100,
        paddingVertical:10,
        alignItems: 'center'
    },
    activeicons1:{
      backgroundColor: 'white',
      borderRadius:50,
      padding: 8,
    }
})