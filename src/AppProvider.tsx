import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import App from './App';

const AppProvider = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default AppProvider;
