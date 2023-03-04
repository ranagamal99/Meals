import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';

import { Meals } from './components/Meals';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {LemonChicken } from './components/LemonChicken';
import { GreenNoodles } from './components/GreenNoodles';
import { AsianEggs } from './components/AsianEggs';
import {SesameBeef  } from './components/SesameBeef';
import { Iceberg } from './components/Iceberg';
const Stack = createNativeStackNavigator();

export default function App() {
  return (

<NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen  name="Meals" component={Meals}/>
        <Stack.Screen  name="LemonChicken" component={LemonChicken} /> 
        <Stack.Screen  name="GreenNoodles" component={GreenNoodles}  /> 
        <Stack.Screen  name="AsianEggs" component={AsianEggs}  />
        <Stack.Screen  name="SesameBeef " component={SesameBeef }  /> 
        <Stack.Screen  name="Iceberg" component={Iceberg}  /> 
    
      </Stack.Navigator>
    </NavigationContainer>

  
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
