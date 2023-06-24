import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Acasa from '../ecrane/Acasa';
import EcranFilm from '../ecrane/EcranFilm';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Acasa" options={{headerShown: false}} component={Acasa} />
        <Stack.Screen name="Film" options={{headerShown: false}} component={EcranFilm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}