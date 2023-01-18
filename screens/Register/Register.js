import React from 'react';
import {
  Box,
  FormControl,
  Image,
  Input,
  ScrollView,
  Text,
  VStack,
} from 'native-base';
import {useState} from 'react';
import colors from '../../styles/colors.json';
import {TouchableOpacity} from 'react-native';
import actions from './actions/fireBaseAuth';
import fbCloudFstore from './actions/fireBaseCloudFirestore';
import validation from './actions/validation';
import {TextInputMask} from 'react-native-masked-text';

const Register = ({navigation}) => {
  const [infoUser, setInfoUser] = useState({});
  const [emailValid, setEmailValid] = useState(false);
  const [nameValid, setNameValid] = useState(null);
  const [passwordValid, setPasswordValid] = useState(false);

  const handleCreateAccountUser = async () => {
    // validando dados
    setEmailValid(validation.emailValidation(infoUser.email));
    setNameValid(validation.nameValidation(infoUser.name));
    setPasswordValid(validation.passwordValidation(infoUser.password));

    if (emailValid && nameValid && passwordValid) {
      let uidUser = await actions.CreateAccountUser(
        infoUser.email,
        infoUser.password,
      );
      if (uidUser != undefined) {
        if (fbCloudFstore.createNewUser(uidUser, {...infoUser})) {
          navigation.navigate('Location');
        }
      }
    }
  };

  return (
    <Box backgroundColor={colors.colors.blue}>
      <ScrollView>
        <Box alignItems="center" padding="6">
          <Image
            width="180"
            height="100"
            source={require('../../assets/image/clean-services.png')}
            alt="Clean Serviços"
          />
        </Box>

        <Box
          backgroundColor={colors.colors.white1}
          borderTopRadius="30"
          alignItems="center">
          <Box marginBottom="1.5">
            <Text
              color="#938E8E"
              fontSize="20"
              fontWeight="bold"
              marginTop="4"
              fontFamily="WorkSans-Regular">
              Criar nova conta
            </Text>
          </Box>
          <VStack width="100%" height="100%">
            <Box marginX="6" marginBottom="2">
              <FormControl isInvalid={!nameValid}>
                <Input
                  fontSize="13"
                  fontFamily="WorkSans-Regular"
                  variant="outline"
                  placeholder="Nome"
                  onChangeText={text => setInfoUser({...infoUser, name: text})}
                />
                <FormControl.ErrorMessage color="#a45">
                  O nome possui caracteres invalidos/numeros. Verifique
                </FormControl.ErrorMessage>
              </FormControl>
            </Box>
            <Box marginX="6" marginBottom="2">
              <FormControl isInvalid={!emailValid} isRequired>
                <Input
                  fontSize="13"
                  fontFamily="WorkSans-Regular"
                  variant="outline"
                  placeholder="E-mail"
                  onChangeText={text => setInfoUser({...infoUser, email: text})}
                />
                <FormControl.ErrorMessage color="#a45">
                  Informe um e-mail valido!
                </FormControl.ErrorMessage>
              </FormControl>
            </Box>

            <Box marginBottom="2" marginX="6">
              <FormControl isInvalid={!passwordValid} isRequired>
                <Input
                  fontSize="13"
                  fontFamily="WorkSans-Regular"
                  variant="outline"
                  placeholder="Senha"
                  type="password"
                  onChangeText={text =>
                    setInfoUser({...infoUser, password: text})
                  }
                />
                <FormControl.ErrorMessage color="#a45">
                  A senha deve ter min. 6 caracteres
                </FormControl.ErrorMessage>
              </FormControl>
            </Box>
            <Box>
              <TextInputMask
                style={{
                  borderStyle: 'solid',
                  borderWidth: 1,
                  borderColor: '#dcdcdc',
                  marginEnd: 20,
                  marginStart: 25,
                  marginBottom: 10,
                  borderRadius: 5,
                }}
                fontFamily="WorkSans-Regular"
                placeholder="Contato"
                type="cel-phone"
                options={{
                  markType: 'BRL',
                  withDDD: true,
                  dddMask: '(99) ',
                }}
                value={infoUser.phone}
                onChangeText={text => setInfoUser({...infoUser, phone: text})}
              />
            </Box>
            <Box
              backgroundColor={colors.colors.red2}
              borderRadius="30"
              width="200"
              height="8"
              alignItems="center"
              justifyContent="center"
              alignSelf="center">
              <TouchableOpacity onPress={handleCreateAccountUser}>
                <Text
                  fontFamily="WorkSans-Reguar"
                  fontSize="15"
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
