import * as React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from "react-native-vector-icons/Ionicons";
import { StyleSheet, View } from "react-native";

//Tab Screens
import PrayTimeScreen from "./screens/PrayTimeScreen";
import SettingScreen from "./screens/SettingsScreen";
import EventScreen2 from "./screens/EventScreen2";
import CourseScreen from "./screens/CourseScreen";

import EventDetailScreen from "./screens/EventDetailScreen";
import StartScreen from "./screens/StartScreen";


//Screen names
const prayTimeName = "Gebetszeit";
const settingsName = "Einstellungen";
const eventname = "Events";
const courseName = "Kurse";


const Tab = createBottomTabNavigator();


function MainContainer(){
    return(
        
        
       <View style={styles.container }>
        
        <Tab.Navigator initialRouteName={prayTimeName}
        
        screenOptions={({route}) => ({
            
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
                let iconName;
                let rn = route.name;
                if(rn === prayTimeName){
                    iconName = focused ? "time" : "time-outline";
                
                }else if(rn === eventname){
                    iconName = focused ? "calendar" : "calendar-outline";
        
                }else if(rn === settingsName){
                    iconName = focused ? 'settings' : "settings-outline";
                }
        
                return <Ionicons name={iconName} size={size} color={color} />;
            },
        })}
            tabBarOptions={{
            activeTintColor: "#49B295",
            inactiveTintColor: "grey",
            labelStyle: { paddingBottom: 1, fontSize: 10 },
            style: {padding: 10, height: 60},
            
        }}>
        
            
            
            
            <Tab.Screen name={eventname} component={EventScreen2}/>
            <Tab.Screen name={prayTimeName} component={PrayTimeScreen}/>
            <Tab.Screen name={settingsName} component={SettingScreen}/>
            

        </Tab.Navigator>

            
        </View>
       
    );
}

//Code for CourseScreen
/*
<Tab.Screen name={courseName} component={CourseScreen}/>
        else if(rn === courseName){
            iconName = focused ? 'library' : "library-outline";
        }
*/


const styles = StyleSheet.create ({
 container:{
    
    width: "100%",
    height: "100%",
    
 },
});

export default MainContainer;


