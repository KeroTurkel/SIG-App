import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AllEventList = ({navigation}) =>{

    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>AllEventlist</Text>
        </View>
    )
}

export default AllEventList;

const styles = StyleSheet.create ({
    container:{
       flex: 1,
       alignItems: "center",
       justifyContent: "center"
      
    },

    textStyle: {
        fontSize: 20,
    },
   });