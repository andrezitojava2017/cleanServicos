import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import ListUsers from './screens/ListUsers/ListUsers';
import Login from './screens/Login/Login';
import Profile from './screens/profile/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserLocation from './screens/Locations/UserLocation';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Location">
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ListUsers" component={ListUsers} />
        <Stack.Screen name="Location" component={UserLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
