import {
  NavigationTabSettings,
  SuperviseeTabTypes,
} from '@shareapp1/types';
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
