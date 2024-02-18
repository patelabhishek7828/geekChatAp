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
import { formHead2, formInput, formbtn } from "../../../CommonCss/formCss";

const ForgotPassword_EnterEmail = ({ navigation }) => {
  const [forgotEmail, setForgotEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleForgotEmail = () => {
    if( forgotEmail == ''){
      alert("Please Enter Email")
    }else {
      setLoading(true);
      fetch('http://192.168.1.105:3000/verifyForgotPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: forgotEmail})
      }).then(res => res.json()).then(data => {
        console.log("ddd", data)
          if(data.error === 'Invalid Credentials') {
            alert("Invalid Credentials")
            setLoading(false);
          }else if(data.message == "Verification code has been sent to your Email") {
            setLoading(false);
            alert(data.message)
            navigation.navigate("ForgotPassword_EnterVerification", {
              email: data.email,
              userVerificationCode: data.verificationCode,
          });
          }
        })
        .catch((error) => {
          setLoading(false);
          console.error('Fetch error:', error);
          alert('Network request failed. Please try again.');
        })
      }
    }
    // navigation.navigate("ForgotPassword_EnterVerification");
  
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
      <Text style={formHead2}>Verify Your Email?</Text>
      <TextInput placeholder="Enter your Email" style={formInput} onChangeText={(text) => {setForgotEmail(text)}} />
      {
        loading ? <ActivityIndicator /> :
        <Text
        style={formbtn}
          onPress={() => { handleForgotEmail() }}
        >
          Next
        </Text>
      }
    </View>
  );
};

export default ForgotPassword_EnterEmail

const styles = StyleSheet.create({})