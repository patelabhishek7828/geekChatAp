import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { formHead, formHead2 } from '../../CommonCss/formCss';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings1 = ({ navigation }) => {

  const handleLogout = () => {
    AsyncStorage.removeItem('user').then(() => {
      navigation.navigate('Login')
    })
  }

  const handleChangePassword = () => {
      navigation.navigate('ChangePassword')
  }

  const handleEditProfile = () => {
      navigation.navigate('EditProfile')
  }
  return (
    <View style={styles.container}>
      <Ionicons name="arrow-back-circle" size={24} style={styles.goHomeIcon} onPress={()=>{navigation.navigate('My_UserProfile')}} />
      <Text style={formHead}>Settings1</Text>
      <Text style={styles.txt1} onPress={()=> handleEditProfile()}>Edit Profile</Text>
      <Text style={styles.txt1} onPress={()=> handleChangePassword()}>Change password</Text>
      <Text style={styles.txt1}>Customer support</Text>
      <Text style={styles.txt1} onPress={()=> handleLogout() }>Logout</Text>
    </View>
  )
}

export default Settings1

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#000',
    width:'100%',
    height:'100%'
  },
  goHomeIcon: {
      position: 'absolute',
      top: 10,
      left: 10,
      zIndex: 100,
      fontSize: 30,
      color: "white" 
  },
  txt1:{
    marginTop: 20,
    color:'#fff',
    fontSize: 20,
    borderBottomColor:'gray',
    borderBottomWidth: 1
  }
})