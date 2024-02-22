import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { useEffect, useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from "react-native-vector-icons/Ionicons";



const EventDetailScreen = ({ navigation }) => {

  useEffect(() => {
    const isDarkBackground = true; // Change this based on your logic
    StatusBar.setBarStyle(isDarkBackground ? 'light-content' : 'dark-content');
  }, []);

  const isImageBright = () => {
    return true;
  }

  const getButtonBackgroundColor = () => {
    return isImageBright() ? 'white' : 'black';
  };

  const [isBellPressed, setIsBellPressed] = useState(false);

  const onPressBellButton = () => {
    // Handle bell button press
    setIsBellPressed(!isBellPressed);
  };
  
  return (
    <View style={styles.container}>
        <View style={styles.imageShadow}>
          <Image
            source={require('../screens/img/Theater.jpg')}
            style={styles.image}
          />
        </View>
        

        <TouchableOpacity
          style={[styles.backButton, { backgroundColor: getButtonBackgroundColor() }]}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={23} color={isImageBright() ? 'black' : 'white'}  />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.bellButton, { backgroundColor: isBellPressed ? 'yellow' : getButtonBackgroundColor() }]}
          onPress={onPressBellButton}
        >
          <Ionicons name="notifications-outline" size={23} color={isImageBright() ? 'black' : 'white'} />
      </TouchableOpacity>


        <View style={styles.overlay} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Theater "Bizim Istasyon"</Text>
          <Text style={styles.description}>Short description of the event...</Text>
        </View>

        <View>
          <Text style={styles.eventDetails}>
              Der Theaterverein des SiG Bildungszentrums feiert stolz sein zehnjähriges Bestehen und wird dieses besondere Jubiläum mit einer beeindruckenden Theateraufführung am Samstag, den 10. März 2024, zelebrieren. Das Highlight des Abends wird der Sketch mit dem Titel "Van Turu" sein, der die Zuschauer mit humorvollen Szenen und mitreißender Unterhaltung verzaubern wird.
          </Text>
          
          <Text style={styles.eventDetails}>
            Seit einem Jahrzehnt hat der Theaterverein unermüdlich an seiner Leidenschaft gearbeitet und begeistert das Publikum mit kreativen Inszenierungen und talentierten Darbietungen. Das Jubiläumsstück "Van Turu" verspricht eine einzigartige Mischung aus Emotionen, Komik und beeindruckender Bühnenpräsenz.
          </Text>

          
          </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: 'cover',
  },

  imageShadow:{
    height: "35%",
    width: "100%",
    shadowColor: 'grey',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 6,
  },

  overlay: {
   // Adjust the alpha value as needed
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    
  },
  description: {
    fontSize: 16,
    
  },

  eventDetails: {
    padding: 20,
    fontSize: 16,
    marginBottom: -20,
  },

  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    borderRadius: 30,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  bellButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    borderRadius: 30,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  }
});

export default EventDetailScreen;
