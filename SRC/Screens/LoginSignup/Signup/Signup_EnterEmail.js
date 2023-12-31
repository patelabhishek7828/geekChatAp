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
import { formHead2, formInput, formbtn } from "../../../CommonCss/formCss";

const Signup_EnterEmail = ({ navigation }) => {
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
      <TextInput placeholder="Enter your Email" style={formInput} />
      <Text
        style={formbtn}
        onPress={() => {
          navigation.navigate("Signup_EnterVerification");
        }}
      >
        Next
      </Text>
    </View>
  );
};

export default Signup_EnterEmail;

const styles = StyleSheet.create({});
