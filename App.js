/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View,Text } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import DrawerNav from './src/navigation/DrawerNav';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import Store from './src/redux/Store';
import {persistStore} from 'redux-persist'
import {PersistGate} from 'redux-persist/es/integration/react'

let persistor = persistStore(Store);
const App=()=>{
  return(
  <Provider store={Store}>
    <PersistGate persistor={persistor}>

    <DrawerNav/>    
    </PersistGate>
  </Provider>

   
   
  )
}

export default App;
