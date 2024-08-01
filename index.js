/**
 * @format
 */

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import AppRouter from './AppRouter';

AppRegistry.registerComponent(appName, () => AppRouter);
