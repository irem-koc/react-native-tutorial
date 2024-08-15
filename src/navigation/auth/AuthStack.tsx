import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import BarcodeReader from '../../pages/auth/BarcodeReader/BarcodeReader';
import LoginScreen from '../../pages/auth/Login/Login';
import {pageHeaderOptions} from '../NavigationOptions';
import {RootStackParamList} from '../RootStackNavigator';
const AuthStack = createStackNavigator<RootStackParamList>();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={pageHeaderOptions}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="BarcodeReader" component={BarcodeReader} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
