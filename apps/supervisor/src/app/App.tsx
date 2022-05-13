import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppStack from 'packages/supervisor-ui/navigations/supervisor-app-stack';

export const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;
