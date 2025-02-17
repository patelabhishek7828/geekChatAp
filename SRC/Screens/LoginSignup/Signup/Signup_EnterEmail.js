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

const Signup_EnterEmail = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleEmail = () => {
    if(email == ''){
      alert('please enter email');
    } else {
    setLoading(true);
    fetch('http://192.168.1.2:3000/verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false); 
        console.log('Response data:', data);
        if (data.error === 'Invalid Credentials') {
          alert('Invalid Credentials');
        } else {
          console.log(data.message)
          navigation.navigate("Signup_EnterVerification", {
            userEmail: data.email,
            userVerificationCode: data.verificationCode,
          });
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error('Fetch error:', error);
        alert('Network request failed. Please try again.');
      });
    }
  };
  
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
      <Text style={formHead2}>Create a new account?</Text>
      <TextInput placeholder="Enter your Email" onChangeText={(text)=>{ setEmail(text)}} style={formInput} />
      {
        loading ? 
        <ActivityIndicator size="large" color="white"/> 
        : <Text
        style={formbtn}
        onPress={ ()=> { handleEmail() } }
      >
        Next
      </Text>
      }
    </View>
  );
};

export default Signup_EnterEmail;

const styles = StyleSheet.create({});
