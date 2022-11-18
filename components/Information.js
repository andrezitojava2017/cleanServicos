import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const Information = props => {
  return (
    <View>
      <Icon name="info" size={30} color="#900" />
      <View style={style.information}>
        <Text>{props.data}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  information: {
    backgroundColor: '#D9D9D9',
    marginRight: 12,
    marginLeft: 12,
    marginTop: 12,
    padding: 12,
  },
});
export default Information;
