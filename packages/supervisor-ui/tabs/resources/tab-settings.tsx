import {
  NavigationTabSettings,
  SupervisorTabTypes,
} from '@shareapp1/common-utils';
import HomeScreen from './screens/home';

const TabSettings: NavigationTabSettings = {
  name: 'ResourcesTab',
  component: HomeScreen,
  options: {
    title: 'Resources',
  },
  type: SupervisorTabTypes.Resources,
};

export default TabSettings;
