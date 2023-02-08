import firestore from '@react-native-firebase/firestore';
import MessageToast from '../../components/toast';

const createNewUser = async (uid, {name, phone}, coords) => {
  const user = await firestore()
    .collection('Users')
    .add({
      name: name,
      phone: phone,
      uid: uid,
      coords: coords,
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

const saveServiceOfUser = async service => {
  await firestore()
    .collection('service')
    .add({...service})
    .then(() => {
      MessageToast({
        message:
          'Parabéns... Serviço encontra-se disponivel em nossa plataforma',
        color: 'sucess.500',
      });
    })
    .catch(error => {
      MessageToast({
        message: 'Ocorreu um erro na gravação do usuario',
        color: 'error.500',
      });
    });
};

const readCollectionUser = async () => {
  let usersCollection;
  try {
    await firestore()
      .collection('Users')
      .get()
      .then(res => {
        usersCollection = res.docs;
      });
    return usersCollection;
  } catch (error) {
    MessageToast({
      message: 'Ocorreu um erro na leitura de dados do usuarios',
      color: 'error.500',
    });
  }
};

export default {createNewUser, saveServiceOfUser, readCollectionUser};
