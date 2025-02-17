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
  
  const AddPost = ({ navigation }) => {
  
    const [postDescription, setPostDescription] = useState('');
  
    const [loading1, setLoading1] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const [post, setPost] = useState('');

    const handleUpload = () => {
        if( post != null ){
            AsyncStorage.getItem('user').then(data => {
                setLoading2(true);
                fetch('http://192.168.1.2:3000/addpost', {
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({email: JSON.parse(data).user.email, post: post, postDescription: postDescription})
                })
                .then(res => res.json()).then(data => {
                    console.log("1", data)
                    if(data.message === 'Post Added Succesfully'){
                        alert("Post Added Succesfully");
                        setLoading2(false);
                        navigation.navigate('My_UserProfile');
                    }else {
                        alert("Something went wrong, please try again");
                        setLoading2(false);
                    }
                }).catch(err =>{
                    setLoading2(false);
                    alert("INvalid Credentials")
                })
            })
        } else {
            alert('please select an Image')
        }
    }

    const pickImage = async() => {
        setLoading1(true);
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
          });
        //   console.log(result);

          if (!result.canceled) {
           const source = { uri : result.uri}

            const response = await fetch(result.uri);
            const blob = await response.blob();
            const filename = result.uri.substring(result.uri);

            const ref = firebase.storage().ref().child(filename);
            const snapshot = await ref.put(blob);
            const url = await snapshot.ref.getDownloadURL();

            setLoading1(false);
            setPost(url);
        } else {
              setLoading1(false);
              setPost(null)
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
        {
            loading1 ? <ActivityIndicator color="white" size="large" /> :
            <>
                <Text style={formHead2}>
                    Add New post
                </Text>
                {
                    post ? <TouchableOpacity>
                        <Image source={{ uri: post}} style={{width: 200, height: 200, marginVertical:10}} />
                    </TouchableOpacity> : 
                    <Text style={styles.addpost} onPress={()=> { pickImage() }}> Click here to select a new post.</Text>
                }
            </>
        }




        {/*  */}
        <Text style={formHead2}>Change Description</Text>
        <TextInput placeholder="Enter new description Here" numberOfLines={5} multiline={true} style={formInput} onChangeText={(text) => setPostDescription(text)} />
        {
          loading2 ? <ActivityIndicator color="white" size="large" /> :
          <Text
          style={formbtn}
          onPress={() => {
            handleUpload();
            // navigation.navigate("Signup_ChoosePassword");
          }}
        >
          Upload
        </Text>
        }
      </View>
    );
  }
export default AddPost

const styles = StyleSheet.create({
    addpost: {
        fontSize: 20,
        fontWeight:'100',
        color: 'white',
        borderWidth: 1,
        paddingVertical: 50,
        borderColor: 'white',
        marginVertical:20,
        textAlign:'center',
        paddingHorizontal:15,
        borderRadius:10
    }
})