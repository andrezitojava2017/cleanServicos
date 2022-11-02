import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Clean</Text>
        <Text style={styles.text}>Serviços</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontFamily: 'WorkSans-Medium',
    color: '#FF3002',
    fontSize: 36,
    marginBottom: -15,
  },
  textButton: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily: 'WorkSans-Medium',
  },
  button: {
    width: 200,
    backgroundColor: '#FF3002',
    borderRadius: 20,
    padding: 6,
    marginTop: 50,
  },
});

export default Login;
