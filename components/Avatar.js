import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Avatar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textName}>JA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    backgroundColor: '#FF3002',
    borderWidth: 1,
    borderColor: '#FFF5F5',
    display: 'flex',
    borderRadius: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textName: {
    fontFamily: 'WorkSans-Medium',
    fontSize: 50,
    color: '#FFFFFF',
  },
});

export default Avatar;
