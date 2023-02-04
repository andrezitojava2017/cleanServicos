import {
  Box,
  Image,
  Input,
  ScrollView,
  Text,
  TextArea,
  VStack,
} from 'native-base';
import colors from '../../styles/colors.json';
import React, {TouchableOpacity} from 'react-native';
import {useState} from 'react';

const servicesAvailable = () => {
  const [value, setValue] = useState('');

  const formatValue = () => {
    let num = parseInt(value);
    num = num
      .toFixed(2)
      .replace('.', ',')
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');

    setValue(num);
    // site regex formatar numero https://www.blogson.com.br/formatar-moeda-dinheiro-com-javascript-do-jeito-facil/
  };
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Box flex="1" backgroundColor={colors.colors.blue}>
        <Box alignItems="center" padding="6">
          <Image
            width="180"
            height="100"
            source={require('../../assets/image/clean-services.png')}
            alt="Clean Serviços"
          />
        </Box>
        <Box
          flex="2"
          backgroundColor={colors.colors.white2}
          borderTopRadius="30">
          <Box>
            <Text
              padding="1.5"
              color="#938E8E"
              fontSize={32}
              fontFamily="WorkSans-Medium"
              textAlign="center">
              Disponibilizar Serviços
            </Text>
          </Box>
          <VStack width="100%" height="100%">
            <Box marginX="6" marginBottom="2">
              <Input
                fontSize="13"
                fontFamily="WorkSans-Regular"
                variant="outline"
                placeholder="Titulo"
                onChangeText={text => console.log(text)}
              />
            </Box>
            <Box marginX="6" marginBottom="2">
              <Input
                value={value}
                fontSize="13"
                fontFamily="WorkSans-Regular"
                variant="outline"
                placeholder="R$ cobrado"
                keyboardType="decimal-pad"
                onChangeText={text => setValue(text)}
                onBlur={formatValue}
              />
            </Box>
            <Box marginX="6" marginBottom="2">
              <TextArea
                fontSize="13"
                fontFamily="WorkSans-Regular"
                variant="outline"
                placeholder="Descrição"
                onChangeText={text => console.log(text)}
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
              <TouchableOpacity onPress={() => formatValue}>
                <Text
                  fontFamily="WorkSans-Reguar"
                  fontSize="15"
                  color="white"
                  bold>
                  Confirmar
                </Text>
              </TouchableOpacity>
            </Box>
          </VStack>
        </Box>
      </Box>
    </ScrollView>
  );
};

export default servicesAvailable;
