import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from 'packages/supervisee-ui/navigations/supervisee-app-stack';
import { SuperviseeTabTypes } from 'packages/common-utils/types/navigation';

//can select the tabs you want to display
const renderTabs = [
  SuperviseeTabTypes.Home,
  SuperviseeTabTypes.Learn,
  SuperviseeTabTypes.Jobs,
];
export const App = () => {
  return (
    <NavigationContainer>
      <AppStack renderTabs={renderTabs} />
    </NavigationContainer>
  );
};

export default App;
