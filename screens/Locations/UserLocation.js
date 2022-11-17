import React, {useEffect, useState} from 'react';
import RequestPermission from '../../permissions/Permissions';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker} from 'react-native-maps';
import {Platform} from 'react-native';

const UserLocation = props => {
  const [slatitude, setSlatitude] = useState(0);
  const [slongitude, setSlongitude] = useState(0);
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      name: 'Primary Item',
      coords: {
        latitude: slatitude + -0.002,
        longitude: slongitude + -0.002,
      },
      service: ['Faxina em geral', 'Lavar roupas', 'Passar roupas'],
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Second Item',
      coords: {
        latitude: slatitude + -0.003,
        longitude: slongitude + -0.00012,
      },
      service: ['Lavar roupas', 'Passar roupas'],
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Third Item',
      coords: {
        latitude: slatitude + -0.002,
        longitude: slongitude + -0.00012,
      },
      service: ['Lavar roupas'],
    },
  ];

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
      {slatitude != 0
        ? DATA.map(marker => {
            <Marker
              key={marker.id}
              onPress={e => {
                props.navigation.navigate('Profile', {
                  ...marker,
                });
              }}
              coordinate={{...marker.coords}}
              title={`${marker.name}`}
            />;
          })
        : /*
        <>
          <Marker
            onPress={e => {
              props.navigation.navigate('Profile', {
                name: 'Loren Ipson Ipson',
                ...e.nativeEvent.coordinate,
              });
            }}
            coordinate={{
              latitude: slatitude + 0.001,
              longitude: slongitude + 0.0012,
            }}
            title={`Lorem Ipson Ipson`}
          />
        </>
        */
          alert('nao carregou')}
    </MapView>
  );
};

export default UserLocation;
