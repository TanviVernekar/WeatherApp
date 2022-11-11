import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import Favourite from '../screens/Favourite';
import Recent_Search from '../screens/Recent_Search';
import { NavigationContainer } from '@react-navigation/native';
import Router from '../navigation/Router';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Router" screenOptions={{drawerStyle:{backgroundColor:"white"},drawerActiveTintColor:"black",drawerInactiveTintColor:"grey",drawerActiveBackgroundColor:"transparent"}}>
          <Drawer.Screen name="Home" component={Router} options={{headerShown:false}}/>
          <Drawer.Screen name="Favourite" component={Favourite} options={{headerShown:false}}/>
          <Drawer.Screen name="Recent Search" component={Recent_Search} options={{headerShown:false}}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }

