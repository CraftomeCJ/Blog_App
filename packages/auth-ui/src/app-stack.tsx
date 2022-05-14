import WelcomeScreen from './screens/welcome';
import LoginScreen from './screens/login';

const appStack = [
  {
    name: 'Welcome',
    component: WelcomeScreen,
    options: {
      title: 'Welcome',
    },
  },
  {
    name: 'Login',
    component: LoginScreen,
    options: {
      title: 'Login',
    },
  },
];

export default appStack;
