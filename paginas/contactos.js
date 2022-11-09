import * as Contacts from 'expo-contacts';
import React, { useEffect } from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';

function contactos() {
  const [contactos, setContactos] = useState([]);
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Emails, Contacts.Fields.PhoneNumbers],
        });
        if(data.length > 0) {
          setContactos(data)
        }
      }
    })();
  },[]);
  
    return (
      <SafeAreaView style={styles.container}>
        <FlatList data={contactos} renderItem={renderItem} keyExtractor={item => item.id} />
      </SafeAreaView>
    );
  }
export default contactos;