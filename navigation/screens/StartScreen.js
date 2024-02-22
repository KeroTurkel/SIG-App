import React, {useEffect} from "react";
import {View, StyleSheet, Text, Image} from "react-native";

const StartScreen = ({ navigation }) => {
    useEffect(() => {
      const timeout = setTimeout(() => {
        // Navigate to the main part of your app (replace 'MainContainer' with your main screen's name)
        
      }, 2500); // 5000 milliseconds (5 seconds)
  
      return () => clearTimeout(timeout); // Cleanup on unmount
    }, [navigation]);
  
    return (
      <View style={styles.container}>
        {/* Your app logo */}
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
      width: 300, // Adjust the size as needed
      height: 300, // Adjust the size as needed
      resizeMode: 'contain',
    },
  });
  
  export default StartScreen;