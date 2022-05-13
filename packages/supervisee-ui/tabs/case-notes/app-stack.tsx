import { navigation } from './constants/navigation';
import HomeScreen from './screens/home';

const caseNotesConstants = navigation.caseNotes;
const AppStack = [
  {
    name: caseNotesConstants.stack.name,
    component: HomeScreen,
    options: {
      title: caseNotesConstants.stack.title,
    },
  },
];

export default AppStack;
