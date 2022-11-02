import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import ListUsers from './screens/ListUsers/ListUsers';
import Login from './screens/Login/Login';
import Profile from './screens/profile/Profile';

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      {/*<Login /> 
      <Profile />
            
      */}
      <ListUsers />
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#175B9A',
  },
});
export default App;
