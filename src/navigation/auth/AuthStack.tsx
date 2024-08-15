import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../../pages/auth/Login/Login';
import {pageHeaderOptions} from '../NavigationOptions';
import {RootStackParamList} from '../RootStackNavigator';
const AuthStack = createNativeStackNavigator<RootStackParamList>();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={pageHeaderOptions}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
