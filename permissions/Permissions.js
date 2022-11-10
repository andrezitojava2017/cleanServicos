import {Alert, PermissionsAndroid} from 'react-native';
const RequestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Permissao de acesso a localização',
        buttonNeutral: 'Pergunta-me depois',
        buttonNegative: 'Cancelar',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      alert('Acesso Negado ', 'Permissão negada');
      return false;
    }
  } catch (err) {
    alert('Error ', err);
  }
};
export default RequestLocationPermission;
