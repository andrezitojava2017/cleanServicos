import React, {useEffect, useState} from 'react';
import RequestPermission from '../../permissions/Permissions';
import Geolocation from 'react-native-geolocation-service';
import {Platform} from 'react-native';
import {GET_USERS} from '../../api/clientGraphql/querys/users';
import {useQuery} from '@apollo/client';
import Map from '../../components/Map';
import Loading from '../../components/Loading';
import {setUserList} from '../../redux/slice/userSlice';
import {useDispatch} from 'react-redux';

const UserLocation = ({navigation}) => {
  const [slatitude, setSlatitude] = useState(0);
  const [slongitude, setSlongitude] = useState(0);
  const {loading, error, data} = useQuery(GET_USERS);

  const [lista, setLista] = useState('casa verde');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUserList(lista));
  }, []);

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

  if (loading) {
    return <Loading />;
  }
  return (
    <Map
      slatitude={slatitude}
      slongitude={slongitude}
      data={data.cleanUsers}
      navigation={navigation}
    />
  );
};

export default UserLocation;
