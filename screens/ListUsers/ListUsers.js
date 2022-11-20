import React from 'react';
import {FlatList, View} from 'react-native';
import ItemUser from '../../components/ItemUser';
import styled from 'styled-components/native';
import color from '../../styles/colors.json';

const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  margin: 5px 10px 1px 10px;
  border: 2px solid ${color.colors.red};
  border-radius: 20px;
`;

const TextName = styled.Text`
  color: ${color.colors.white};
  padding-left: 8px;
`;

const captureInitialLetters = text => {
  let arrayNames = text.split(' ');
  let firstLetterName = arrayNames[0].slice(0, 1);
  let secondLetterLastName = arrayNames[1].slice(0, 1);
  let initialLetters = `${firstLetterName}${secondLetterLastName} `;

  return initialLetters.toUpperCase();
};

const ListUsers = ({route, navigation}) => {
  const profileScreen = item => {
    let initialLetters = captureInitialLetters(item.name);
    navigation.navigate('Profile', {...item, initialLetters});
  };

  const renderItem = ({item}) => {
    let initialLetters = captureInitialLetters(item.name);

    return (
      <Container onPress={() => profileScreen(item)}>
        <ItemUser
          size="18px"
          contHeight="50px"
          contWidth="50px"
          text={initialLetters}
        />
        <TextName>{item.name}</TextName>
      </Container>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: color.colors.blue}}>
      <FlatList
        data={route.params.DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ListUsers;
