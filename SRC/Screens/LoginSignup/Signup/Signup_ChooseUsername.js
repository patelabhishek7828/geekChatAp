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

const Signup_ChooseUsername = ({ navigation, route }) => {
  const { email } = route.params;
  const [username, setUsername] = useState('');

  const [loading, setLoading] = useState(false)

  const handleUsername = () => {
    if(username == ''){
      alert("Please Enter Username")
    } else {
      setLoading(true);
      fetch('http://192.168.1.108:3000/changeusername', {
        method: 'post',
        headers: {
          'Content-Type' : 'application/json',
        },
        body:JSON.stringify({
          email: email,
          username: username
        })
      }).then((res)=> res.json()).then((data)=>{
        console.log("data", data)
        if(data.message == 'username available'){
          setLoading(false);
          alert("Username has been set successfully")
          navigation.navigate('Signup_ChoosePassword', {
            email: email,
            username: username
          })
        } else {
          setLoading(false);
          alert("username not available")
        }
      }).catch((err) => {
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
      <Text style={formHead2}>Choose a Username</Text>
      <TextInput placeholder="Enter your username" style={formInput} onChangeText={(text) => setUsername(text)} />
      {
        loading ? <ActivityIndicator /> :
        <Text
        style={formbtn}
        onPress={() => {
          handleUsername();
          // navigation.navigate("Signup_ChoosePassword");
        }}
      >
        Next
      </Text>
      }
    </View>
  );
}


export default Signup_ChooseUsername

const styles = StyleSheet.create({})