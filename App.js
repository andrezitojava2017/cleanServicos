import React from 'react';
import Profile from './screens/profile/Profile';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import UserLocation from './screens/Locations/UserLocation';
import colors from './styles/colors.json';
import {NativeBaseProvider} from 'native-base';
import Contract from './screens/contract/Contract';
import Users from './screens/ListUsers/Users';
import Register from './screens/Register/Register';
import Login from './screens/Login/Login';
import {ApolloProvider} from '@apollo/client';
import client from './api/clientGraphql/client';
import store from './redux/store/store';
import {Provider} from 'react-redux';

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
    <Provider store={store}>
      <ApolloProvider client={client}>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
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
              <Stack.Screen
                name="Register"
                options={{
                  title: 'Cadastre-se',
                  ...styleStatusBar,
                }}
                component={Register}
              />
              <Stack.Screen
                name="Login"
                options={{
                  title: null,
                  ...styleStatusBar,
                }}
                component={Login}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
