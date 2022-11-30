import React, { useState, useEffect } from 'react';
import {Text, SafeAreaView, StyleSheet } from 'react-native';
import axios from "axios";
import * as Location from "expo-location"

const API_KEY="3301fd17bfef8d6f8cdcf92da11f6f2b";
const url="https://api.openweathermap.org/data/2.5/onecall";

function temperatura() {

  let minutos = new Date().getMinutes();
  let hora = new Date().getHours();
  let semana = new Date().getDay();
  let dia = new Date().getDate();
  let mes = new Date().getMonth();
  let año = new Date().getFullYear();

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
        <Text> Año:{año}</Text>
        <Text> Mes:{mes}</Text>
        <Text> Semana:{semana}</Text>
        <Text> Día:{dia}</Text>
        <Text> Hora:{hora}</Text>
        <Text> Minutos:{minutos}</Text>
        </SafeAreaView>
    );

}
export default temperatura;