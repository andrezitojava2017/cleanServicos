import React, {useEffect, useState} from 'react';
import RequestPermission from '../../permissions/Permissions';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker} from 'react-native-maps';
import color from '../../styles/colors.json';
import {Platform, StyleSheet, Text, TouchableOpacity} from 'react-native';

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
      service: [
        {
          id: '01',
          descricao: 'Lavar roupas',
          custo: 80.0,
        },
        {
          id: '02',
          descricao: 'Limpar banheiro',
          custo: 50.0,
        },
      ],
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      name: 'Second Item',
      coords: {
        latitude: slatitude + -0.003,
        longitude: slongitude + -0.00012,
      },
      service: [
        {
          id: '03',
          descricao: 'Faxina em Geral',
          custo: 80.0,
        },
        {
          id: '04',
          descricao: 'Passar roupas',
          custo: 50.0,
        },
      ],
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      name: 'Third Item',
      coords: {
        latitude: slatitude + -0.002,
        longitude: slongitude + -0.00012,
      },
      service: [
        {
          id: '05',
          descricao: 'Cozinhar',
          custo: 50.0,
        },
        {
          id: '06',
          descricao: 'Passar roupas',
          custo: 50.0,
        },
      ],
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
  const handleMarker = (e, marker) => {
    let initialLetters = captureInitialLetters(marker.name);

    props.navigation.navigate('Profile', {
      ...marker,
      initialLetters,
    });
  };
  const captureInitialLetters = text => {
    let arrayNames = text.split(' ');
    let firstLetterName = arrayNames[0].slice(0, 1);
    let secondLetterLastName = arrayNames[1].slice(0, 1);
    let initialLetters = `${firstLetterName}${secondLetterLastName} `;

    return initialLetters.toUpperCase();
  };
  return (
    <>
      <MapView
        style={style.mapStyle}
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
              return (
                <Marker
                  key={marker.id}
                  onPress={e => {
                    handleMarker(e, marker);
                  }}
                  coordinate={{...marker.coords}}
                  title={`${marker.name}`}
                />
              );
            })
          : null}
      </MapView>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate('ListUsers', {DATA})}
        style={style.button}>
        <Text style={style.text}>Todos</Text>
      </TouchableOpacity>
    </>
  );
};

const style = StyleSheet.create({
  mapStyle: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    width: 70,
    height: 70,
    right: 20,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    backgroundColor: `${color.colors.red}`,
  },
  text: {
    fontWeight: 'bold',
    color: `${color.colors.white}`,
  },
});

export default UserLocation;
