import React, {useEffect, useState} from "react";
import { View, StyleSheet, Button, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import llamadoDeEmergencia from "../todoElTiempo/llamadoDeEmergencia.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

function Home() {
    const navigation = useNavigation();
    const [numeroGuardado, setGuardado] = useState(false);

    useEffect(() => {
        const getGuardado = async () => {
            setGuardado(await AsyncStorage.getItem("celular"));
        }
        getGuardado();
    }, []);


    return (
        <View >
            <View style={{marginVertical: 10}}>
                <Button title="Contactos" onPress={() => navigation.navigate('Contactos')}/>
            </View>
            <View style={{marginVertical: 10}}>
                <Button title="About Us" onPress={() => navigation.navigate("About")}/>
            </View>
            <View style={{marginVertical: 10}}>
                <Button title="Contacto de emergencia" onPress={() => navigation.navigate("Emergency")}/>
            </View>{/*
            <View>
                <Button title="Temperatura" onPress={() => navigation.navigate("Temperatura")}/>
            </View>*/}

            {numeroGuardado ? (
                <llamadoDeEmergencia/>
            ) : (
                <Text>No hay ningun numero de emergencia guardado</Text>
            )}
        </View>   
    );        

}
const styles = StyleSheet.create({
});

export default Home;