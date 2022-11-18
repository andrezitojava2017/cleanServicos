import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Avatar from '../../components/Avatar';
import Information from '../../components/Information';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Profile = ({route}) => {
  return (
    <View>
      <View style={style.containerAvatar}>
        <Avatar
          contHeight="120px"
          contWidth="120px"
          text={`${route.params.initialLetters}`}
        />
        <Text style={style.textName}>{route.params.name}</Text>
      </View>
      <View style={style.title}>
        <Text style={{fontSize: 20}}>SERVIÇOS</Text>
      </View>

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
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 30,
  },
});
export default Profile;
