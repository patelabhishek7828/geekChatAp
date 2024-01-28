import { StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { containerFull } from "../../CommonCss/pagecss";
import { formHead, formHead2 } from "../../CommonCss/formCss";
import Bottomnavbar from "../../Components/Bottomnavbar";
import TopNavBar from "../../Components/TopNavBar";
import FollowersRandomPost from "../../Components/FollowersRandomPost";
import AsyncStorage from "@react-native-async-storage/async-storage";

const MainPage = ({ navigation, route }) => {
  // console.log(object)
  // const {data} = route.params
  // console.log('uuuuuuuser', data.user.username)

  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    AsyncStorage.getItem("user")
      .then((data) => {
        setUserData(JSON.parse(data));
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  console.log("abc", userData);
  return (
    <View style={styles.container}>
      <StatusBar />
      <TopNavBar navigation={navigation} page={"MainPage"} />
      <FollowersRandomPost navigation={navigation} />
      <Bottomnavbar navigation={navigation} page={"MainPage"} />
    </View>
  );
};

export default MainPage;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    paddingVertical: 50,
  },
});
