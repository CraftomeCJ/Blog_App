import {
  NavigationTabSettings,
  SuperviseeTabTypes,
} from 'packages/common-utils/types/navigation';
import HomeScreen from './screens/home';

const TabSettings: NavigationTabSettings = {
  name: 'LearnTab',
  component: HomeScreen,
  options: {
    title: 'Learn',
  },
  type: SuperviseeTabTypes.Learn,
};

export default TabSettings;
