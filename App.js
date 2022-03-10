import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import Index from './components/Screens/Index';
import Splash from './components/Screens/Splash'



const Stack=createNativeStackNavigator()
export default function App() {

  const [loaded] = useFonts({
    'Noto': require('./assets/fonts/NotoSerif-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
  
  <NavigationContainer>
  
    <Stack.Navigator initialRouteName="Splash"  screenOptions={{headerShown:false}}>
      <Stack.Screen name="Splash" component={Splash}  />
      <Stack.Screen name="Index" component={Index}  />
    </Stack.Navigator>
   </NavigationContainer>
  )
}


