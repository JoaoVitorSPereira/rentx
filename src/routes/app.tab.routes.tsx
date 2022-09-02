import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MyCars } from '../screens/MyCars';

import { AppStackRoutes } from './app.stack.routes';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabRoutes() {
  return (
    <Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Screen name='Home' component={AppStackRoutes} />
      <Screen name='Profile' component={AppStackRoutes} />
      <Screen name='MyCars' component={MyCars} />
    </Navigator>
  );
}
