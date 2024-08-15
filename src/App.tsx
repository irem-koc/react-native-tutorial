import React from 'react';
import RootStackNavigator from './navigation/RootStackNavigator';
import {LocalStorage} from './providers';

function App(): React.JSX.Element {
  return (
    <RootStackNavigator
      initialRouteName={LocalStorage.getItem('accessToken') ? 'Main' : 'Auth'}
    />
  );
}

export default App;
