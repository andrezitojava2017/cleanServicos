import React from 'react';
import {Box, Text, Avatar} from 'native-base';

const Avatar2 = ({size, urlAvatar, alt, name}) => {
  return (
    <Box alignItems="center">
      <Avatar source={{uri: urlAvatar}} alt={alt} size={size} />

      {name != null && (
        <Text fontSize="20" fontFamily="WorkSans-Medium">
          {name}
        </Text>
      )}
    </Box>
  );
};
export default Avatar2;
