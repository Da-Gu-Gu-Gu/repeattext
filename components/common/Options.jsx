import React from "react";
import { View,Text, StyleSheet } from "react-native";
import CustomSwitch from "./CustomSwitch";

const Options=(props)=>{
    return(
        <View>
              <Text style={styles.text}>Options</Text>
              <CustomSwitch change={props.line} text="Line Break" />
              <CustomSwitch change={props.order} text="Order List" />
        </View>
    )
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

export default Options