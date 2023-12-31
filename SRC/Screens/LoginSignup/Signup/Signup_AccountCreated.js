import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { containerFull, goback, logoImg, row } from "../../../CommonCss/pagecss";
import { Ionicons } from "@expo/vector-icons";
import logo from "../../../../assets/logo.png";
import { formHead2, formHead3, formInput, formbtn } from "../../../CommonCss/formCss";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Signup_AccountCreated = ({ navigation }) => {
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
      <View style={row}>
        <MaterialCommunityIcons name="check-decagram" size={30} color="#99b83c" />
        <Text style={formHead2}> Account Created Successfully</Text>
      </View>
      <Text style={formbtn} onPress={()=>{navigation.navigate('Login')}}>Let's Roll</Text>
    </View>
  );
}

export default Signup_AccountCreated

const styles = StyleSheet.create({})