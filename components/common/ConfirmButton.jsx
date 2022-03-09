import {View,Button,StyleSheet} from 'react-native'
import { Colors } from '../Colors/Colors'

const ConfirmButton=(props)=>{
    return(
        <View style={styles.buttonWrap}>
            <Button title='Confirm' 
            color={Colors.text}
             onPress={props.confirm} 
            />
        </View>
    )
}

const styles=StyleSheet.create({
    buttonWrap:{
        width:'100%',
        height:60,
        borderRadius:5,
    }
})

export default ConfirmButton