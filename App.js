import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/login';
import RegisterScreen from './src/screens/register';


import { SettingsScreen ,HomeScreen ,HomeScreens,DetailsScreen} from './src/screens/home';
const Stack=createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LoginScreen'>
          <Stack.Screen
          options={{ headerShown: false }}
          name={'LoginScreen'}
          component={LoginScreen}/>  
          <Stack.Screen
          options={{ headerShown: false }}
          name={'RegisterScreen'}
          component={RegisterScreen}/>    
          <Stack.Screen
          options={{ headerShown: false }}
          name={'HomeScreen'}
          component={HomeScreen}/> 
           
          <Stack.Screen name="Settings" component={SettingsScreen} />
          <Stack.Screen name="Home" component={HomeScreens} />
          <Stack.Screen name="Details" component={DetailsScreen} />

            </Stack.Navigator>

    </NavigationContainer>
  );
}