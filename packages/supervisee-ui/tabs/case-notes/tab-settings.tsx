import {
  NavigationTabSettings,
  SuperviseeTabTypes,
} from '@shareapp1/common-utils';
import { navigation } from './constants/navigation';
import HomeScreen from './screens/home';

const TabSettings: NavigationTabSettings = {
  name: navigation.caseNotes.tab.name,
  component: HomeScreen,
  options: {
    title: navigation.caseNotes.tab.title,
  },
  type: SuperviseeTabTypes.CaseNotes,
};

export default TabSettings;
