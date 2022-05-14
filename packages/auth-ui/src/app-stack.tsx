import WelcomeScreen from './screens/welcome';
import LoginScreen from './screens/login';

export const authScreens = [
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
