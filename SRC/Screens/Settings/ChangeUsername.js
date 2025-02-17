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
  import { containerFull, goback, logoImg } from "../../CommonCss/pagecss";
  import { Ionicons } from "@expo/vector-icons";
  import logo from "../../../assets/logo.png";
  import { formHead2, formHead3, formInput, formbtn } from "../../CommonCss/formCss";
import AsyncStorage from "@react-native-async-storage/async-storage";
  
  const ChangeUsername = ({ navigation }) => {

    const [username, setUsername] = useState('');
  
    const [loading, setLoading] = useState(false)
  
    const handleUsername = () => {
        if(username == ''){
            alert("please Enter Username")
        }else {
            setLoading(true);
            AsyncStorage.getItem('user').then(async(value)=> {
                console.log("djjdj", value)
                fetch('http://192.168.1.2:3000/setusername', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({username: username, email: JSON.parse(value).user.email})
                }).then(res => res.json()).then(data => {
                    console.log("hhhhh", data);
                    if(data.message == 'Username Updated Successfully'){
                        setLoading(false);
                        alert('Username Updated Successfully');
                        navigation.navigate('Settings1')
                    }else if(data.error == 'Invalid Credentials'){
                        setLoading(false);
                        alert('Invalid Credentials');
                        // AsyncStorage.removeItem('user');
                        navigation.navigate('Login')
                    }else {
                        setLoading(false);
                        alert('Username not available');
                    }
                }).catch(err =>{
                    alert("Server Error")
                })
            })
        }
    }

    return (
      <View style={containerFull}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Settings1");
          }}
          style={goback}
        >
          <Ionicons name="arrow-back" size={24} color="white" />
          <Text style={{ color: "gray", fontWeight: "bold", fontSize: 16 }}>
            Go Back
          </Text>
        </TouchableOpacity>
        <Image style={logoImg} source={logo} />
        <Text style={formHead2}>Change Username</Text>
        <TextInput placeholder="Enter new username Here" style={formInput} onChangeText={(text) => setUsername(text)} />
        {
          loading ? <ActivityIndicator /> :
          <Text
          style={formbtn}
          onPress={() => {
            handleUsername();
            // navigation.navigate("Signup_ChoosePassword");
          }}
        >
          Save
        </Text>
        }
      </View>
    );
  }
  
export default ChangeUsername

const styles = StyleSheet.create({})