// const response = await axios.get(`${url}?lat=${data.coords.latitude}&lon=${data.coords.longitude}&appid=${API_KEY}&units=metric`)
import React, { useState, useEffect } from 'react';
import {Text, SafeAreaView, StyleSheet } from 'react-native';
import axios from "axios";
import * as Location from "expo-location"

const API_KEY="3301fd17bfef8d6f8cdcf92da11f6f2b";
const url="https://api.openweathermap.org/data/2.5/onecall";

const temperatura = () => {
    let minutes = new Date.getMinutes();
    let hour = new Date.getHours();
    let weekDay = new Date.getDay();
    let day = new Date.getDate();
    let month = new Date.getMonth() + 1;
    let year = new Date.getFullYear();
    const [weather, setWeather] = useState();


    useEffect(() => {
        (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            return;
        }
          
        const data = await Location.getCurrentPositionAsync({});
        const response = await axios.get(`${url}?lat=${data.coords.latitude}&lon=${data.coords.longitude}&appid=${API_KEY}&units=metric`)
        setWeather(response.data);
        })();
    }, []);

    return (
        <SafeAreaView >
        <Text> Dia: {year}{month}{weekDay}{day}{hour}{minutes} </Text>
        <Text> Ubicación: {weather.lat}{weather.lon} </Text>
        <Text> Temperatura: {weather.current.temp} </Text>
        </SafeAreaView>
    );

}
export default temperatura;
