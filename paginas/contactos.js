import { View, Text } from "react-native"
import React, { useEffect } from 'react';
import * as Contacts from 'expo-contacts';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Contacts from 'expo-contacts';

function contactos() {
    useEffect(() => {
      (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === 'granted') {
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Emails],
          });
  
          if (data.length > 0) {
            const contact = data[0];
            console.log(contact);
          }
        }
      })();
    }, []);
  
    return (
      <View style={styles.container}>
        <Text>Contacts Module Example</Text>
      </View>
    );
  }
export default contactos;