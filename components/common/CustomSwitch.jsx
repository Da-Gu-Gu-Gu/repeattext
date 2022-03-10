import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Colors } from "../Colors/Colors";

const CustomSwitch = (props) => {


  return (
      
      <BouncyCheckbox
        size={25}
        style={{marginBottom:10}}
        fillColor={ Colors.text }
        unfillColor={Colors.background}
        iconStyle={{borderColor:'#464545',borderRadius:0,borderWidth:3}}
        text={props.text}
        
       textStyle={{
         color:'white',
         textDecorationLine:'none'
       }}
        onPress={props.change}
      />
  );
}



export default CustomSwitch;