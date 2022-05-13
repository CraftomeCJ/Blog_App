import { navigation } from './constants/navigation';
import DashboardScreen from './screens/dashboard';
import DetailScreen from './screens/detail';

const dashboardConstants = navigation.dashboard;
const AppStack = [
  {
    name: dashboardConstants.stack.name,
    component: DashboardScreen,
    options: {
      title: dashboardConstants.stack.title,
    },
  },
  {
    name: dashboardConstants.detailScreen.stack.name,
    component: DetailScreen,
    options: {
      title: dashboardConstants.detailScreen.stack.title,
    },
  },
];

export default AppStack;
