// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StartScreen from './navigation/screens/StartScreen';
import MainContainer from './navigation/MainContainer';
import EventDetailScreen from './navigation/screens/EventDetailScreen';
import AllEventList from './navigation/screens/AllEventList';

const Stack = createNativeStackNavigator();

function App() {
  const [isAppLoading, setAppLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAppLoading(false);
    }, 5000); // 5000 milliseconds (5 seconds)

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        {isAppLoading ? (
          <Stack.Screen
            name="Start"
            component={StartScreen}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="MainContainer"
            component={MainContainer}
            options={{ headerShown: false }}
          />
        )}
        <Stack.Screen
            name="EventDetailScreen"
            component={EventDetailScreen}
            options={{ headerShown: false }}
          />
        <Stack.Screen
            name="AllEventList"
            component={AllEventList}
            options={{ headerShown: true }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
