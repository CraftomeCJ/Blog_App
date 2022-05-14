import { navigation } from 'packages/supervisor-ui/tabs/dashboard/constants/navigation';
import {
  NavigationTabSettings,
  SupervisorTabTypes,
} from 'packages/common-utils/types/navigation';

import DashboardScreen from './screens/dashboard';

const TabSettings: NavigationTabSettings = {
  name: navigation.dashboard.tab.name,
  component: DashboardScreen,
  options: {
    title: navigation.dashboard.tab.title,
  },
  type: SupervisorTabTypes.Home,
};

export default TabSettings;
