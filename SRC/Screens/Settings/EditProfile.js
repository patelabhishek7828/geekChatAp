import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { formHead, formHead2 } from '../../CommonCss/formCss';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfile = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Ionicons name="arrow-back-circle" size={24} style={styles.goHomeIcon} onPress={()=>{navigation.navigate('Settings1')}} />
      <Text style={formHead}>Edit Profile</Text>
      <Text style={styles.txt1} onPress={() => navigation.navigate('UploadProfilePicture')}>Change Profile Picture </Text>
      <Text style={styles.txt1} onPress={() => navigation.navigate('ChangeUsername')}>Change Username</Text>
      <Text style={styles.txt1} onPress={() => navigation.navigate('ChangeDescription')}>Change Description</Text>
    </View>
  )
}

export default EditProfile

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

