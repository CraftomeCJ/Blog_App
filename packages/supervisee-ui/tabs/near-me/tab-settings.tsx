import {
  NavigationTabSettings,
  SuperviseeTabTypes,
} from '@shareapp1/common-utils';
import HomeScreen from './screens/home';

const TabSettings: NavigationTabSettings = {
  name: 'NearMeTab',
  component: HomeScreen,
  options: {
    title: 'Near Me',
  },
  type: SuperviseeTabTypes.NearMe,
};

export default TabSettings;
