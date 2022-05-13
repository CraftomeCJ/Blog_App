import { NavigationTabSettings, SupervisorTabTypes } from 'packages/common-utils/types/navigation';
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
