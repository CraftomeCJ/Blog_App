import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from '@shareapp1/supervisee-ui';
import { SuperviseeTabTypes } from '@shareapp1/common-utils';
import { AppProvider } from '@shareapp1/common-ui';
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
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
