import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AppStack from 'packages/supervisor-ui/navigations/supervisor-app-stack';
import { SupervisorTabTypes } from 'packages/common-utils/types/navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <AppStack
        renderTabs={[
          SupervisorTabTypes.Supervisee,
          SupervisorTabTypes.Resources,
          SupervisorTabTypes.More,
        ]}
      />
    </NavigationContainer>
  );
};

export default App;
