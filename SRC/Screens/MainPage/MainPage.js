import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { containerFull } from '../../CommonCss/pagecss'
import { formHead, formHead2 } from '../../CommonCss/formCss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import TopNavBar from '../../Components/TopNavBar'
import FollowersRandomPost from '../../Components/FollowersRandomPost'

const MainPage = ({ navigation }) => {
  return (
    <View style={containerFull}>
      <StatusBar />
      <TopNavBar />
      <FollowersRandomPost />
      <Bottomnavbar />
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({})