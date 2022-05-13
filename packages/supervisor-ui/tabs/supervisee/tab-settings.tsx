import { NavigationTabSettings, SupervisorTabTypes } from 'packages/common-utils/types/navigation';
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
