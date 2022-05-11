import { AppRegistry } from 'react-native';
import App from './app/App';
import { enableScreens } from 'react-native-screens';

enableScreens();
AppRegistry.registerComponent('Supervisor', () => App);
