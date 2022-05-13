import DashboardScreen from './screens/dashboard';
import { navigation } from './constants/navigation';
import {
  NavigationTabSettings,
  SuperviseeTabTypes,
} from 'packages/common-utils/types/navigation';

const TabSettings: NavigationTabSettings = {
  name: navigation.dashboard.tab.name,
  component: DashboardScreen,
  options: {
    title: navigation.dashboard.tab.title,
  },
  type: SuperviseeTabTypes.Home,
};

export default TabSettings;
