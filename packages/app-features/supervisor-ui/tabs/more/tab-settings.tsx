import {
  NavigationTabSettings,
  SupervisorTabTypes,
} from '@shareapp1/types';
import HomeScreen from './screens/home';

const TabSettings: NavigationTabSettings = {
  name: 'MoreTab',
  component: HomeScreen,
  options: {
    title: 'More',
  },
  type: SupervisorTabTypes.More,
};

export default TabSettings;
