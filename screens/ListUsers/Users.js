import React from 'react';
import {Box, FlatList, Image, Text} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../styles/colors.json';
import {TouchableOpacity} from 'react-native';
const Users = ({route}) => {
  const itemList = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={0.7}>
        <Box
          flexDirection="row"
          margin="1.5"
          borderRadius="10"
          backgroundColor={colors.colors.WhiteSmoke}
          shadow="3">
          <Box>
            <Image
              alt="Photo"
              size="md"
              source={{uri: 'https://wallpaperaccess.com/full/317501.jpg'}}
              borderRadius="10"
            />
          </Box>
          <Box
            flex="1"
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
            padding="2">
            <Box>
              <Text fontFamily="WorkSans-Bold">{item.name}</Text>
              <Text fontFamily="WorkSans-ExtraLight">
                {item.service[0].descricao}
              </Text>
            </Box>
            <Box>
              <Icon name="info-circle" size={30} color={colors.colors.blue2} />
            </Box>
          </Box>
        </Box>
      </TouchableOpacity>
    );
  };

  return (
    <Box flex="1" marginY="6">
      <FlatList
        data={route.params.DATA}
        renderItem={itemList}
        keyExtractor={item => item.id}
      />
    </Box>
  );
};
export default Users;
