import * as React from "react";
import { StyleSheet, View, Text } from "react-native"; 
import { useEffect, useState } from "react";

const usePrayerTimes = (address) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState();

    const url = `https://api.aladhan.com/timingsByAddress?address=${address}, CH&method=99&methodSettings=18.5,null,17.5&tune=1,2,3,4,5`;

    useEffect(() => {
        const fetchPrayerTimes = async () => {
            try {
                const response = await fetch(url, {
                    headers: {
                        'X-API-KEY': '11ca32515bf443689f919a0ef9d3015e',
                    },
                });
                const result = await response.json();
                setLoading(false);
                setData(result);
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        };

        fetchPrayerTimes();
    }, [address]);

    return { isLoading, data, error };
}

export default usePrayerTimes;