import React from 'react';
import {FlatList} from 'react-native';
import colors from '../../styles/colors.json';
import {Avatar, Box, Text, VStack} from 'native-base';

const Profile = ({route}) => {
  //
  const dta = route.params.service;

  /**
   * Para formatar o valor de com R$ e decimais
   * @param {*} value
   */
  const nubFormat = value => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const renderItemService = ({item}) => {
    return (
      <Box
        flexDirection="row"
        backgroundColor={colors.colors.WhiteSmoke}
        shadow="4"
        justifyContent="space-between"
        paddingLeft="2"
        marginBottom="4"
        borderRadius="8"
        borderLeftWidth="8"
        borderLeftColor={colors.colors.blue2}
        height="20">
        <Box justifyContent="center">
          <Text fontSize="16" fontFamily="WorkSans-Thin">
            {item.descricao}
          </Text>
        </Box>

        <Box
          backgroundColor={colors.colors.white2}
          justifyContent="center"
          width="24">
          <Text fontWeight="bold" fontSize="18">
            {nubFormat(item.custo)}
          </Text>
        </Box>
      </Box>
    );
  };

  return (
    <VStack space="1/6">
      <Box backgroundColor={`${colors.colors.blue}`} width="full" height="120">
        <Box
          backgroundColor={colors.colors.WhiteSmoke}
          shadow="3"
          marginX="6"
          height="150"
          alignItems="center"
          justifyContent="center"
          borderRadius="16">
          <Box alignItems="center">
            <Avatar
              source={{uri: 'https://wallpaperaccess.com/full/317501.jpg'}}
              alt="Serviços "
              size={20}
            />
            <Text fontSize="20" fontFamily="WorkSans-Medium">
              Jederson André
            </Text>
          </Box>
        </Box>
      </Box>
      <VStack marginX="6" space="2">
        <Text fontSize="20">Serviços</Text>
        <FlatList
          data={dta}
          renderItem={renderItemService}
          keyExtractor={item => item.id}
        />
      </VStack>
    </VStack>
  );
};

export default Profile;
