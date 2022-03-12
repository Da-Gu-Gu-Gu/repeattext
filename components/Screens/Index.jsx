import {View} from 'react-native'
import Header from '../common/Header'
import Home from './Home'
import { StatusBar } from 'expo-status-bar';

const Index=()=>{
    return (
        <View style={{flex:1}}>
            <StatusBar style="auto" />
            <Header />
            <Home />
        </View>
    )
}


export default Index