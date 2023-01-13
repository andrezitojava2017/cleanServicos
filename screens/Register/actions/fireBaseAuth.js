import React from 'react';
import auth from '@react-native-firebase/auth';
import MessageToast from '../../../components/toast';

const CreateAccountUser = (email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      MessageToast({
        message: 'Parabens! Agora você ja pode ofertar seus serviços!',
        color: 'success.300',
      });
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        MessageToast({
          message: 'Este e-mail já está em uso! Verifique',
          color: 'error.500',
        });
      }

      if (error.code === 'auth/invalid-email') {
        MessageToast({
          message: 'Este e-mail invalido',
          color: 'error.500',
        });
      }
    });
};

export default {CreateAccountUser};
