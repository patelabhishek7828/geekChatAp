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

const ForgotPassword_EnterVerification = ({ navigation, route }) => {
  const {email, userVerificationCode} = route.params
  console.log('ababa', email, userVerificationCode)

  const [verificationCode, setVerificationCode] = useState('');

  const handleVerificationCode = () => {
    if(verificationCode != userVerificationCode){
      alert("Invalid Verification Code")
    } else if(verificationCode == userVerificationCode) {
      alert("Verification Code Matched")
      navigation.navigate("ForgotPassword_ChoosePassword", {
        email: email,
      });
    } else {
      alert("Please try again")
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
      <TextInput placeholder="Enter 6-Digit Code here" keyboardType="numeric" style={formInput} onChangeText={(text) => setVerificationCode(text)}/>
      <Text
        style={formbtn}
        onPress={() => {
          handleVerificationCode()
        }}
      >
        Next
      </Text>
    </View>
  );
}

export default ForgotPassword_EnterVerification

const styles = StyleSheet.create({})