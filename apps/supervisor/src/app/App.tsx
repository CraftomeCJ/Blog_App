import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from '@shareapp1/supervisor-ui';
import { SupervisorTabTypes } from '@shareapp1/utilities';
import { AuthStack } from '@shareapp1/auth-ui';
import { createStackNavigator } from '@react-navigation/stack';
import { AppProvider } from '@shareapp1/common-ui/react-native';

const Stack = createStackNavigator<{}>();

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
    <AppProvider>
      <NavigationContainer>
        <AppStack renderTabs={renderTabs} />
        <AuthStack />
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
