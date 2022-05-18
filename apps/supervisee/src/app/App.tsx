import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SuperviseeTabTypes } from '@shareapp1/types';
import { AppStack } from '@shareapp1/supervisee-ui';
import { AppProvider } from '@shareapp1/common-ui/react-native';
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
