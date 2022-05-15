import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from '@shareapp1/supervisee-ui';
import { SuperviseeTabTypes } from '@shareapp1/common-utils';
import { AppProvider } from '@shareapp1/common-ui';
import { AuthStack } from '@shareapp1/auth-ui';
//can select the tabs you want to display
const renderTabs = [
  SuperviseeTabTypes.Home,
  SuperviseeTabTypes.Learn,
  SuperviseeTabTypes.Jobs,
];
export const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <AppStack renderTabs={renderTabs} />
        <AuthStack />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
