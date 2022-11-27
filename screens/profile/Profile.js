import React from 'react';
import {FlatList, Pressable} from 'react-native';
import colors from '../../styles/colors.json';
import {Box, Text, VStack} from 'native-base';
import Avatar2 from '../../components/Avatar2';
const Profile = ({route, navigation}) => {
  //
  const dta = route.params.service;
  const name = route.params.name;

  /**
   * screen Contract
   */
  const handleContract = item => {
    console.log(dta);
    navigation.navigate('Contract', {...item, name});
  };
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

  /**
   * função que ira renderiza os componentes no flatlist
   * retornando os serviços disponiveis de um usuario
   * @param {*} param0
   */
  const renderItemService = ({item}) => {
    return (
      <Pressable onPress={() => handleContract(item)}>
        <Box
          flexDirection="row"
          backgroundColor={colors.colors.white2}
          //backgroundColor={colors.colors.WhiteSmoke}
          shadow="4"
          justifyContent="space-between"
          paddingLeft="2"
          marginBottom="4"
          borderRadius="8"
          borderLeftWidth="8"
          borderLeftColor={colors.colors.blue2}
          height="20">
          <Box justifyContent="center">
            <Text fontSize="16" fontFamily="WorkSans-ExtraLight">
              {item.descricao}
            </Text>
          </Box>

          <Box
            borderRadius="8"
            backgroundColor="rgb(214,212,210)"
            justifyContent="center"
            width="24">
            <Text fontWeight="bold" fontSize="18" paddingLeft="1.5">
              {nubFormat(item.custo)}
            </Text>
          </Box>
        </Box>
      </Pressable>
    );
  };

  return (
    <VStack space="1/6">
      <Box backgroundColor={`${colors.colors.blue}`} width="full" height="120">
        <Box
          backgroundColor={colors.colors.white2}
          //backgroundColor={colors.colors.WhiteSmoke}
          shadow="3"
          marginX="6"
          height="150"
          alignItems="center"
          justifyContent="center"
          borderRadius="16">
          <Avatar2
            name={name}
            size="20"
            alt="Serviços"
            urlAvatar="https://wallpaperaccess.com/full/317501.jpg"
          />
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
