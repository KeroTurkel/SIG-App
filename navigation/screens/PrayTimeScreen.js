
import { TextInput, ActivityIndicator, FlatList, StyleSheet, View, Text } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
import SelectList from 'react-native-dropdown-select-list';
import {
    useFonts,
    K2D_400Regular,
} from '@expo-google-fonts/k2d';
import { select } from 'async';
import PrayerTimeCard from '../../components/PrayerTimeCard';
import PrayerTimeCardMorning from '../../components/PrayerTimeCardMorning';
import usePrayerTimes from '../../hooks/usePrayerTimes';


export default function PrayTimeScreen({ navigation }) {
    const [isActive, setActive] = useState(false);
    const [isActiveFajr, setActiveFajr] = useState(false);
    const [isActiveSunrise, setActiveSunrise] = useState(false);
    const [isActiveDhuhr, setActiveDhuhr] = useState(false);
    const [isActiveAsr, setActiveAsr] = useState(false);
    const [isActiveMaghrib, setActiveMaghrib] = useState(false);
    const [isActiveIsha, setActiveIsha] = useState(false);
    const [currentDate, setcurrentDate] = React.useState("");

    const [selected, setSelected] = useState("Aarau");
    const { isLoading, data, error } = usePrayerTimes(selected); //usePrayerTimes (hook)

    const handleChange = useCallback((event) => {
        setSelected(event.value);
    }, []);
    
    let [fontsLoaded] = useFonts({
        K2D_400Regular,
    });


    //Arraylist für Get Content von API ################################
    let fajr = "Fajr";
    let sunrise = "Sunrise";
    let dhuhr = "Dhuhr";
    let asr = "Asr";
    let maghrib = "Maghrib";
    let isha = "Isha";

    const prayerTimesArray = [fajr, sunrise, dhuhr, asr, maghrib, isha];
    //##########################################################


    //data.data?.timings geht auch
    /*während dem Laden sind keine Daten in timings vorhanden, daher 
        gab es ein Fehler aus. */

    //Get content von API ##############################
    const getContent = (prayerTimesArray) => {
        if (isLoading == false && data.data) {

            if (error) {
                return <Text>{error}</Text>
            }
            if (!data || !data.data || !data.data.timings) {
                return <Text>Zeit:</Text>;
            }
            //console.log(data.data.timings)
            return <Text >
                {data.data.timings[prayerTimesArray]}
            </Text>


        } else {
            return <ActivityIndicator size="large" />
        }

    }
    // #################################################


    //Datum ############################################
    useEffect(() => {
        var date = new Date().getDate()
        var month = new Date().getMonth() + 1
        var year = new Date().getFullYear()
        setcurrentDate(
            date + "." + month + "." + year
        )


    }, [])

    //Current Time to show PrayerTime

    const [time, setTime] = useState(new Date());
    const hour = time.getHours();
    const minute = time.getMinutes();

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);





    //####################################################




    useEffect(() => {
        if (data.data && data.data.timings) {
            const currentTime = time.toLocaleTimeString();

            for (let i = 0; i < prayerTimesArray.length; i++) {
                if (currentTime > data.data.timings[prayerTimesArray[i]]) {
                    setCurrentPrayerTime(prayerTimesArray[i]);
                }
            }
            console.log("current time", currentPrayerTime);
        }
    }, [time, data]);

    //Bordercolor change
    const [borderColor, setBorderColor] = React.useState("blue");
    const [currentPrayerTime, setCurrentPrayerTime] = useState("");

    useEffect(() => {
        if (data.data && data.data.timings) {
            const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false });
            
            // Setze den Zustand für jedes Gebet
            setActiveFajr(currentTime >= data.data.timings.Fajr && currentTime < data.data.timings.Sunrise);
            setActiveSunrise(currentTime >= data.data.timings.Sunrise && currentTime < data.data.timings.Dhuhr);
            setActiveDhuhr(currentTime >= data.data.timings.Dhuhr && currentTime < data.data.timings.Asr);
            setActiveAsr(currentTime >= data.data.timings.Asr && currentTime < data.data.timings.Maghrib);
            setActiveMaghrib(currentTime >= data.data.timings.Maghrib && currentTime < data.data.timings.Isha);
            setActiveIsha(currentTime >= data.data.timings.Isha || currentTime < data.data.timings.Fajr);
        }
    }, [time, data]);


    //Dropdwon Ortschaftsdaten ###############################################

    const standorte = [

        { value: "Basel", text: "Basel" },
        { value: "Bern", text: "Bern" },
        { value: "Bürgeln", text: "Bürgeln" },
        { value: "Genf", text: "Genf" },
        { value: "Cham", text: "Cham" },
        { value: "Chur", text: "Chur" },
        { value: "Dietikon", text: "Dietikon" },
        { value: "Glarus", text: "Glarus" },
        { value: "Liestal", text: "Liestal" },
        { value: "Lugano", text: "Lugano" },
        { value: "Luzern", text: "Luzern" },
        { value: "Oberuzwil", text: "Oberuzwil" },
        { value: "Olten", text: "Olten" },
        { value: "Sion", text: "Sion" },
        { value: "Solothurn", text: "Solothurn" },
        { value: "Wetzikon", text: "Wetzikon" },
        { value: "Winterthur", text: "Winterthur" },
        { value: "Wohlen", text: "Wohlen" },

    ];
    //######################################

    const IconColorChange = (isActive, prayer) => {
        if (!isActive) {
            return "grey";
        }
    
        switch (prayer) {
            case 'Fajr':
                return "#ff4d00";
            case 'Sunrise':
                return "#ff8100";
            case 'Dhuhr':
                return "#ffea00";
            case 'Asr':
                return "#fbcb78";
            case 'Maghrib':
                return "#ff8100";
            case 'Isha':
                return "#C4BEA3";
            default:
                return "grey" ;
        }
    }
   
    return (

        <View style={{ flex: 1, alignItems: "center", marginTop: 40 }}>

            <View >
                <Text style={styles.date}>{currentDate}  </Text>
                <Text> CurrentTime: {time.toLocaleTimeString()}</Text>
                <Text> PrayerTime:   {getContent(prayerTimesArray[5])}</Text>
            </View>

            <View style={[styles.dropDownList, styles.textTimeName]}>


                <SelectList
                    value={selected}
                    onChange={() => (handleChange)}
                    setSelected={setSelected}
                    data={standorte}
                    dropdownStyles={{ backgroundColor: "#ededed", borderColor: "#D3D3D3" }}
                    dropdwonBoxStyles={{ borderColor: "#ffffff" }}
                    boxStyles={styles.dropdownBoxStyle} //Ausgewählte ortschaft angezeigt, wird überschrieben
                    textStyles={{ fontSize: 20 }}
                    option={{ value: "Aarau", text: "Wähle ein Ort aus." }}

                />

            </View>

            <View style={{ width: "100%", alignItems: "center" }} >
                <View style={{ alignItems: "center", width: "90%", flexDirection: "row-reverse", marginTop: 5 , marginBottom: "-1%"}}>
                    <PrayerTimeCardMorning iconName="sunny" isActive={isActiveSunrise} prayerTime={getContent(prayerTimesArray[1])} iconColor={IconColorChange(isActiveSunrise, 'Sunrise')}  title="Sunrise"/>
                        <View style={{ width: "3%" }}></View>
                    <PrayerTimeCardMorning iconName="sunny" isActive={isActiveFajr} prayerTime={getContent(prayerTimesArray[0])} iconColor={IconColorChange(isActiveFajr, 'Fajr')} title="Fajr"/>

                </View>

                <PrayerTimeCard iconName="sunny" isActive={isActiveDhuhr} prayerTime={getContent(prayerTimesArray[2])} iconColor={IconColorChange(isActiveDhuhr, 'Dhuhr')} title="Dhuhr"/>
                <PrayerTimeCard iconName="sunny" isActive={isActiveAsr} prayerTime={getContent(prayerTimesArray[3])} iconColor={IconColorChange(isActiveAsr, 'Asr')} title="Asr"/>
                <PrayerTimeCard iconName="sunny" isActive={isActiveMaghrib} prayerTime={getContent(prayerTimesArray[4])} iconColor={IconColorChange(isActiveMaghrib, 'Maghrib')} title="Maghrib"/>
                <PrayerTimeCard iconName="moon" isActive={isActiveIsha} prayerTime={getContent(prayerTimesArray[5])} iconColor={IconColorChange(isActiveIsha, 'Isha')} title="Isha"/>

            </View>

        </View>

    )

}

const styles = StyleSheet.create({

    date: {
        fontSize: 50,
        marginTop: "10%",
        color: "#274546",
        fontFamily: 'K2D_400Regular',
    },

    dropdownBoxStyle: {
        borderColor: "grey",
        borderWidth: 2,
        shadowColor: 'black',
        backgroundColor: "white",
    },

    dropDownList: {
        width: "90%",
        marginTop: "5%",
        marginBottom: "3%",
    },

    textTime: {
        fontSize: "20px", fontFamily: 'K2D_400Regular', color: "#274546",
    },

    textTimeName: {
        fontSize: "15px", fontFamily: 'K2D_400Regular', color: "#274546",
    }


});






