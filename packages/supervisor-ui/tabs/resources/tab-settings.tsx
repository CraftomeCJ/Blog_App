import { NavigationTabSettings, SupervisorTabTypes } from 'packages/common-utils/types/navigation';
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
