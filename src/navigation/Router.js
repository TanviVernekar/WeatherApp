
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen'

const Stack = createNativeStackNavigator();

const Router=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="SearchScreen" component={SearchScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}
export default Router;