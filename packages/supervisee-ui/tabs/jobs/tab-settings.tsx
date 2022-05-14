import {
  NavigationTabSettings,
  SuperviseeTabTypes,
} from '@shareapp1/common-utils';
import HomeScreen from './screens/home';

const TabSettings: NavigationTabSettings = {
  name: 'SuperViseeJobsTab',
  component: HomeScreen,
  options: {
    title: 'Jobs',
  },
  type: SuperviseeTabTypes.Jobs,
};

export default TabSettings;
