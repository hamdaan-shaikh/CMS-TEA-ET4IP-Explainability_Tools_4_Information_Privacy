import React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screen imports
import LandingScreen from '../screens/LandingScreen';
import OverviewScreen from '../screens/OverviewScreen';
import PredictionScreen from '../screens/PredictionScreen';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      <Stack.Screen name="OverviewScreen" component={OverviewScreen} />
      <Stack.Screen name="PredictionScreen" component={PredictionScreen} />
    </Stack.Navigator>
  );
};