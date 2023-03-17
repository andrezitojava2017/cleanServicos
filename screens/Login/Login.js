import React, {TouchableOpacity} from 'react-native';
import {Box, Image, Input, Text, VStack} from 'native-base';
import colors from '../../styles/colors.json';
import validation from '../../validation/validation';
import authFirebase from '../../api/firebase/fireBaseAuth';
import {useState} from 'react';
import MessageToast from '../../components/toast';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [signIn, setSignIn] = useState('');

  const signInEmail = () => {
    let emailUser = validation.emailValidation(signIn.email);

    if (emailUser) {
      authFirebase
        .SigInEmail({...signIn})
        .then(res => {
          AsyncStorage.setItem('@uid_user', res.user.uid).then(() => {
            navigation.navigate('Location');
            navigation.reset({
              index: 0,
              routes: [{name: 'Location'}],
            });
          });
        })
        .catch(error => {
          MessageToast({
            message:
              'Ocorreu um erro ao tentar logar. Verifique e-mail e senha',
            color: 'error.500',
          });
        });
    } else {
      MessageToast({
        message: 'Informe um e-mail valido!',
        color: 'error.500',
      });
    }
  };

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
          size="16"
          type="text"
          variant="rounded"
          placeholder="E-mail"
          marginY="2"
          backgroundColor={colors.colors.white1}
          onChangeText={text => setSignIn({...signIn, email: text})}
        />
        <Input
          size="16"
          type="password"
          variant="rounded"
          placeholder="Senha"
          backgroundColor={colors.colors.white1}
          onChangeText={text => setSignIn({...signIn, password: text})}
        />
      </Box>

      <Box
        backgroundColor={colors.colors.red2}
        borderRadius="xl"
        width="160"
        alignItems="center"
        alignSelf="center">
        <TouchableOpacity onPress={signInEmail}>
          <Text fontFamily="WorkSans-Reguar" fontSize="18" color="white" bold>
            Entrar
          </Text>
        </TouchableOpacity>
      </Box>
      <Box alignItems="center" marginTop="1/6">
        <Text color="light.50">
          Ainda não possui conta?
          <Text
            bold
            onPress={() => navigation.navigate('Register')}
            color="warning.600">
            Registre-se
          </Text>
        </Text>
      </Box>
    </VStack>
  );
};
export default Login;
