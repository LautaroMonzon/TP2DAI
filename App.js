import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './paginas/home';
import contacts from './paginas/contactos';
import temperatura from './paginas/temperatura';
import configNumEmergencia from './paginas/configNumEmergencia';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="configNumEmergencia" component={configNumEmergencia} />
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;