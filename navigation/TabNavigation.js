import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

//Screens
import NewsScreen from "./screens/NewsScreen";
import CourseScreen from "./screens/CourseScreen";


const Tab = createMaterialTopTabNavigator();

function TabNavigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Neuigkeiten' component={NewsScreen} />
            <Tab.Screen name='Kurse' component={CourseScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigation;