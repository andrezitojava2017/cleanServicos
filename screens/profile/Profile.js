import React, {useEffect, useState} from 'react';
import {FlatList, Pressable} from 'react-native';
import colors from '../../styles/colors.json';
import {Box, Text, VStack} from 'native-base';
import Avatar2 from '../../components/Avatar2';
import readCollectionUser from '../../api/firebase/fireBaseCloudFirestore';
const Profile = ({route, navigation}) => {
  //
  const name = route.params.name;
  const uid = route.params.uid;
  const [services, setServices] = useState();

  useEffect(() => {
    (async () => {
      let val = await readCollectionUser.searchServicesUsers(uid);
      setServices(val);
    })();
  }, []);
  /**
   * screen Contract
   */
  const handleContract = item => {
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
          shadow="4"
          justifyContent="space-between"
          paddingLeft="2"
          marginBottom="4"
          borderRadius="8"
          borderLeftWidth="8"
          borderLeftColor={colors.colors.blue2}
          height="20">
          <Box justifyContent="center" maxWidth="200">
            <Text fontSize="14" fontFamily="WorkSans-ExtraLight">
              {item.description}
            </Text>
          </Box>

          <Box
            borderRadius="8"
            backgroundColor="rgb(214,212,210)"
            justifyContent="center"
            width="24">
            <Text fontWeight="bold" fontSize="18" paddingLeft="1.5">
              {item.value}
            </Text>
          </Box>
        </Box>
      </Pressable>
    );
  };

  return (
    <VStack space="12">
      <Box backgroundColor={`${colors.colors.blue}`} width="full" height="120">
        <Box
          backgroundColor={colors.colors.white2}
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
          data={services}
          renderItem={renderItemService}
          keyExtractor={(item, index) => index}
        />
      </VStack>
    </VStack>
  );
};

export default Profile;
