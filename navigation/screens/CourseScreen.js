import * as React from "react";
import { StyleSheet, View, Text, Image, Button, ScrollView, Pressable, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ionicons from '@expo/vector-icons/Ionicons';

//<Text style={styles.textButton}>{title}</Text>


export default function CourseScreen({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>

            <ScrollView style={styles.scrollview}>

                <View style={{ alignItems: "center", width: "100%", height: "100%", marginTop: "10%", marginBottom: "5%" }}>

                <Text style={styles.titleStyle}>Kurse</Text>

                    <View style={styles.card2}>
                        <View style={styles.containerInside}>

                            <View style={styles.ImageHalf}>
                                <Image source={require('../screens/img/Baby.jpg')}
                                    style={{ width: "100%", height: "100%", borderRadius: 10, }}
                                />
                            </View>
                            <View style={styles.TextHalf}>
                                <Text style={styles.topicTitle}>Güclu aile güclu nesiller</Text>
                                <View style={styles.IconAdressContainer}>
                                    <Ionicons name="location-outline" size={20} color={"#49B295"} style={styles.IconOptions} />
                                    <Text style={styles.addressOfCourse}>SIG Bildungszentrum, Bahnstrasse 80, 8105 Regensdorf</Text>
                                </View>
                                <View style={styles.button} >
                                    <Button
                                        title="Mehr"
                                        color="white"
                                        textStyle={{ fontSize: 10 }}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.card2}>
                        <View style={styles.containerInside}>

                            <View style={styles.ImageHalf}>
                                <Image source={require('../screens/img/Theater.jpg')}
                                    style={{ width: "100%", height: "100%", borderRadius: 10, }}
                                />

                            </View>


                            <View style={styles.TextHalf}>
                                <Text style={styles.topicTitle}>Theater "Bizim Istasiyon"</Text>
                                <View style={styles.IconAdressContainer}>
                                    <Ionicons name="location-outline" size={20} color={"#49B295"} style={styles.IconOptions} />
                                    <Text style={styles.addressOfCourse}>SIG Bildungszentrum, Bahnstrasse 80, 8105 Regensdorf</Text>
                                </View>
                                <View style={styles.button} >
                                    <Button
                                        title="Mehr"
                                        color="white"
                                        textStyle={{ fontSize: 10 }}
                                    />
                                </View>

                            </View>

                        </View>
                    </View>



                    <View style={styles.card2}>
                        <View style={styles.containerInside}>

                            <View style={styles.ImageHalf}>
                                <Image source={require('../screens/img/Baby.jpg')}
                                    style={{ width: "100%", height: "100%", borderRadius: 10, }}
                                />

                            </View>


                            <View style={styles.TextHalf}>
                                <Text style={styles.topicTitle}>Güclu aile güclu nesiller</Text>
                                <View style={styles.IconAdressContainer}>
                                    <Ionicons name="location-outline" size={20} color={"#49B295"} style={styles.IconOptions} />
                                    <Text style={styles.addressOfCourse}>SIG Bildungszentrum, Bahnstrasse 80, 8105 Regensdorf</Text>
                                </View>
                                <View style={styles.button}>
                                    <Button
                                        title="Mehr"
                                        color="white"
                                        onPress={() => navigation.navigate('MehrErfahren1', { screen: "Veranstaltungen" })}
                                    />
                                </View>
                            </View>

                        </View>
                    </View>


                    <View style={styles.card2}>
                        <View style={styles.containerInside}>

                            <View style={styles.ImageHalf}>
                                <Image source={require('../screens/img/arabischKurs.jpg')}
                                    style={{ width: "100%", height: "100%", borderRadius: 10, }}
                                />

                            </View>


                            <View style={styles.TextHalf}>
                                <Text style={styles.topicTitle}>Arabisch Kurs</Text>
                                <View style={styles.IconAdressContainer}>
                                    <Ionicons name="location-outline" size={20} color={"#49B295"} style={styles.IconOptions} />
                                    <Text style={styles.addressOfCourse}>SIG Bildungszentrum, Bahnstrasse 80, 8105 Regensdorf</Text>
                                </View>
                                <View style={styles.button}>
                                    <Button
                                        title="Mehr"
                                        color="white"
                                        onPress={() => navigation.navigate('MehrErfahren1', { screen: "Veranstaltungen" })}
                                    />
                                </View>
                            </View>

                        </View>
                    </View>


                    <View style={styles.card2}>
                        <View style={styles.containerInside}>

                            <View style={styles.ImageHalf}>
                                <Image source={require('../screens/img/quran.jpg')}
                                    style={{ width: "100%", height: "100%", borderRadius: 10, }}
                                />

                            </View>


                            <View style={styles.TextHalf}>
                                <Text style={styles.topicTitle}>Quran-Unterricht</Text>
                                <View style={styles.IconAdressContainer}>
                                    <Ionicons name="location-outline" size={20} color={"#49B295"} style={styles.IconOptions} />
                                    <Text style={styles.addressOfCourse}>SIG Bildungszentrum, Bahnstrasse 80, 8105 Regensdorf</Text>
                                </View>
                                <View style={styles.button}>
                                    <Button
                                        title="Mehr"
                                        color="white"

                                        onPress={() => navigation.navigate('MehrErfahren1', { screen: "Veranstaltungen" })}
                                    />
                                </View>
                            </View>

                        </View>
                    </View>

                </View>
            </ScrollView>
        </View >


    );
}


const styles = StyleSheet.create({
    
    titleStyle:{
        marginBottom: "5%",
        marginTop: "8%",
        fontSize: 30,
    },
    
    card: {
        width: "90%",
        height: 320,
        borderRadius: 16,
        padding: 20,
        backgroundColor: "#ffffff",
        alignSelf: "center"

    },

    card2: {
        width: "90%",
        marginTop: "4%",
        height: 350,
        padding: 20,
        borderRadius: 16,
        backgroundColor: "#ffffff",
        alignSelf: "center",/**ScrollView hatte verschoben mit alignSelf korrigiert */
        shadowColor: 'grey',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 8,
        elevation: 6,
    },

    containerInside: {

        width: "100%",
        height: "100%",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "space-between",

    },

    TextHalf: {

        width: "100%",
        height: "38%",
        borderRadius: 10,
        padding: 10,

    },

    ImageHalf: {

        width: "100%",
        height: "59%",
        borderRadius: 10,


    },

    topicTitle: {
        fontSize: 20,
        color: "gray",
        marginBottom: 3,

    },

    addressOfCourse: {
        width: "90%",
        borderRadius: 10,
        marginLeft: 5,
    },

    buttonDesign: {

    },

    IconAdressContainer: {
        flexDirection: "row",
        flexWrap: "nowrap"
    },

    scrollview: {
        width: "100%",
    },

    buttonContainer: {

    },

    button: {
        marginTop: 10,
        backgroundColor: "#49B295",
        padding: 0,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
        flexBasis: "auto",
        
      },

    textButton: {
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        
    }
});
