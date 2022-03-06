import {View,Text,TextInput,StyleSheet} from 'react-native'
import { Colors } from '../Colors/Colors'

const CustomInput=()=>{
    return (
        <View>
            <TextInput style={styles.input} placeholder="Enter your text..." />
        </View>
    )
}

const styles=StyleSheet.create({
    input:{
        height:45,
        borderWidth:1,
        borderRadius:5,
        padding:10,
        borderColor:Colors.text,
        color:'white',
        marginBottom:50
    }
})

export default CustomInput