import { navigation } from './constants/navigation';
import DashboardScreen from './screens/dashboard';
import DetailScreen from './screens/detail';

const appStack = [
  {
    name: navigation.dashboard.stack.name,
    component: DashboardScreen,
    options: {
      title: navigation.dashboard.stack.title,
    },
  },
  {
    name: navigation.detailScreen.stack.name,
    component: DetailScreen,
    options: {
      title: navigation.detailScreen.stack.title,
    },
  },
];

export default appStack;
