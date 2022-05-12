import DashboardScreen from './screens/dashboard';
import DetailScreen from './screens/detail';

const AppStack = [
  {
    name: 'SuperViseeDashboardHome',
    component: DashboardScreen,
    options: {
      title: 'Supervisee Dashboard',
    },
  },
  {
    name: 'SuperViseeDetail',
    component: DetailScreen,
    options: {
      title: 'Supervisee Detail',
    },
  },
];

export default AppStack;
