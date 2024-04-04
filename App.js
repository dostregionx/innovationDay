import Pressed from './components/Pressed';
import Welcome from './components/Welcome'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Landing" component={Welcome}/>
        <Stack.Screen options={{headerShown: false}} name="InnovationDay" component={Pressed}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}




