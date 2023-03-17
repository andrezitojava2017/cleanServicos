import React, {StyleSheet, TouchableOpacity, Text} from 'react-native';
import color from '../styles/colors.json';
import MapView, {Marker} from 'react-native-maps';
import InitialLetters from './InitialLetters';
import Icon from 'react-native-vector-icons/FontAwesome';

const Map = ({slatitude, slongitude, data, navigation}) => {
  //
  const viewData = () => {
    for (const item of data) {
      console.log(item.uid);
    }
  };

  const screenNewService = () => {
    navigation.navigate('Workin');
  };

  const handleMarker = (e, marker) => {
    let initialLetters = InitialLetters(marker.name);

    navigation.navigate('Profile', {
      ...marker,
      initialLetters,
    });
  };

  return (
    <>
      <MapView
        style={styles.mapStyle}
        loadingEnabled={true}
        region={{
          latitude: slatitude,
          longitude: slongitude,
          latitudeDelta: 0.00925,
          longitudeDelta: 0.00425,
        }}
        showsUserLocation={true}>
        {slatitude !== 0 && data != null
          ? data.map(obj => {
              return (
                <Marker
                  key={obj.uid}
                  onPress={e => {
                    handleMarker(e, obj);
                  }}
                  coordinate={obj.coords}
                  title={`${obj.name}`}
                />
              );
            })
          : null}
      </MapView>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={viewData}
        style={styles.button}>
        <Icon name="list-alt" size={35} color={color.colors.WhiteSmoke} />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.5}
        onPress={screenNewService}
        style={styles.btnAddService}>
        <Icon name="plus-circle" size={60} color={color.colors.blue2} />
      </TouchableOpacity>
    </>
  );
};
const styles = StyleSheet.create({
  mapStyle: {
    flex: 1,
  },
  button: {
    position: 'absolute',
    width: 55,
    height: 55,
    right: 20,
    bottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    borderWidth: 2,
    borderColor: color.colors.blue2,
    backgroundColor: `${color.colors.blue2}`,
  },
  btnAddService: {
    position: 'absolute',
    width: 60,
    height: 60,
    right: 20,
    bottom: 90,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 80,
    //backgroundColor: `${color.colors.red}`,
  },
  text: {
    fontWeight: 'bold',
    color: `${color.colors.white}`,
  },
});

export default Map;
