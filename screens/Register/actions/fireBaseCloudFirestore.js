import firestore from '@react-native-firebase/firestore';
import MessageToast from '../../../components/toast';

const createNewUser = async (uid, {name, phone}) => {
  const user = await firestore()
    .collection('Users')
    .add({
      name: name,
      phone: phone,
      uid: uid,
    })
    .then(() => {
      return true;
    })
    .catch(error => {
      MessageToast({
        message: 'Ocorreu um erro na gravação do usuario',
        color: 'error.500',
      });
    });
};

export default {createNewUser};
