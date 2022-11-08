import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import Favourite from '../screens/Favourite';
import Recent_Search from '../screens/Recent_Search';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="HomeScreen">
          <Drawer.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
          <Drawer.Screen name="Favourite" component={Favourite} options={{headerShown:false}}/>
          <Drawer.Screen name="Recent_Search" component={Recent_Search} options={{headerShown:false}}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

