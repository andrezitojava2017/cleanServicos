import React, {useEffect, useState} from 'react';
import RequestPermission from '../../permissions/Permissions';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker} from 'react-native-maps';
import LocationUsers from '../../locationsUsers';
import {Platform} from 'react-native';

const UserLocation = () => {
  const [slatitude, setSlatitude] = useState(0);
  const [slongitude, setSlongitude] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let rp = await RequestPermission();
      if (rp) {
        getLocation()
          .then(response => {
            console.log(
              `valor de retorno promisse: ${response.latitude} - ${response.longitude}`,
            );
            setSlatitude(response.latitude);
            setSlongitude(response.longitude);
            console.log(`valor de lat= ${slatitude} e long= ${slongitude}`);
          })
          .catch(reject => {
            alert('Error', 'Ocorreu um erro de localização!!');
          });
      } else {
        console.log('else useefect executado');
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
    <MapView
      style={{width: '100%', height: '100%'}}
      loadingEnabled={true}
      region={{
        latitude: slatitude,
        longitude: slongitude,
        latitudeDelta: 0.00925,
        longitudeDelta: 0.00425,
      }}
      showsUserLocation={true}>
      <Marker
        coordinate={{
          latitude: slatitude + 0.001,
          longitude: slongitude + 0.0012,
        }}
        title={`USUARIO TESTE`}
      />
    </MapView>
  );
};

export default UserLocation;
