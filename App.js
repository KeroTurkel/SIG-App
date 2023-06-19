import * as React from 'react';
import MainContainer from './navigation/MainContainer';
import Navigation2 from './navigation/Navigation_2';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Platform } from 'react-native';

/*const majorVersionIOS = parseInt(Platform.Version, 10);
if (majorVersionIOS <= 9) {
  console.log('Work around a change in behavior');
}*/


function App(){
  return(
    <SafeAreaView>
      <MainContainer/>
      <Navigation2/>

      
    </SafeAreaView>
 
  );
}


export default App;
