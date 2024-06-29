import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import RiwayatScreen from './component/RiwayatScreen';
import InputScreen from './component/InputScreen';
import HomeScreen from './component/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Riwayat">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="InputScreen" component={InputScreen} />
        <Stack.Screen name="Riwayat" component={RiwayatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
