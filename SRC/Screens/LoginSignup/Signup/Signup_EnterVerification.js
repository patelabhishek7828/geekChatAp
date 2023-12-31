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

const Signup_EnterVerification = ({ navigation }) => {
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
      <Text style={formHead3}>A verification code has been sent to your email</Text>
      <TextInput placeholder="Enter 6-Digit Code here" keyboardType="numeric" style={formInput} />
      <Text
        style={formbtn}
        onPress={() => {
          navigation.navigate("Signup_ChooseUsername");
        }}
      >
        Next
      </Text>
    </View>
  );
}

export default Signup_EnterVerification

const styles = StyleSheet.create({})