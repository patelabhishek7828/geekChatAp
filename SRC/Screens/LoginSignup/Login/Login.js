import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import {
  forgotLink,
  formHead,
  formInput,
  formTextLinkCenter,
  formTextLinkRight,
} from "../../../CommonCss/formCss";
import logo from "../../../../assets/logo.png";
import { containerFull, hr80, logoImg } from "../../../CommonCss/pagecss";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if(email == '' || password == ''){
      alert("Please Enter Email and Password")
    } else {
      setLoading(true);
      fetch('http://192.168.1.108:3000/signin', {
        method: 'post',
        headers : {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
      }).then(res => res.json()).then(async(data) => {
        if(data.error){
          setLoading(false);
          alert(data.error)
        }else if(data.message == 'Succesfully Sign In') {
          setLoading(false);
          // console.log(data)
          await AsyncStorage.setItem('user', JSON.stringify(data));
          navigation.navigate('MainPage', { data } )
        }
        // console.log("sdhdj", data)
      })
      .catch(err => {
        setLoading(false);
        alert(err)
      })
    }
    // navigation.navigate("MainPage");
  }

  return (
    <View style={containerFull}>
      <Image source={logo} style={logoImg} />
      <Text style={formHead}>Login</Text>
      <TextInput placeholder="Enter your Email" style={formInput} onChangeText={(text) => setEmail(text)}/>
      <TextInput
        placeholder="Enter your Password"
        secureTextEntry={true}
        style={formInput}
        onChangeText={(text) => setPassword(text)}
      />
      <Text
        onPress={() => {
          navigation.navigate("ForgotPassword_EnterEmail");
        }}
        style={formTextLinkRight}
      >
        Forgot password?
      </Text>
      {
        loading ? <ActivityIndicator /> :
        <TouchableOpacity
        style={{ width: "81%" }}
        onPress={() => { handleLogin() }}
      > 
        <Text  style={{ color: "#fff", fontSize: 22, textAlign: "center", borderWidth: 1, borderColor: "#fff", padding: 10, margin: 15, fontWeight: "500", borderRadius: 8}}>
          Submit
      </Text>
      </TouchableOpacity>
      }
      <View style={hr80}></View>
      <Text style={formTextLinkCenter}>
        Don't have an acoount?{" "}
        <Text
          style={{ color: "#fff" }}
          onPress={() => {
            navigation.navigate("Signup_EnterEmail");
          }}
        >
          Signup
        </Text>
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
