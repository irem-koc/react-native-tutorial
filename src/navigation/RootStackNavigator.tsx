/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import AuthStackNavigator from './auth/AuthStack';
import MainStackNavigator from './main/MainStack';

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  Home: undefined;
  Login: undefined;
  BarcodeReader: undefined;
};
type Props = {
  initialRouteName: keyof RootStackParamList;
};

const RootStack = createStackNavigator<RootStackParamList>();
const RootStackNavigator = ({initialRouteName}: Props) => {
  return (
    <RootStack.Navigator initialRouteName={initialRouteName}>
      <RootStack.Group
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          ...TransitionPresets.ScaleFromCenterAndroid,
        }}>
        <RootStack.Screen
          name="Auth"
          options={{gestureEnabled: false}}
          component={AuthStackNavigator}
        />
        <RootStack.Screen name="Main" component={MainStackNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
export default RootStackNavigator;
