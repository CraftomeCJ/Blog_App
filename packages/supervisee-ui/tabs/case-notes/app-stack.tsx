import { navigation } from './constants/navigation';
import HomeScreen from './screens/home';

const caseNotesConstants = navigation.caseNotes;
const appStack = [
  {
    name: caseNotesConstants.stack.name,
    component: HomeScreen,
    options: {
      title: caseNotesConstants.stack.title,
    },
  },
];

export default appStack;
