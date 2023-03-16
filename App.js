import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Discover from './screens/Discover';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
            name="Home" 
            component={Home}
            options={{ title: 'Overview' }}
            />
            <Stack.Screen
              name="Discover"
              component={Discover}
            />
          </Stack.Navigator>
        </NavigationContainer>
  );
}


