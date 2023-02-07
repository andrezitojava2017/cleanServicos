import Geolocation from 'react-native-geolocation-service';
const GetLocation = () => {
  return new Promise((resolve, reject) => {
    if (Platform.OS === 'android') {
      Geolocation.getCurrentPosition(
        position => {
          resolve({...position.coords});
        },
        error => {
          reject(error.message);
        },
        {enableHighAccuracy: true, timeout: 2000, maximumAge: 2000},
      );
    }
  });
};

export default GetLocation;
