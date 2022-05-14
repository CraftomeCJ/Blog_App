import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from 'packages/supervisor-ui/navigations/supervisor-app-stack';
import { SupervisorTabTypes } from 'packages/common-utils/types/navigation';

//can select the tabs you want to display
const renderTabs = [
  SupervisorTabTypes.Home,
  SupervisorTabTypes.Supervisee,
  SupervisorTabTypes.Resources,
  SupervisorTabTypes.Tasks,
  SupervisorTabTypes.More,
];
export const App = () => {
  return (
    <NavigationContainer>
      <AppStack renderTabs={renderTabs} />
    </NavigationContainer>
  );
};

export default App;
