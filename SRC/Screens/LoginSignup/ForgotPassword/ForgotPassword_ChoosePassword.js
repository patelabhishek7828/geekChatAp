import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { containerFull, goback, logoImg } from "../../../CommonCss/pagecss";
import { Ionicons } from "@expo/vector-icons";
import logo from "../../../../assets/logo.png";
import { formHead2, formHead3, formInput, formbtn } from "../../../CommonCss/formCss";

const ForgotPassword_ChoosePassword = ({ navigation, route }) => {
  const {email} = route.params
  // console.log("abhuishek", email)

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

  const handlePasswordChange = () => {
    if(password == '' || confirmPassword == ''){
      alert("Please Enter Password")
    }
    else if(password != confirmPassword){
      alert("Password doesn't match")
    }else {
      setLoading(true);
      fetch('http://192.168.1.106:3000/resetPassword', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
        // console.log('object')
      }).then(res => res.json()).then(data => {
        if(data.message == "Password changed succesfully"){
          setLoading(false);
          alert(data.message);
          navigation.navigate("ForgotPassword_AccountRecover");
        }else {
          setLoading(false);
          alert("please try again");
        }
      })
      .catch(err => {
        setLoading(false);
        alert(err);
      })
    }
  }
  
  return (
    <View style={containerFull}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Login");
        }}
        style={goback}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={{ color: "gray", fontWeight: "bold", fontSize: 16 }}>
          Go Back
        </Text>
      </TouchableOpacity>
      <Image style={logoImg} source={logo} />
      <Text style={formHead2}>Choose a strong password</Text>
      <TextInput placeholder="Enter your password" secureTextEntry={true} style={formInput} onChangeText={(text) => setPassword(text)} />
      <TextInput placeholder="Enter confirm password" secureTextEntry={true} style={formInput} onChangeText={(text) => setconfirmPassword(text)} />
      {
        loading ? <ActivityIndicator /> : 
        <Text
        style={formbtn}
          onPress={() => { handlePasswordChange() }}
        >
          Next
        </Text>
      }
    </View>
  );
}

export default ForgotPassword_ChoosePassword

const styles = StyleSheet.create({})