
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventScreen2 from './screens/EventScreen2';
import EventDetailScreen from './screens/EventDetailScreen';

const Stack = createNativeStackNavigator();

function EventStack() {
  return (
    <Stack.Navigator initialRouteName='EventScreen2'>
      <Stack.Screen name='EventScreen2' component={EventScreen2} />
      <Stack.Screen name='EventDetailScreen' component={EventDetailScreen} />
    </Stack.Navigator>
  );
}

export default EventStack;
