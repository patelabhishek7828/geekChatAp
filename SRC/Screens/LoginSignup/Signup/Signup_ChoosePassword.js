import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import { containerFull, goback, logoImg } from "../../../CommonCss/pagecss";
import { Ionicons } from "@expo/vector-icons";
import logo from "../../../../assets/logo.png";
import { formHead2, formHead3, formInput, formbtn } from "../../../CommonCss/formCss";

const Signup_ChoosePassword = ({ navigation }) => {
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
      <TextInput placeholder="Enter your password" secureTextEntry={true} style={formInput} />
      <TextInput placeholder="Enter confirm password" secureTextEntry={true} style={formInput} />
      <Text
        style={formbtn}
        onPress={() => {
          navigation.navigate("Signup_AccountCreated");
        }}
      >
        Next
      </Text>
    </View>
  );
}

export default Signup_ChoosePassword

const styles = StyleSheet.create({})