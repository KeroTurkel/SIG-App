import * as React from "react";
import { StyleSheet, View, Text } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";


const PrayerTimeCard = ({isActive, prayerTime, title, iconName, iconColor}) => {
    return (
        <View style={styles.containerCard}>
            <View style={[styles.card, isActive ? styles.activeCard : styles.inactiveCard]}>
                
                <View>
                    <View style={[styles.timeContainer, isActive ? styles.activeState : styles.inactiveState]}>
                    
                        <Text style={[isActive ? styles.textTimeActive : styles.textTimeInactive]}>
                            {prayerTime}
                        </Text>
                    </View>

                    <Text style={styles.textTimeName}>
                        {title}
                    </Text>
                </View>
                <View style={styles.icon}>
                    <Ionicons name={iconName} size={30} color={iconColor} />
                </View>
            </View>
        </View>
    );
}

export default PrayerTimeCard;


const styles = StyleSheet.create ({

    containerCard: {
        marginTop: "1.5%",
        width: "90%",
        height: 95,
    },

    card: {
        padding: 20,
        borderRadius: 16,
        backgroundColor: "#ffffff",
        borderWidth: 2,
        borderColor: "grey",
        flexDirection: 'row', // Kinder nebeneinander anzeigen
        justifyContent: 'space-between', 
    },

    activeCard: {
        borderColor: "#49B295",
        borderWidth: 3.5,
        shadowColor: '#49B295',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 8,
        elevation: 6,
    },

    inactiveCard:{
        borderColor: "grey",
        borderWidth: 2,
        shadowColor: 'grey',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 6,
    },

    timeContainer: {
        borderRadius: 10, // abgerundete Ecken für den Zeitcontainer
        alignSelf: 'flex-start',
        paddingLeft: 1,
        paddingRight: 5,
        
    },

    activeState: {
        backgroundColor: "#49B295",
       
    },

    inactiveState: {
        backgroundColor: "white",
    },

    textTimeActive: {
        fontSize: 20,
        fontFamily: 'K2D_400Regular',
        color: "white",
        marginLeft: 3,
        padding: 1,
    },

    textTimeInactive:{
        fontSize: 20,
        fontFamily: 'K2D_400Regular',
        color: "#274546",
    },

    icon: {
        justifyContent: "center",
        alignItems: "center",
    },

    textTimeName: {
        fontSize: 15,
        fontFamily: 'K2D_400Regular',
        color: "#274546",
    }
});
