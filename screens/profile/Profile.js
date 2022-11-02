import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Avatar from '../../components/Avatar';
import Information from '../../components/Information';

const Profile = () => {
  return (
    <View>
      <View style={style.containerAvatar}>
        <Avatar />
        <Text style={style.textName}>Jederson Andre</Text>
      </View>
      <Information data="JEDERSON ANDRE" />
      <Information data="-45.235715668" />
      <Information data="-18.753215687" />
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
