import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { containerFull, goback, logoImg } from "../../../CommonCss/pagecss";
import { Ionicons } from "@expo/vector-icons";
import logo from "../../../../assets/logo.png";
import { formHead2, formHead3, formInput, formbtn } from "../../../CommonCss/formCss";

const Signup_EnterVerification = ({ navigation, route }) => {

  const {userEmail, userVerificationCode } = route.params
  console.log("Signup_EnterVerification", userEmail, userVerificationCode)
  
  const [verificationCode, setVerificationCode] = useState('');
  const handleVerifationCode = () => {
    if(verificationCode !=  userVerificationCode){
      alert("Invalid Verification code")
    } else if(verificationCode ==  userVerificationCode){
      alert("Verification code Matched")
      navigation.navigate("Signup_ChooseUsername", {
        email: userEmail
      })
    } else{
      alert('Please try again')
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
      <Text style={formHead3}>A verification code has been sent to your email</Text>
      <TextInput placeholder="Enter 6-Digit Code here" onChangeText={(text)=>setVerificationCode(text)} keyboardType="numeric" style={formInput} />
      <Text
        style={formbtn}
        onPress={() => { handleVerifationCode() }}
      >
        Next
      </Text>
    </View>
  );
}

export default Signup_EnterVerification

const styles = StyleSheet.create({})