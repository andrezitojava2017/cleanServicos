import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import color from '../styles/colors.json';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Information = props => {
  return (
    <View style={style.container}>
      <Icon name="my-location" size={30} color={color.colors.red} />
      <View>
        <Text>Latitude: {props.data.latitude}</Text>
        <Text>Longitude: {props.data.longitude}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#D9D9D9',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    padding: 12,
    borderRadius: 18,
  },
  information: {
    padding: 8,
  },
});
export default Information;
