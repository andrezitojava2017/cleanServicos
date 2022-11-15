import React, {useEffect, useState} from 'react';
import RequestPermission from '../../permissions/Permissions';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker} from 'react-native-maps';
import LocationUsers from '../../locationsUsers';
import {Platform} from 'react-native';

const UserLocation = props => {
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
            alert('Error', reject);
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

  const handleSelect = e => {
    let coordinate = e.nativeEvent.coordinate;
    console.log({...coordinate});
    props.navigation.navigate('Profile', {...coordinate});
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
      {slatitude != 0 ? (
        <>
          <Marker
            onPress={handleSelect}
            coordinate={{
              latitude: slatitude + 0.001,
              longitude: slongitude + 0.0012,
            }}
            title={`Lorem Ipson Ipson`}
          />

          <Marker
            coordinate={{
              latitude: slatitude + -0.002,
              longitude: slongitude + -0.002,
            }}
            title={`Fulano de Tal`}
          />
          <Marker
            coordinate={{
              latitude: slatitude + -0.003,
              longitude: slongitude + -0.00012,
            }}
            title={`Ciclano de tal e tal`}
          />
        </>
      ) : null}
    </MapView>
  );
};

export default UserLocation;
