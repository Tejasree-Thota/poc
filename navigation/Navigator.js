import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailsScreen';

const Stack = createStackNavigator();

const defaultScreenOptions = {
  headerTitleAlign: 'center',
  headerBackTitleVisible: true,
  headerStyle: {
    backgroundColor: 'blue',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: '600',
  },
};

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen
        name="Home Screen"
        component={HomeScreen}
        options={{
          headerShown: true,
          headerTitle: 'iQSeries',
        }}
      />
      <Stack.Screen
        name="Details Screen"
        component={DetailsScreen}
        options={{
          headerShown: true,
          headerBackTitle: 'Back',
          headerTitle: 'Details',
        }}
      />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigator;
