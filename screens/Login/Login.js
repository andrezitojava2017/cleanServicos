import React, {TouchableOpacity, useEffect} from 'react-native';
import {Box, Image, Input, Text, VStack} from 'native-base';
import colors from '../../styles/colors.json';

const Login = ({navigation}) => {
  return (
    <VStack
      flex="1"
      backgroundColor={colors.colors.blue}
      justifyContent="center">
      <Box alignItems="center">
        <Image
          width="200"
          height="100"
          source={require('../../assets/image/clean-services.png')}
          alt="Clean Serviços"
        />
      </Box>

      <Box marginX="8" paddingY="8">
        <Input
          type="text"
          variant="rounded"
          placeholder="E-mail"
          marginY="2"
          backgroundColor={colors.colors.white1}
        />
        <Input
          type="password"
          variant="rounded"
          placeholder="Senha"
          backgroundColor={colors.colors.white1}
        />
      </Box>

      <Box>
        <TouchableOpacity onPress={() => navigation.navigate('Location')}>
          <Box
            backgroundColor={colors.colors.red2}
            marginX="8"
            alignItems="center"
            borderRadius="8">
            <Text
              fontFamily="WorkSans-Reguar"
              fontSize="18"
              color="white"
              padding="4">
              Entrar
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
      <Box alignItems="center" marginTop="1/6">
        <Text color="light.50">
          Ainda não possui conta?{' '}
          <Text
            bold
            onPress={() => console.log('Registre-se')}
            color="warning.600">
            Registre-se
          </Text>
        </Text>
      </Box>
    </VStack>
  );
};
export default Login;
