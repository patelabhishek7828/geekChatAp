import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { formHead } from '../../CommonCss/formCss'
import Bottomnavbar from '../../Components/Bottomnavbar'
import TopNavBar from '../../Components/TopNavBar'

const NotificationPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <StatusBar />
          <TopNavBar navigation={navigation} />
          <Text style={formHead}>NotificationPage</Text>
          <Bottomnavbar navigation={navigation} page={"NotificationPage"}/>
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

export default NotificationPage
