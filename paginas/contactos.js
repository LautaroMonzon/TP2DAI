import * as Contacts from 'expo-contacts';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView} from 'react-native';

function contactos() {
  const [contactos, setContactos] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers, Contacts.Fields.Name],
        });
        if(data.length > 0) {
          setContactos(data)
        }
      }
    })();
  },[]);

  const renderItem = () =>{
    console.log(contactos)
    return(
      <Text>Nombre: {contactos?.name}</Text>
    )
  }
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList data={contactos} renderItem={renderItem} keyExtractor={item => item.id} />
      </SafeAreaView>
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

export default contactos;