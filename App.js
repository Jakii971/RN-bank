import 'react-native-gesture-handler';
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import RiwayatScreen from './component/RiwayatScreen';
import InputScreen from './component/InputScreen';
import HomeScreen from './component/HomeScreen';
import LoginScreen from './component/LoginScreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Logout" component={LoginScreen} options={{ headerShown: false }} />
        <Drawer.Screen name="Home" component={HomeScreen} options={{ title: 'Home', headerShown: false }} />
        <Drawer.Screen name="InputScreen" component={InputScreen} options={{ title: 'Input' }} />
        <Drawer.Screen name="Riwayat" component={RiwayatScreen} options={{ title: 'Riwayat Transaksi' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
