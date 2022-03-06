import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../Screens/Home'
import Setting  from "../Screens/Setting";


const Tab=createBottomTabNavigator()


const Nav=()=>{
    return(
            <Tab.Navigator>
                <Tab.Screen name="HOME" component={Home} />
                <Tab.Screen name="SETTING" component={Setting} />
            </Tab.Navigator>
    )
}


export default Nav