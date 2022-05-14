import {
  NavigationTabSettings,
  SupervisorTabTypes,
} from '@shareapp1/common-utils';
import HomeScreen from './screens/home';

const TabSettings: NavigationTabSettings = {
  name: 'SuperviseeTab',
  component: HomeScreen,
  options: {
    title: 'Supervisee',
  },
  type: SupervisorTabTypes.Supervisee,
};

export default TabSettings;
