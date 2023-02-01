import React, {useEffect, useState} from 'react';
import RequestPermission from '../../permissions/Permissions';
import Geolocation from 'react-native-geolocation-service';
import {Platform} from 'react-native';
import Map from '../../components/Map';

const UserLocation = ({navigation}) => {
  //
  const [slatitude, setSlatitude] = useState(0);
  const [slongitude, setSlongitude] = useState(0);

  useEffect(() => {
    (async () => {
      let rp = await RequestPermission();
      if (rp) {
        getLocation()
          .then(response => {
            setSlatitude(response.latitude);
            setSlongitude(response.longitude);
          })
          .catch(reject => {
            alert('Erro de localização', reject);
          });
      }
    })();
  }, []);

  const getLocation = () => {
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

  return (
    <Map
      slatitude={slatitude}
      slongitude={slongitude}
      //data={}
      navigation={navigation}
    />
  );
};

export default UserLocation;
