import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Login from './screens/Login';

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <Login />
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
