import React from "react";
import { View, Text, StyleSheet, Image, Pressable, StatusBar} from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import Ionicons from "react-native-vector-icons/Ionicons";


function EventScreen2() {
  const navigation = useNavigation();


  useEffect(() => {
    // Check your background color condition, here assuming a dark background
    const isDarkBackground = false; // Change this based on your logic
  
    // Set barStyle based on background color
    StatusBar.setBarStyle(isDarkBackground ? 'light-content' : 'dark-content');
  }, []);

  return (
     
      <View style={{ flex: 1, alignItems: "center", marginTop: 60 }}>
        
   
      {/* Inhalte */}
      <Pressable onPress={() => navigation.navigate("EventDetailScreen")}>
        <View style={styles.nearestEventBlock}>
          {/* Glass Background für die Beschreibung */}
          <Image
            source={require('../screens/img/Theater.jpg')}
            style={{ width: "100%", height: "100%", borderRadius: 20}}
          />

          <View style={styles.glassDescription}>
            <Text style={styles.eventTitle}>Theater "Bizim Istasyon"</Text>
            <View style={styles.additionalInfo}>
              <Ionicons name="location-outline" size={20} color="white" />
              <Text style={styles.infoText}>SIG-Bildungszentrum {"\n"}Bahnstrasse 80, Regensdorf 8105</Text>
            </View>
            <View style={styles.additionalInfo}>
              <Ionicons name="calendar-outline" size={20} color="white" />
              <Text style={styles.infoText}>25. Juli 2023 - 3 Tage verbleiben</Text>
            </View>
          </View>
        </View>
      </Pressable>

        <View style={styles.spaceBetweenText}>
          
            <Text style={{ fontSize: 16, fontWeight: "600" }}>Spätere Events</Text>
          
          <Pressable onPress={() => navigation.navigate("AllEventList")}>
            <Text style={{ color: "#49B295", alignSelf: "flex-end" }}>Alle Events</Text>
          </Pressable>
        </View>

    <View style={styles.moreEventsBlock}>
            
            
        <View style={styles.lateEventBlock}>
                <Image source={require('../screens/img/Theater.jpg')} style={styles.imageBlock} />
                <View style={styles.textHalf}>
                    <View style={styles.categoryBackground}><Text style={styles.categoryText}>Unterhaltung</Text></View>
                    <Text style={styles.titleText}>Theater</Text>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.dateText}>25. Juli 2023 - 3 Tage verbleiben</Text>
                    </View>
                </View>
            </View>   
            <View style={{borderWidth: 0.5, borderColor: "grey", width: "98%", alignSelf: "center"}}></View>
            <View style={styles.lateEventBlock}>
                <Image source={require('../screens/img/Theater.jpg')} style={styles.imageBlock} />
                <View style={styles.textHalf}>
                    <View style={styles.categoryBackground}><Text style={styles.categoryText}>Fest</Text></View>
                    <Text style={styles.titleText}>Theater</Text>
                    <View style={styles.bottomContainer}>
                        <Text style={styles.dateText}>25. Juli 2023 - 3 Tage verbleiben</Text>
                    </View>
                </View>
            </View>         
        </View>

        
      </View>
    
  );
}

export default EventScreen2;

const styles = StyleSheet.create({
  

  nearestEventBlock: {
    width: "90%",
    height: "70%",
    justifyContent: "left",
    alignItems: "center",
    flexDirection: "row",
    shadowColor: 'grey',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 8,
        elevation: 6,
        borderRadius: 20,
        
  },
  glassDescription: {
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    padding: 15,
    position: "absolute",
    bottom: 20,
    left: 20,
    
  },
  eventTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  additionalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  infoText: {
    marginLeft: 5,
    color: 'white',
   
  },

  moreEventsBlock:{
    marginTop: 10,
    width: "90%",
    height: "35%",
  },

  lateEventBlock:{
    width: "100%",
    height: "47%",
    justifyContent: "left",
    alignItems: "center",
    flexDirection: "row",
  },

  imageBlock:{
    width: "28%",
    height: "80%",
    borderRadius: 10,
  },

  textHalf:{
    width: "66%",
    height: "80%",
    marginLeft: 15,
  },

  categoryBackground: {
    backgroundColor: "#49B295",
    alignSelf: 'flex-start',
    marginTop: 3,
    borderRadius: 8,
    paddingVertical: 3,
    paddingHorizontal: 5,
    },
    
    categoryText: {
        fontSize: 12, 
        color: "white",
    },
    titleText: {
        fontSize: 20, 
        fontWeight: 'bold',
        marginTop: 5, 
        color: "#646464"
    },
    bottomContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 5
    },
    dateText: {
        fontSize: 12, 
        color: '#6C6C6C',
    },

    spaceBetweenText: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginTop: -150,
        paddingTop: "8%",
        width: "98%", 
        
    }
});

{/* Horizontale Navigationsleiste */}
        
        {/*<View style={styles.navBar}>
            <Text style={styles.navText}>Event</Text>
            <Text onPress={() => navigation.navigate('Neuigkeiten')} style={styles.navText}>Neuigkeiten</Text>
            <Text onPress={() => navigation.navigate('Kurse')} style={styles.navText}>Kurse</Text>
        </View>*/}