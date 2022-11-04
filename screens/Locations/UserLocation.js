import React, {useState} from 'react';
import {Alert, Button, Text, View} from 'react-native';
import RequestPermission from '../../permissions/Permissions';
import Geolocation from 'react-native-geolocation-service';

const UserLocation = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const permission = async () => {
    let responsePermission = await RequestPermission();

    if (responsePermission) {
      Geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        error => {
          Alert.alert('Error', error.message);
          //console.log(error.code, error.message);
        },
        {enableHighAccuracy: true, timeout: 2000, maximumAge: 1000},
      );
    }
  };

  return (
    <View>
      <Text>Latitude:{latitude}</Text>
      <Text>Longitude:{longitude}</Text>
      <Button title="chamar aviso" onPress={permission} />
    </View>
  );
};

export default UserLocation;
