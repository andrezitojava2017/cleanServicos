import React from 'react';
import ListUsers from './screens/ListUsers/ListUsers';
import Profile from './screens/profile/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserLocation from './screens/Locations/UserLocation';
import colors from './styles/colors.json';
import {NativeBaseProvider} from 'native-base';
import Contract from './screens/contract/Contract';
import Users from './screens/ListUsers/Users';

const Stack = createNativeStackNavigator();

const styleStatusBar = {
  headerStyle: {
    backgroundColor: `${colors.colors.blue}`,
  },
  headerShadowVisible: false,
  headerTitleAlign: 'center',
  headerTintColor: '#FFFFFF',
  statusBarHidden: true,
};

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Location">
          <Stack.Screen
            name="Profile"
            options={{
              title: 'Perfil',
              ...styleStatusBar,
            }}
            component={Profile}
          />
          <Stack.Screen
            name="ListUsers"
            options={{
              title: 'Disponiveis em sua região',
              ...styleStatusBar,
            }}
            component={Users}
          />
          <Stack.Screen
            name="Location"
            options={{
              title: 'Mapa',
              ...styleStatusBar,
            }}
            component={UserLocation}
          />
          <Stack.Screen
            name="Contract"
            options={{
              title: '',
              ...styleStatusBar,
            }}
            component={Contract}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
