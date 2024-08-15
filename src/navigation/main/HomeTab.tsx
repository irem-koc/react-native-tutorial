import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Home from '../../pages/main/Home/Home';
import {pageHeaderOptions} from '../NavigationOptions';
import {RootStackParamList} from '../RootStackNavigator';

const HomeTab = createStackNavigator<RootStackParamList>();

const HomeTabNavigator = () => {
  return (
    <HomeTab.Navigator screenOptions={pageHeaderOptions}>
      <HomeTab.Screen
        options={{headerShown: false}}
        name="Home"
        component={Home}
      />
    </HomeTab.Navigator>
  );
};

export default HomeTabNavigator;
