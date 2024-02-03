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
  import { firebase } from '../../Firebase/Config'
  import * as ImagePicker from 'expo-image-picker';

  const UploadProfilePicture = ({ navigation }) => {
  
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false)
  
    const pickImage = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
          console.log(result);

          if (!result.canceled) {
           const source = { uri : result.uri}
            setImage(source);

            const response = await fetch(result.uri);
            const blob = await response.blob();
            const filename = result.uri.substring(result.uri);

            const ref = firebase.storage().ref().child(filename);
            const snapshot = await ref.put(blob);
            const url = await snapshot.ref.getDownloadURL();

            console.log("uu", url);
            return url
          } else {
            return null
          }
    }

    const handleUpload = () => {
        AsyncStorage.getItem('user').then((data)=> {
            setLoading(true);
            pickImage().then(url => {
                if(url){
                    fetch('http://192.168.1.108:3000/setprofilepic', {
                        method: 'post',
                        headers: {
                            'Content-Type' : 'application/json',
                        },
                        body: JSON.stringify({email: JSON.parse(data).user.email, profilepic: url})
                    }).then(res => res.json()).then(data => {
                        if(data.message === 'Profile Picture Updated successfully'){
                            setLoading(false);
                            alert('Profile Picture Updated successfully');
                            navigation.navigate('Settings1')
                        }else if(data.message === 'Invalid Credentials'){
                            setLoading(false);
                            alert('Invalid Credentials');
                            navigation.navigate('Login')
                        }else {
                            setLoading(false);
                            alert("Please try again")
                        }
                    }).catch(err => {
                        console.log(err)
                    })
                } else {
                    setLoading(false);
                    alert("please select an image");
                }
            })
            
        })
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
        <Text style={formHead2}>Choose a profile picture</Text>
        {
          loading ? <ActivityIndicator /> :
          <Text
            style={formbtn}
            onPress={() => {
                handleUpload();
            }}
        >
          Upload
        </Text>
        }
      </View>
    );
  }

export default UploadProfilePicture

const styles = StyleSheet.create({})