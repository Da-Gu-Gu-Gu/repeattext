import { StyleSheet, Image, View ,Text} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Colors } from '../Colors/Colors';

const Splash=({navigation})=>{

    setTimeout(()=>{
        navigation.navigate('Index')
    },
    3000)

return (
    <View style={styles.container}>
      <Image style={styles.image}
       source={require('../../assets/adaptive-icon.png')} />
       <Text style={styles.text}>REPEAT TEXT</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontFamily:'Noto',
    fontSize:23,
    color:Colors.text,
    letterSpacing:2,
  },
  image:{
    width:125,
    height:125,
    marginBottom:5,
  }
});

export default Splash