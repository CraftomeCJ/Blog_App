import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack as SuperviseeAppStack } from '@shareapp1/supervisee-ui';
import { AppStack as SupervisorAppStack } from '@shareapp1/supervisor-ui';
import {
  SuperviseeTabTypes,
  SupervisorTabTypes,
} from '@shareapp1/common-utils';
import { AppProvider } from '@shareapp1/common-ui';
import { AuthStack } from '@shareapp1/auth-ui';
//can select the tabs you want to display
const renderTabsSupervisee = [
  SuperviseeTabTypes.Home,
  SuperviseeTabTypes.Learn,
  SuperviseeTabTypes.Jobs,
];
const renderTabsSupervisor = [
  SupervisorTabTypes.Home,
  SupervisorTabTypes.Supervisee,
  SupervisorTabTypes.Resources,
  SupervisorTabTypes.Tasks,
  SupervisorTabTypes.More,
];

export const App = () => {
  console.log('At App');
  return (
    <AppProvider>
      <NavigationContainer>
        <SuperviseeAppStack renderTabs={renderTabsSupervisee} />
        <SupervisorAppStack renderTabs={renderTabsSupervisor} />
        <AuthStack />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
