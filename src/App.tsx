import React from 'react';
import RootStackNavigator from './navigation/RootStackNavigator';

function App(): React.JSX.Element {
  const isUserLoggedIn = false;

  return (
    <RootStackNavigator initialRouteName={isUserLoggedIn ? 'Main' : 'Auth'} />
  );
}

export default App;
