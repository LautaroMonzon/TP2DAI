import React, { useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList,Linking} from 'react-native';

function home() {
  const [{ x, y, z }, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  }); 
  const [subscription, setSubscription] = useState(null);

  const _slow = () => Accelerometer.setUpdateInterval(1000);
  const _fast = () => Accelerometer.setUpdateInterval(16);

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener(setData)
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


  if((x=2)||(y=2)||(z=2))
  {
    Linking.openURL('whatsapp://send?text=Llamado de emergencia='+numero)
  }

  return (
    <View>
      <Text>Tu numero es {numero}</Text>
      <TextInput onChangeText={numero} keyboardType = 'numeric' placeholder="Numero de emergencia"></TextInput>
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