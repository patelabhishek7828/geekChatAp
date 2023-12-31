import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { icons1 } from '../CommonCss/pagecss';

const Bottomnavbar = () => {
  return (
    <View style={styles.container}>
        <MaterialCommunityIcons style={icons1} name="home" size={34} color="black" />
        <FontAwesome5 style={icons1} name="search" size={25} color="black" />
        <Feather style={icons1} name="heart" size={24} color="black" />
        <FontAwesome style={icons1} name="user-circle" size={20} color="black" />
    </View>
  )
}

export default Bottomnavbar

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#222222',
        flexDirection:'row',
        justifyContent:'space-evenly',
        position:'absolute',
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        bottom:0,
        width:'100%',
        zIndex:100,
        paddingVertical:10,
    }
})