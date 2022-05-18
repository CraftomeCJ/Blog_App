import DashboardScreen from './screens/dashboard';
import { navigation } from './constants/navigation';
import {
  NavigationTabSettings,
  SuperviseeTabTypes,
} from '@shareapp1/types';

const TabSettings: NavigationTabSettings = {
  name: navigation.dashboard.tab.name,
  component: DashboardScreen,
  options: {
    title: navigation.dashboard.tab.title,
  },
  type: SuperviseeTabTypes.Home,
};

export default TabSettings;
