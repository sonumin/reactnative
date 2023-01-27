import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "./screens/HomeScreen";
import SendScreen from "./screens/SendScreen";
import DetailScreen from "./screens/DetailScreen";
import SettingScreen from "./screens/SettingScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';




const TabStack = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const SettingStack = createStackNavigator();
const HomeName = 'homeStack';
const detailName = 'detailStack';
const SettingName = 'settingStack';
const HomeStackScreen= ()=>{
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={HomeScreen} options={{title:"홈"}}/>
        </HomeStack.Navigator>
    );
};

const DetailStackScreen= ()=>{
    return(
        <DetailStack.Navigator>
            <DetailStack.Screen name='Detail' component={DetailScreen}options={{headerShown:false}} />
            <DetailStack.Screen name="Send" component={SendScreen}options={{headerShown:false}}/>
        </DetailStack.Navigator>
    );
};
const SettingStackScreen= ()=>{
    return(
        <SettingStack.Navigator>
            <SettingStack.Screen name='Setting' component={SettingScreen}options={{headerShown:false}}/>
        </SettingStack.Navigator>
        );  

    }



    const TabStackScreen = () => {
        return(
            <TabStack.Navigator
            inintailRouteName={HomeName}
        screenOptions={({route})=>
        ({tabBarIcon: ({focused,color,size})=>{
            let iconName;
            let rn = route.name;

            if(rn==HomeName){
                iconName = focused ? 'home' : 'home-outline';
            }else if(rn ==detailName){
                iconName = focused ? 'add' : 'add-outline';
            }else if(rn ==SettingName){
                iconName = focused ? 'happy' : 'happy-outline';
            }

            return <Ionicons name ={iconName} size = {size} color= {color}/>
        },
        })}
        tabBarOptions={{
            activeTintColor:'black',
            inactiveTintColor:'grey',
        }}
        
        
        >
                <TabStack.Screen name={HomeName} component = {HomeStackScreen} />
                <TabStack.Screen name ={detailName} component = {DetailStackScreen} />
                <TabStack.Screen name ={SettingName} component = {SettingStackScreen}/> 
            </TabStack.Navigator>
        );
    }

export default TabStackScreen;
