import { ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { formHead, formHead2 } from '../../CommonCss/formCss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import TopNavBar from '../../Components/TopNavBar'
import { srchBar } from '../../CommonCss/pagecss'
import UserCard from '../../Cards/UserCard'

const SearchuserPage = ({ navigation }) => {
  const [searchUser, setSearchUser] = useState('');
  let data = [
    {
      username: "sandeep@124",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "rohit9877",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "mahesh_126",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "abhishek7828",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "akshayPatel",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "Akhilesh",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "vikasTiwari",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "akshayPatel1989",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "rajShubham",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "vishnuApcomp11",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "akshay1989",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "rajShubham778787",
      profile_image: "https://picsum.photos/200/300",
    },
    {
      username: "vishnuExprtajjld",
      profile_image: "https://picsum.photos/200/300",
    },
  ]
    return (
        <View style={styles.container}>
          <StatusBar />
          <TopNavBar navigation={navigation} />
          <Bottomnavbar navigation={navigation} page={"SearchuserPage"}/>

          <TextInput onChangeText={(text) => { setSearchUser(text) }} style={srchBar} placeholder='Enter Search'/>
          <ScrollView style={styles.userListScroll}>
            {
              data.filter((item)=>{
                if(searchUser == ''){
                  return null;
                }else if( item.username.toLowerCase().includes(searchUser.toLowerCase()) ){
                  return item
                }
              }).map((item, index)=> {
                return <UserCard key={item.username} user={item}/>
              })
            }
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
    searchInput: {
      color:"#fff", 
      width:'100%', 
      height:20
    },
    userListScroll:{
      width:'100%',
      marginTop:20,
    }
  })

export default SearchuserPage;