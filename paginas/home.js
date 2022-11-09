import React, { useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList} from 'react-native';
import * as Contacts from 'expo-contacts';

function home() {
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
    <SafeAreaView style={styles.container}>
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

export default home;