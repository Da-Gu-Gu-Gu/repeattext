import React,{useState} from 'react'
import {ScrollView,View,StyleSheet,TouchableWithoutFeedback,Keyboard,Text,Alert} from 'react-native'
import { Colors } from '../Colors/Colors'
import CustomInput from '../common/CustomInput'
import Header from '../common/Header'
import CustomSwitch from '../common/CustomSwitch'
import Result from '../common/Result'
import ConfirmButton from '../common/ConfirmButton'

const Home = () => {

  const [input,setInput]=useState('')
  const [count,setCount]=useState(1)
  const [result,setResult]=useState('')
  const [isEnabled, setIsEnabled] = useState(false);


  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const textHandler=(x)=>{
    setInput(x)
  }

  const lineHandler=(x)=>{
    let aa=x.replace(/[^0-9]/g,'')
    aa>0?setCount(aa):setCount(1)
  }



  const confirm=()=>{
      let res=[]
      Keyboard.dismiss()
      let chooseNumber=Number(count)
      console.log(chooseNumber)
      console.log(input)
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
      for(let i=0;i<chooseNumber;i++){
          res.push(input)
          console.log('gway si')
      }
      isEnabled?setResult(res.join('\n')):setResult(res)
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.view}>
        <Header/>
        <ScrollView style={styles.content}>
        <CustomInput value={input} change={textHandler} multi={true} edit={true} keyboard={"default"} text={"Enter your text"} focus={true} />
        <CustomInput value={count} change={lineHandler} multi={false} edit={true} keyboard={"numeric"} text={"Number of Lines"} focus={false} />
        <CustomSwitch change={toggleSwitch} />
        <ConfirmButton confirm={confirm} />
        <Result res={result} />
        </ScrollView>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles=StyleSheet.create({
    view:{
        flex:1,
        backgroundColor:Colors.background,
    },
    content:{
        flex:1,
        padding:30,
        paddingTop:0,
    }
})

export default Home