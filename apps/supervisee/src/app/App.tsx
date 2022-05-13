import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from 'packages/supervisee-ui/navigations/supervisee-app-stack';
import { SuperviseeTabTypes } from 'packages/common-utils/types/navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <AppStack
        renderTabs={[SuperviseeTabTypes.Learn, SuperviseeTabTypes.Jobs]}
      />
    </NavigationContainer>
  );
};

export default App;
