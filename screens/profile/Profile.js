import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Avatar from '../../components/Avatar';
import Information from '../../components/Information';

const Profile = ({size, text, route}) => {
  return (
    <View>
      <View style={style.containerAvatar}>
        <Avatar contHeight="120px" contWidth="120px" text="JA" />
        <Text style={style.textName}>{route.params.name}</Text>
      </View>
      <Information data={route.params.name} />
      <Information data="-45.235715668" />
      <Information data="-18.753215687" />
      {console.log(route.params)}
    </View>
  );
};

const style = StyleSheet.create({
  containerAvatar: {
    backgroundColor: '#278EED',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 30,
  },
  textName: {
    fontFamily: 'WorkSans-Medium',
    fontSize: 16,
    paddingTop: 10,
    color: '#FFF5F5',
  },
});
export default Profile;
