import React, {useEffect, useState} from 'react';
import RequestPermission from '../../permissions/Permissions';
import Geolocation from 'react-native-geolocation-service';
import {Platform} from 'react-native';
import {GET_USERS} from '../../api/clientGraphql/querys/users';
import {useQuery} from '@apollo/client';
import Map from '../../components/Map';
import messaging from '@react-native-firebase/messaging';
import {Alert} from 'react-native';
import Loading from '../../components/Loading';
import {setUserList} from '../../redux/slice/userSlice';
import {useDispatch, useSelector} from 'react-redux';

const UserLocation = ({navigation}) => {
  const [slatitude, setSlatitude] = useState(0);
  const [slongitude, setSlongitude] = useState(0);
  const {loading, error, data} = useQuery(GET_USERS);
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await permissonNotification();
      dispatch(setUserList(data.cleanUsers.data));
    })();
    console.log(state.user.list.attributes);
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

  const permissonNotification = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      let token = await messaging().getToken();
      console.log('TOKEN: ', token);
    }
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });
  };

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
      data={state.user.list}
      navigation={navigation}
    />
  );
};

export default UserLocation;
