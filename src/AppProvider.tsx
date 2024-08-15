import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import App from './App';

const AppProvider = () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

export default AppProvider;
