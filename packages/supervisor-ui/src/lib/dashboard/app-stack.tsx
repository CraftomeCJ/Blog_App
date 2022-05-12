import DashboardScreen from './screens/dashboard';
import DetailScreen from './screens/detail';

const AppStack = [
  {
    name: 'Dashboard',
    component: DashboardScreen,
    options: {
      title: 'Supervisor Dashboard',
    },
  },
  {
    name: 'Detail',
    component: DetailScreen,
    options: {
      title: 'Supervisor Detail',
    },
  },
];

export default AppStack;
