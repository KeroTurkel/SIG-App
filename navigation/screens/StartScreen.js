import React, {useEffect} from "react";
import {View, StyleSheet, Text, Image} from "react-native";

const StartScreen = ({ navigation }) => {
    useEffect(() => {
      const timeout = setTimeout(() => {
      
        
      }, 2500); // (5 seconds)
  
      return () => clearTimeout(timeout); 
    }, [navigation]);
  
    return (
      <View style={styles.container}>
      
        <Image
          source={require('../screens/img/SIG_logo.png')}
          style={styles.logo}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo: {
      width: 300, 
      height: 300, 
      resizeMode: 'contain',
    },
  });
  
  export default StartScreen;