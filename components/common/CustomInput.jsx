import {View,Text,TextInput,StyleSheet} from 'react-native'
import { Colors } from '../Colors/Colors'

const CustomInput=(props)=>{
    return (
        <View>
            <Text style={styles.text}>{props.text}</Text>
            <TextInput style={[styles.input,
            {
            height:props.multi?150:40,
            width:props.multi?null:55
            }]}
            // defaultValue={props.multi?null:1}
            autoFocus={props.focus}
            multiline={props.multi}
            editable={props.edit}
            onChangeText={(e)=>props.change(e)}
            maxLength={props.multi?null:4}
            keyboardType={props.keyboard}
              />
        </View>
    )
}

const styles=StyleSheet.create({
    input:{
        textAlignVertical:'top',
        borderWidth:1,
        borderRadius:5,
        padding:10,
        backgroundColor:'#464545',
        borderColor:Colors.text,
        color:'white',
        marginBottom:50
    },
    text:{
        color:'white',
        fontSize:20,
        marginBottom:10
    }
})

export default CustomInput