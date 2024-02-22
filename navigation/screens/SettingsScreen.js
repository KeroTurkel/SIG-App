import React, { useState } from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';



export default function SettingsScreen({ navigation }) {

    const [gebetszeitBenachrichtigung, setGebetszeitBenachrichtigung] = useState(true);
    const [eventBenachrichtigung, setEventBenachrichtigung] = useState(true);
    const [ezanruf, setEzanruf] = useState(true);

    return (
        <View style={{ flex: 1}}>
            <View style={{alignItems: "center", marginBottom: "10%", backgroundColor: "white"}}>
                <Text style={styles.title}>Einstellungen</Text>
                <View style={styles.titleLine}></View> 
            </View>
             
            <Text style={styles.categoryTitle}>Benachrichtigungen</Text>

                <View style={styles.categoryFields}>
                    <Text style={styles.categoryPoints}>Gebetszeit Benachrichtigung</Text>
                    <Switch
                    value={gebetszeitBenachrichtigung}
                    onValueChange={() => setGebetszeitBenachrichtigung(!gebetszeitBenachrichtigung)}
                    trackColor={{ false: '#767577', true: '#49B295' }}
                    />
                </View>

                <View style={styles.categoryFields}>
                    <Text style={styles.categoryPoints}>Event Benachrichtigung</Text>
                    <Switch
                    value={eventBenachrichtigung}
                    onValueChange={() => setEventBenachrichtigung(!eventBenachrichtigung)}
                    trackColor={{ false: '#767577', true: '#49B295' }}
                    />
                </View>

                <View style={styles.categoryFields}>
                    <Text style={styles.categoryPoints}>Ezanruf</Text>
                    <Switch
                    value={ezanruf}
                    onValueChange={() => setEzanruf(!ezanruf)}
                    trackColor={{ false: '#767577', true: '#49B295' }}
                    />
                </View>

                <View style={styles.absatz}></View>
                
            <Text style={styles.categoryTitle}>Sprache und Ort</Text>

            <View style={styles.categoryFields}>
                    <Text style={styles.categoryPoints}>Sprache</Text>
                </View>
                <View style={styles.categoryFields}>
                    <Text style={styles.categoryPoints}>Standort</Text>
                </View>




        </View>
    );
}


const styles = StyleSheet.create ({
    
    textStyle: {
        fontSize: 50,     
    },
    title:{
        marginTop: "14%",
        fontSize: 26,
        marginBottom: 20,
        alignItems: "center",
        
    },
    titleLine:{
        width: "100%",
        borderWidth: 0.4,
        borderColor: "#B1B1B1",
      
    },
    categoryTitle:{
        fontSize: 17,
        fontWeight: "bold",
        padding: 15,
        color: "#595959",
    },

    categoryFields:{
        width: "100%",
        backgroundColor: "white",
        borderTopColor: "#B1B1B1",
        borderBottomColor: "#B1B1B1",
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderWidth: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-between', // Änderung hier
        alignItems: "center",
        paddingRight: 15,
    },

    categoryPoints:{
        fontSize: 15.5,
        color: "#272727",
        padding: 15,
    },

    absatz: {
        padding: 15,
    },

    switch: {
        transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], 
        alignSelf: 'flex-end', 
        
      },

    
});

