import React, {useEffect, useState} from 'react';
import {Alert, Button, Text, View} from 'react-native';
import RequestPermission from '../../permissions/Permissions';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker} from 'react-native-maps';
import LocationUsers from '../../locationsUsers';

const UserLocation = () => {
  const [slatitude, setLatitude] = useState(0);
  const [slongitude, setLongitude] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let rp = await RequestPermission();
      if (rp) {
        await getLocation();
        setUsers(LocationUsers(slatitude, slongitude));
        console.log('if useefect executado');
        console.log(slatitude);
      } else {
        console.log('else useefect executado');
      }
    })();
  }, []);

  const getLocation = async () => {
    Geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        console.log(slatitude);
      },
      error => {
        alert('Error', error.message);
        //console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 2000, maximumAge: 2000},
    );

    /*
    alert(
      `função permission ${responsePermission} ${slatitude}  ${slongitude}`,
    );
    */
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
