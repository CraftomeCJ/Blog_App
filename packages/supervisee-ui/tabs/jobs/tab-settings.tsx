import { NavigationTabSettings, SuperviseeTabTypes } from 'packages/common-utils/types/navigation';
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
