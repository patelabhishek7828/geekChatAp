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
import { formHead2, formInput, formTextLinkRight, formbtn } from "../../CommonCss/formCss";
import AsyncStorage from "@react-native-async-storage/async-storage";
  
  const ChangePassword = ({ navigation, route }) => {
    const [loading, setLoading] = useState(false);

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setconfirmNewPassword] = useState('');
  
    const handlePasswordChange = () => {
        if(oldPassword ==='' || newPassword ==='' || confirmNewPassword ===''){
            alert("please fill all the fields");
        } else if (newPassword != confirmNewPassword){
            alert("New Password and confirm new password must be same");
        } else {
            setLoading(true);
            AsyncStorage.getItem('user').then(value => {
              console.log("val", value)
                fetch('http://192.168.1.106:3000/changePassword', {
                    method:'post',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email : JSON.parse(value).user.email, oldPassword: oldPassword, newPassword: newPassword})
                }).then(res => res.json()).then(data => {
                    if(data.message == 'Password changed succesfully'){
                        setLoading(false);
                        alert('Password changed succesfully');
                        AsyncStorage.removeItem('user');
                        navigation.navigate('Login');
                    } else {
                        alert('Wrong Password');
                        setLoading(false);
                    }
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
          <Text style={{ color: "gray", fontWeight: "bold", fontSize: 16 }} >
            Go Back
          </Text>
        </TouchableOpacity>
        <Image style={logoImg} source={logo} />
        <Text style={formHead2}>Choose a strong password</Text>
        <TextInput placeholder="Enter your old password" secureTextEntry={true} style={formInput} onChangeText={(text) => setOldPassword(text)} />
        <TextInput placeholder="Enter your password" secureTextEntry={true} style={formInput} onChangeText={(text) => setNewPassword(text)} />
        <TextInput placeholder="Enter confirm password" secureTextEntry={true} style={formInput} onChangeText={(text) => setconfirmNewPassword(text)} />
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
  
  export default ChangePassword

const styles = StyleSheet.create({})