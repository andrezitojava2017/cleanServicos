import React from 'react';
import {Toast} from 'native-base';

const MessageToast = ({message, color}) => {
  Toast.show({
    placement: 'top',
    variant: 'solid',
    description: message,
    bg: color,
    color: '#ffff',
    fontStyle: 'bold',
    padding: 2,
    rounded: 'sm',
    mg: 5,
  });
};

export default MessageToast;
