import React from 'react';
import {Box, Image, Input, ScrollView, Text, VStack} from 'native-base';
import {useState} from 'react';
import colors from '../../styles/colors.json';
import {TouchableOpacity} from 'react-native';
import actions from './actions/fireBaseAuth';

const Register = () => {
  const [infoUser, setInfoUser] = useState({});

  const handleCreateAccountUser = () => {
    actions.CreateAccountUser(infoUser.email, infoUser.password);
  };

  return (
    <Box backgroundColor={colors.colors.blue}>
      <ScrollView>
        <Box alignItems="center" padding="12">
          <Image
            width="200"
            height="100"
            source={require('../../assets/image/clean-services.png')}
            alt="Clean Serviços"
          />
        </Box>

        <Box
          backgroundColor={colors.colors.white1}
          borderTopRadius="30"
          alignItems="center">
          <Box>
            <Text
              color="#938E8E"
              fontSize="26"
              marginTop="4"
              fontFamily="WorkSans-Regular">
              Criar nova conta
            </Text>
          </Box>
          <VStack width="100%" height="100%">
            <Input
              fontSize="16"
              fontFamily="WorkSans-Regular"
              variant="rounded"
              placeholder="Nome"
              marginBottom="3"
              marginX="6"
              onChangeText={text => setInfoUser({...infoUser, name: text})}
            />
            <Input
              fontSize="16"
              fontFamily="WorkSans-Regular"
              variant="rounded"
              placeholder="E-mail"
              marginBottom="3"
              marginX="6"
              onChangeText={text => setInfoUser({...infoUser, email: text})}
            />
            <Input
              fontSize="16"
              fontFamily="WorkSans-Regular"
              variant="rounded"
              placeholder="Senha"
              marginBottom="3"
              marginX="6"
              type="password"
              onChangeText={text => setInfoUser({...infoUser, password: text})}
            />
            <Input
              fontSize="16"
              fontFamily="WorkSans-Regular"
              variant="rounded"
              placeholder="Telefone"
              marginBottom="3"
              marginX="6"
              keyboardType="phone-pad"
              onChangeText={text => setInfoUser({...infoUser, phone: text})}
            />
            <Box
              backgroundColor={colors.colors.red2}
              borderRadius="30"
              width="200"
              height="12"
              alignItems="center"
              justifyContent="center"
              alignSelf="center">
              <TouchableOpacity onPress={handleCreateAccountUser}>
                <Text
                  fontFamily="WorkSans-Reguar"
                  fontSize="18"
                  color="white"
                  bold>
                  CADASTRAR
                </Text>
              </TouchableOpacity>
            </Box>
          </VStack>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default Register;
