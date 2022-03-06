import React from 'react'
import {View,StyleSheet,TouchableWithoutFeedback,Keyboard} from 'react-native'
import { Colors } from '../Colors/Colors'
import CustomInput from '../common/CustomInput'
import Header from '../common/Header'

const Home = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.view}>
        <Header/>
        <View style={styles.content}>
        <CustomInput />
        <CustomInput />
        </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles=StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:Colors.background,
    },
    content:{
        flex:1,
        padding:30
    }
})

export default Home