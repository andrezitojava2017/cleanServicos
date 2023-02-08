import React, {useEffect, useState} from 'react';
import RequestPermission from '../../permissions/Permissions';
import Map from '../../components/Map';
import location from '../../permissions/location';
import userCollection from '../../api/firebase/fireBaseCloudFirestore';
import {Button} from 'native-base';

const UserLocation = ({navigation}) => {
  //
  const [slatitude, setSlatitude] = useState(0);
  const [slongitude, setSlongitude] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await userCollection.readCollectionUser();
      const res = data.map(e => e.data());
      setUsers([...res]);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let rp = await RequestPermission();
      if (rp) {
        location()
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

  return (
    <Map
      slatitude={slatitude}
      slongitude={slongitude}
      //data={}
      navigation={navigation}
    />
  );
};

export default UserLocation;
