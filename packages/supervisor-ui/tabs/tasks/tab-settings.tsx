import {
  NavigationTabSettings,
  SupervisorTabTypes,
} from 'packages/common-utils/types/navigation';
import HomeScreen from './screens/home';

const TabSettings: NavigationTabSettings = {
  name: 'TasksTab',
  component: HomeScreen,
  options: {
    title: 'Tasks',
  },
  type: SupervisorTabTypes.Tasks,
};

export default TabSettings;
