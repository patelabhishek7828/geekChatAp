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

const Signup_ChoosePassword = ({ navigation, route }) => {
  const { email, username } = route.params;
  console.log("route.params", email, username)

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const handlePassword = () => {
    if(password == '' || confirmPassword == ''){
      alert("please Enter Valid password")
    } else if (password != confirmPassword){
      alert("Password doesn't matched");
    } else {
      setLoading(true);
      fetch('http://192.168.1.106:3000/signup', {
        method: 'post',
        headers: {
          'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
          password: password,
          email: email,
          username: username,
        })
      }).then(res => res.json()).then(data => {
        console.log("dataaa", data)
        if(data.message === 'User Registered Succesfully'){
          setLoading(false);
          alert(data.message);
          navigation.navigate('Signup_AccountCreated');
        } else {
          setLoading(false);
          alert("please try again");
        }
        // console.log('sigData', data)
      }).catch((err) =>{
        console.log(err)
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
      <TextInput placeholder="Enter your password" secureTextEntry={true} style={formInput} onChangeText={(text)=>setPassword(text)}/>
      <TextInput placeholder="Enter confirm password" secureTextEntry={true} style={formInput} onChangeText={(text)=>setconfirmPassword(text)}/>
      { loading ? <ActivityIndicator /> :
      <Text
        style={formbtn}
        onPress={() => { handlePassword() }}
      >
        Next
      </Text>}
    </View>
  );
}

export default Signup_ChoosePassword

const styles = StyleSheet.create({})