import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PostsCards from '../Cards/PostsCards'

const FollowersRandomPost = () => {

    let data = [
      {
        id: 1,
        username: "Google_123",
        image: "https://th.bing.com/th/id/OIG.vKLFI7Sx6L.WA6uUC.Bd",
        profilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalURue8uREswsyHXvJ9qmw4TSZqCxIEQNjg&usqp=CAU",
        likes: [
          "abhishekPatel7828",
          "akshay_1989",
          "Ananmika@2301",
        ],
        comments: [
          {
            id: 1,
            username: "abhishekPatel7828",
            comment: "Nice Post" 
          },
          {
            id: 2,
            username: "vidhiPatel_@2007",
            comment: "Awesome Pic" 
          },
          {
            id: 3,
            username: "Akku_4545",
            comment: "looking great!" 
          }
        ]
    },
      {
        id: 2,
        username: "Facebook_123123",
        image: "https://th.bing.com/th/id/OIG.vKLFI7Sx6L.WA6uUC.Bd",
        profilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalURue8uREswsyHXvJ9qmw4TSZqCxIEQNjg&usqp=CAU",
        likes: [
          "amitSingh_8787",
          "sandeep6097",
          "test@gmail5565",
        ],
        comments: [
          {
            id: 1,
            username: "abhishekPatel7828",
            comment: "wonderful" 
          },
          {
            id: 2,
            username: "AnilSin_4545",
            comment: "looking great! Nice post" 
          },
        ]
      },
      {
        id: 3,
        username: "Instagram_123",
        image: "https://th.bing.com/th/id/OIG.vKLFI7Sx6L.WA6uUC.Bd",
        profilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalURue8uREswsyHXvJ9qmw4TSZqCxIEQNjg&usqp=CAU",
        likes: [
          "rajat_Dubey2332",
          "vikas_1996",
        ],
        comments: [
          {
            id: 1,
            username: "rajat_Dubey2332",
            comment: "Nice Post" 
          },
          {
            id: 2,
            username: "Akshit_@Sen2607",
            comment: "#Awesome #Great" 
          },
          {
            id: 3,
            username: "Akku_4545",
            comment: "looking great!" 
          }
        ]
    },
      {
        id: 4,
        username: "linkedIn_123",
        image: "https://th.bing.com/th/id/OIG.vKLFI7Sx6L.WA6uUC.Bd",
        profilepic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTalURue8uREswsyHXvJ9qmw4TSZqCxIEQNjg&usqp=CAU",
        likes: [
          "rajat_Dubey2332",
          "vikas_1996",
        ],
        comments: [
          {
            id: 1,
            username: "rajat_Dubey2332",
            comment: "Nice Post" 
          },
          {
            id: 2,
            username: "harish_Pal",
            comment: "#Awesome #Great" 
          },
          {
            id: 3,
            username: "Nikil_123",
            comment: "looking great!" 
          }
        ]
    },
  ]
  return (
    <ScrollView style={{width:'100%'}}>
      {
        data.map((item)=> {
          return (
            <View key={item.id}>
              <PostsCards item={item}/>
            </View>
          )
        })
      }
    </ScrollView>
  )
}

export default FollowersRandomPost

const styles = StyleSheet.create({})