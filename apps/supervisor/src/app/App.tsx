/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { Dashboard } from '@shareapp1/supervisor-ui';
import { NavigationContainer } from '@react-navigation/native';

export const App = () => {
  return (
    <>
      <Dashboard />
    </>
    // <NavigationContainer>
    //   <AppStack />
    // </NavigationContainer>
  );
};

export default App;
