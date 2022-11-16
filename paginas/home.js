import React, {  useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Linking } from 'react-native';
import { Accelerometer } from 'expo-sensors';

function home() {
  const [numero,setNumero]=useState();
  const [cords, setCords] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(Accelerometer.addListener(accelerometerData => {setCords(accelerometerData);})
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const { x, y, z } = cords;
  if(z>2||x>2||y>2){Linking.openURL('whatsapp://send?text=¡LLAMADO DE EMERGENCIA!&phone='+numero)}

  const asignarValor = async(numeroIngresado) => {setNumero(numeroIngresado)}

  return (
    <View>
      <TextInput onChangeText={asignarValor} keyboardType = 'numeric' placeholder="Numero de emergencia"></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: "lightgray",
      justifyContent: "center",
      alignItems: "center"
  },
  title: {
      fontSize: 40,
      fontWeight: "500",
      marginTop: 20,
  },
  logo: {
      height: 150,
      width: 150,
      marginTop: 20,
  },
  featureTitle: {
      fontSize: 20,
      fontWeight: "400",
      marginTop: 10,
      marginBottom: 10
  },
  featureContainer: {
      flex: 2,
      flexDirection: 'column'
    },
});

export default home;