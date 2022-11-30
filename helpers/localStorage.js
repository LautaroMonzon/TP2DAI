import React, { useState, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import * as SMS from 'expo-sms';
import AsyncStorage from '@react-native-async-storage/async-storage';

async function enviarMensaje() {
  try {
    const numeroGuardado = await AsyncStorage.getItem("celular");
    await SMS.sendSMSAsync(numeroGuardado, "¡LLAMADO DE EMERGENCIA!");
  } catch (e) {
    //console.error(e)
  }
}

export default function llamadoDeEmergencia() {

  const agitar = onShake => {
  Accelerometer.setUpdateInterval(100);  

    const onUpdate = ({ x, y, z }) => {
      const acceleration = Math.sqrt(x * x + y * y + z * z);
      const sensibility = 1.8;
      if (acceleration >= sensibility) {
        onShake(acceleration);
      }
    };
    Accelerometer.addListener(onUpdate);
  };
  agitar(acceleration => {
    console.log("¡Agitar!" + acceleration);
    enviarMensaje();
  });

  return (<></>);
}