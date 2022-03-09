import React, { useState } from "react";
import { View,Text, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Colors } from "../Colors/Colors";

const CustomSwitch = (props) => {


  return (
    <View style={styles.container}>
        <Text style={styles.text}>Options</Text>
      <BouncyCheckbox
        size={25}
        fillColor={ Colors.text }
        unfillColor={Colors.background}
        iconStyle={{borderColor:'#464545',borderRadius:0,borderWidth:3}}
        text="Line Break"
        
       textStyle={{
         color:'white',
         textDecorationLine:'none'
       }}
        onPress={props.change}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:50,
    marginBottom:30,
    alignItems:'flex-start',
    justifyContent: "center"
  },
  text:{
    color:'white',
    fontSize:15,
    marginBottom:20,
}
});

export default CustomSwitch;