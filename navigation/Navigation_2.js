import React from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

//Import necessery screen
import VeransstalltungenScreen from "./screens/VeranstalltungenScreen";
import MehrErfahren1 from "./MehrErfahren/MehrErfahren1";

//Screen names
//const veranstaltungName = "Events"


function Navigation2() {
    return(
        <NavigationContainer>
           <Stack.Navigator initialRouteName="Veranstaltungen">
               <Stack.Screen name="Veranstaltungen" component={VeransstalltungenScreen}/>
               <Stack.Screen name="MehrErfahren1" component={MehrErfahren1}/>
           </Stack.Navigator>
        </NavigationContainer>
    );
}


export default Navigation2;