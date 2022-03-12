import React,{useState} from 'react'
import {ScrollView,StyleSheet,TouchableWithoutFeedback,Keyboard,Text,Alert} from 'react-native'
import { Colors } from '../Colors/Colors'
import CustomInput from '../common/CustomInput'
import Options from '../common/Options'
import Result from '../common/Result'
import ConfirmButton from '../common/ConfirmButton'

 
const Home = () => {

  const [input,setInput]=useState('')
  const [count,setCount]=useState(1)
  const [result,setResult]=useState('')
  const [isEnabled, setIsEnabled] = useState(false);
  const [order, setOrder] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const orederSwitch = () => setOrder(previousState => !previousState);

  const textHandler=(x)=>{
    setInput(x)
  }

  const lineHandler=(x)=>{
    let aa=x.replace(/\D/gm, "")
    aa>0?setCount(aa):setCount(1)
  }



  const confirm=()=>{
      let res=[]
      Keyboard.dismiss()
      let chooseNumber=Number(count)
      if(chooseNumber===0 || input.length<1){
        Alert.alert("Fail!",
        "Please Fill All Data",
        [{text:'Okay',style:'destructive'}])
        return;
    }
    if(chooseNumber>1000){
      Alert.alert("Invalid Number!",
      "Less than 1000",
      [{text:'Okay',style:'destructive'}])
      return;
  }
      for(let i=1;i<=chooseNumber;i++){
          order?res.push(i+"."+input):res.push(input)
      }
      isEnabled?setResult(res.join('\n')):setResult(res)
  } 

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <ScrollView style={styles.view}>
        <ScrollView style={styles.content}>
        <CustomInput value={input} change={textHandler} multi={true} edit={true} keyboard={"default"} text={"Enter your text"} focus={true} />
        <CustomInput value={count} change={lineHandler} multi={false} edit={true} keyboard={"numeric"} text={"Number of Lines"} focus={false} />
        <Options line={toggleSwitch} order={orederSwitch} />
        <ConfirmButton confirm={confirm} />
        <Result res={result} />
        </ScrollView>
    </ScrollView>
    </TouchableWithoutFeedback>
  )
}


const styles=StyleSheet.create({
    view:{
        flex:1,
        paddingTop:10,
        backgroundColor:Colors.background,
    },
    content:{
        flex:1,
        padding:30,
        paddingTop:0,
    }
})

export default Home