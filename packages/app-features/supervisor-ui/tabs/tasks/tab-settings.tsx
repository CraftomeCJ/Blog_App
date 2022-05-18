import {
  NavigationTabSettings,
  SupervisorTabTypes,
} from '@shareapp1/types';
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
