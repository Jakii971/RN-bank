import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RiwayatScreen from './component/RiwayatScreen';
import InputScreen from './component/InputScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Riwayat">
        <Stack.Screen name="Riwayat" component={RiwayatScreen} />
        <Stack.Screen name="InputScreen" component={InputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
