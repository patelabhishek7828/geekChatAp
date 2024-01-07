import { Image, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { formHead } from '../../CommonCss/formCss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import TopNavBar from '../../Components/TopNavBar'

const My_UserProfile = ({ navigation }) => {
  const data = {
    username: "abhishek7828",
    followers: 1000,
    following: 1500,
    description: "I am software developer and I love to code.",
    profile_image: "https://picsum.photos/500/500",
    posts: [
      {
        id: 1,
        post_image: "https://picsum.photos/400/400",
      },
      {
        id: 2,
        post_image: "https://picsum.photos/300/300",
      },
      {
        id: 3,
        post_image: "https://picsum.photos/200/200",
      },
      {
        id: 4,
        post_image: "https://picsum.photos/250/250",
      },
      {
        id: 5,
        post_image: "https://picsum.photos/550/550",
      },
      {
        id: 6,
        post_image: "https://picsum.photos/350/350",
      },
      {
        id: 7,
        post_image: "https://picsum.photos/450/450",
      },
    ]
  }
    return (
        <View style={styles.container}>
          <StatusBar />
          <TopNavBar navigation={navigation} page={"My_UserProfile"}/>
          <Bottomnavbar navigation={navigation} page={"My_UserProfile"}/>
          <ScrollView>
            <View style={styles.c1}>
              <Image style={styles.profilePic} source={{ uri: data.profile_image }} />
              <Text style={styles.txt}>@{data.username}</Text>

              <View style={styles.c11}>
                <View style={styles.c111}>
                  <Text style={styles.txt1}>Followers</Text>
                  <Text style={styles.txt2}>{data.followers}</Text>
                </View>
                <View style={styles.vr1}></View>

                <View style={styles.c111}>
                  <Text style={styles.txt1}>Following</Text>
                  <Text style={styles.txt2}>{data.following}</Text>
                </View>
                <View style={styles.vr1}></View>

                <View style={styles.c111}>
                  <Text style={styles.txt1}>Posts</Text>
                  <Text style={styles.txt2}>{data.posts.length}</Text>
                </View>
              </View>

              <Text style={styles.desc}>{data.description}</Text>
            </View>

            <View style={styles.c1}>
              <Text style={styles.txt}>Your Posts</Text>
              <View style={styles.c13}>
                {
                  data.posts.map((item) => {
                    return(
                      <View style={styles.postPic} key={item.id}>
                        <Image source={{ uri: item.post_image }} style={styles.postPic} />
                      </View>
                    )
                  })
                }
              </View>
            </View>
          </ScrollView>
        </View>
      )
    }

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      paddingVertical: 50,
    },
    c1: {
      width:'100%',
      alignItems:'center',
    },
    profilePic: {
      width: 150,
      height: 150,
      borderRadius: 75,
      margin: 10
    },
    txt: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      margin: 10,
      paddingVertical: 10,
      backgroundColor:'#222222',
      paddingHorizontal: 20,
      borderRadius: 10
    },
    c11:{
      width:'100%',
      flexDirection:'row',
      justifyContent:'space-around'
    },
    c111:{
      alignItems:'center'
    },
    txt1: {
      color: '#fff',
      fontSize: 15,
    },
    txt2: {
      color: '#fff',
      fontSize: 20,
    },
    vr1:{
      width:1,
      height:50,
      backgroundColor:'#fff'
    },
    desc:{
      color: '#fff',
      fontSize:16,
      marginVertical:10,
      width:'100%',
      padding:10,
      backgroundColor:'#222222',
      paddingVertical: 20,
    },
    c13: {
      flexDirection:'row',
      flexWrap:'wrap',
      marginBottom:20
    },
    postPic:{
      height: 118,
      width: 127,
      margin: 1,
    }
  })

export default My_UserProfile
