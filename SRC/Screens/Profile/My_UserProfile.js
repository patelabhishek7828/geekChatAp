import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { formHead } from '../../CommonCss/formCss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import TopNavBar from '../../Components/TopNavBar'

const My_UserProfile = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <StatusBar />
          <TopNavBar navigation={navigation} />
          <Text style={formHead}>My_UserProfile</Text>
          <Bottomnavbar navigation={navigation} page={"My_UserProfile"}/>
        </View>
      )
    }

const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      paddingVertical: 50,
    }
  })

export default My_UserProfile
