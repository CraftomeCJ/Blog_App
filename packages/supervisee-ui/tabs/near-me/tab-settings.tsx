import {
  NavigationTabSettings,
  SuperviseeTabTypes,
} from 'packages/common-utils/types/navigation';
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
