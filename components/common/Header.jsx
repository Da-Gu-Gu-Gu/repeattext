import {StyleSheet,Image,View} from 'react-native'
import { Colors } from '../Colors/Colors'

const Header=()=>{
    return (
        <View style={styles.header}>
            <Image style={styles.img} 
            source={require('../../assets/adaptive-icon.png')}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        paddingTop:20,
        width:'100%',
        height:100,
        backgroundColor:Colors.background,
        alignItems:'center',
        justifyContent:'center',
        elevation:13,
        marginBottom:50,
    },
    img:{
        width:65,
        height:65,
    }
})

export default Header