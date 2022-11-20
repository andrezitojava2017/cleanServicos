import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import Avatar from '../../components/Avatar';
import Information from '../../components/Information';

const Profile = ({route}) => {
  //
  const dta = route.params.service;

  const renderItemService = ({item}) => {
    return (
      <View style={style.containerItemList}>
        <Text style={style.itemService}>{item.descricao}</Text>
        <Text style={style.itemService}>R${item.custo}</Text>
      </View>
    );
  };

  return (
    <View style={style.containerProfile}>
      <View style={style.containerAvatar}>
        <Avatar
          contHeight="120px"
          contWidth="120px"
          text={`${route.params.initialLetters}`}
        />
        <Text style={style.textName}>{route.params.name}</Text>
      </View>
      <View style={style.title}>
        <Text style={{fontSize: 20, color: 'white'}}>Serviços</Text>
      </View>
      <View>
        <FlatList
          data={dta}
          renderItem={renderItemService}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={style.title}>
        <Text style={{fontSize: 20, color: 'white'}}>Localização</Text>
      </View>
      <Information data={route.params.coords} />
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
  containerProfile: {
    flex: 2,
    backgroundColor: '#175B9A',
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
  containerItemList: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#D9D9D9',
    borderRadius: 20,
    marginRight: 12,
    marginLeft: 12,
    marginTop: 12,
    padding: 12,
  },
  itemService: {
    fontSize: 18,
  },
});
export default Profile;
