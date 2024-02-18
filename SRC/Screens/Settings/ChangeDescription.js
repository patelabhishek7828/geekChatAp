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

const ChangeDescription = ({ navigation }) => {

  const [description, setDescription] = useState('');

  const [loading, setLoading] = useState(false)

  const handleUserDescription = () => {
      if(description == ''){
          alert("please Enter Description")
      }else {
          setLoading(true);
          AsyncStorage.getItem('user').then(async(value)=> {
              console.log("djjdj", value)
              fetch('http://192.168.1.105:3000/setdescription', {
                  method: 'post',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({description: description, email: JSON.parse(value).user.email})
              }).then(res => res.json()).then(data => {
                  console.log("hhhhh", data);
                  if(data.message == 'Description Updated Succesfully'){
                      setLoading(false);
                      alert('Description has been set Succesfully');
                      navigation.navigate('Settings1')
                  }else if(data.error == 'Invalid Credentials'){
                      setLoading(false);
                      alert('Invalid Credentials');
                      AsyncStorage.removeItem('user');
                      navigation.navigate('Login')
                  }else {
                      setLoading(false);
                      alert('Description not available');
                  }
              }).catch(err =>{
                  alert("Something ent wrong");
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
      <Text style={formHead2}>Change Description</Text>
      <TextInput placeholder="Enter new description Here" numberOfLines={5} multiline={true} style={formInput} onChangeText={(text) => setDescription(text)} />
      {
        loading ? <ActivityIndicator /> :
        <Text
        style={formbtn}
        onPress={() => {
          handleUserDescription();
          // navigation.navigate("Signup_ChoosePassword");
        }}
      >
        Save
      </Text>
      }
    </View>
  );
}

export default ChangeDescription

const styles = StyleSheet.create({})