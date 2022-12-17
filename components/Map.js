import React, {StyleSheet, TouchableOpacity} from 'react-native';
import color from '../styles/colors.json';
import MapView, {Marker} from 'react-native-maps';
import {Text} from 'react-native';
import InitialLetters from './InitialLetters';

import {useSelector} from 'react-redux';
const Map = ({slatitude, slongitude, data, navigation}) => {
  const handleMarker = (e, marker) => {
    let initialLetters = InitialLetters(marker.attributes.name);

    navigation.navigate('Profile', {
      ...marker.attributes,
      initialLetters,
    });
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
          ? data.map(marker => {
              return (
                <Marker
                  key={marker.attributes.idd}
                  onPress={e => {
                    handleMarker(e, marker);
                  }}
                  coordinate={{...marker.attributes.coords}}
                  title={`${marker.attributes.name}`}
                />
              );
            })
          : null}
      </MapView>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => navigation.navigate('ListUsers', {data})}
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

export default Map;
