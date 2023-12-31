import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { forgotLink, formHead, formInput, formTextLinkCenter, formTextLinkRight } from '../../../CommonCss/formCss'
import logo from '../../../../assets/logo.png'
import { containerFull, hr80, logoImg } from '../../../CommonCss/pagecss'

const Login = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <Image source={logo} style={logoImg}/>
      <Text style={formHead}>Login</Text>
      <TextInput placeholder="Enter your Email" style={formInput}/>
      <TextInput placeholder="Enter your Password" secureTextEntry={true} style={formInput}/>
      <Text onPress={() => {navigation.navigate('ForgotPassword_EnterEmail')}} style={formTextLinkRight}>Forgot password?</Text>
      <TouchableOpacity style={{ width: '81%', }} onPress={()=>{navigation.navigate('MainPage')}}>
        <Text style={{ color: '#fff', fontSize:22, textAlign:'center', borderWidth:1, borderColor:'#fff', padding: 10, margin:15, fontWeight:'500', borderRadius:8}}>Submit</Text>
      </TouchableOpacity>
      <View style={hr80}></View>
      <Text style={formTextLinkCenter}>Don't have an acoount? <Text style={{color:'#fff'}} onPress={()=>{navigation.navigate('Signup_EnterEmail')}}>Signup</Text></Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})