import * as React from "react";
import { StyleSheet, Text, View  } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";

const PrayerTimeCardMorning = ({isActive, prayerTime, title, iconName, iconColor}) => {
    return(
        <View style={styles.containerCardMorning}>
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
                    <IonIcons size={30} name={iconName} color={iconColor}/>
                </View>
            </View>
        </View>
    );
}

export default PrayerTimeCardMorning;

const styles = StyleSheet.create ({
    containerCardMorning: {
        width: "48.5%",
        height: 95,
    },

    card: {
        padding: 20,
        borderRadius: 16,
        backgroundColor: "#ffffff",
        borderWidth: 2,
        borderColor: "grey",
        flexDirection: "row",
        justifyContent: 'space-between', 
    },

    icon: {
        justifyContent: "center",
        alignItems: "center",
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
        borderRadius: 10, 
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
       
    },

    textTimeInactive: {
        fontSize: 20,
        fontFamily: 'K2D_400Regular',
        color: "#274546",
    },

    textTimeName: {
        fontSize: 15,
        fontFamily: 'K2D_400Regular',
        color: "#274546",
    }
});

