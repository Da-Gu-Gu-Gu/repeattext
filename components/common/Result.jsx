import {ScrollView,View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native'
import * as Clipboard from 'expo-clipboard';


const Result=(props)=>{

    const copy=()=>{
        Clipboard.setString(props.res);
    }
    return(
        <ScrollView style={styles.container}>
            <View style={styles.res}>
            <Text style={styles.title}>
                Result
            </Text>
            <TouchableOpacity  style={styles.copywrap} onPress={copy}>
                <Image style={styles.copy} 
                source={require('../../assets/cliboard.png')}
                />
            </TouchableOpacity>
            </View>
                <Text style={styles.text}>
                    {props.res}
                </Text>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container:{
        marginTop:20,
        flex:1,
    },
    res:{
        width:'100%',
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        height:50,
    },
    title:{
        color:'white',
        fontSize:30,
    },
    copywrap:{
        backgroundColor: 'rgba(255,255,255,0.4)',
        padding:5,
        height:35,
        alignItems:'center',
        justifyContent:'center',
        width:35,
        borderRadius:5,
    },
    copy:{
       
        width:25,
        height:25,

    },
    text:{
        paddingTop:20,
        color:'white',

    }
})

export default Result