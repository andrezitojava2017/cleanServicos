import React, {TouchableOpacity} from 'react-native';
import {Box, Image, Text, VStack} from 'native-base';
import colors from '../../styles/colors.json';

const Login = () => {
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
        />
      </Box>
      <Box>
        <TouchableOpacity>
          <Box
            backgroundColor={colors.colors.red2}
            marginX="20"
            marginY="8"
            borderRadius="8">
            <Text
              fontFamily="WorkSans-Reguar"
              fontSize="18"
              color="white"
              padding="4">
              Entrar com Google
            </Text>
          </Box>
        </TouchableOpacity>
      </Box>
    </VStack>
  );
};
export default Login;
