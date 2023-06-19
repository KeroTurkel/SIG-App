import * as React from "react";
import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';


export default function SettingsScreen({ navigation }) {


    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text
                onPress={() => navigation.navigate("Home")}
                style={{ fontSize: 26, fontWeight: "bold" }}>Einstellungen</Text>         
        </View>
    );
}


const styles = StyleSheet.create ({
    container: {
        width: "90%",
        height: "20%",
        borderRadius: 16,
        padding: 10,
        backgroundColor: "white",
        paddingTop: Constants.statusBarHeight,
    },

    textStyle: {
        fontSize: 50,
        
    },

  
    
});

