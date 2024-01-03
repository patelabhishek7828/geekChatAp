import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { icons1, logoImg2, row } from '../CommonCss/pagecss'
import logo from '../../assets/logo.png'
import { Ionicons } from '@expo/vector-icons';

const TopNavBar = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={logoImg2}/>
      <Ionicons name="chatbubbles" size={24} right={10} style={icons1} onPress={()=>{ navigation.navigate('All_Chats')}}/>    
    </View>
  )
}

export default TopNavBar

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        paddingVertical:10,
        top:0,
        position:'absolute',
        zIndex:100,
        backgroundColor:'#222222'    
    }
})