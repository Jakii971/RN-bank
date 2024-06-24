import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InputScreen from './component/InputScreen';
import RiwayatScreen from './component/RiwayatScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Input">
                <Stack.Screen name="Input" component={InputScreen} />
                <Stack.Screen name="Riwayat" component={RiwayatScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
