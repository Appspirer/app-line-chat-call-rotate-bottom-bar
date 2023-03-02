// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Boarding, ChatDetails, CallDetails } from '../screens';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Boarding" component={Boarding} />
        <Stack.Screen name="HomeScreen" component={BottomTabs} />
        <Stack.Screen name="ChatDetails" component={ChatDetails} />
        <Stack.Screen name="CallDetails" component={CallDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStack;