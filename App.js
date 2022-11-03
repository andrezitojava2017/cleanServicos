import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import ListUsers from './screens/ListUsers/ListUsers';
import Login from './screens/Login/Login';
import Profile from './screens/profile/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListUsers">
        <Stack.Screen name="Home" component={Profile} />
        <Stack.Screen name="ListUsers" component={ListUsers} />
      </Stack.Navigator>
      {/*<Login /> 
      < />
            
      <ListUsers />
      */}
    </NavigationContainer>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#175B9A',
  },
});
export default App;
