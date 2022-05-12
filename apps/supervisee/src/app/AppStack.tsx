import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardTabAppStack from 'packages/supervisee-ui/tabs/dashboard/app-stack';
import CaseNotesTabAppStack from 'packages/supervisee-ui/tabs/case-notes/app-stack';
import LearnTabAppStack from 'packages/supervisee-ui/tabs/learn/app-stack';
import JobsTabAppStack from 'packages/supervisee-ui/tabs/jobs/app-stack';
import NearMeTabAppStack from 'packages/supervisee-ui/tabs/near-me/app-stack';
import AuthAppStack from 'packages/auth-ui/src/app-stack';

import BottomTabStack from './BottomTabStack';

const Stack = createStackNavigator<{ SuperVisorDashboardHome: undefined }>();
const tabScreens = [
  AuthAppStack,
  DashboardTabAppStack,
  CaseNotesTabAppStack,
  LearnTabAppStack,
  JobsTabAppStack,
  NearMeTabAppStack,
];
const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={AuthAppStack[0].name}
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name={'SuperviseeTabs'}
        component={BottomTabStack}
        options={{
          headerLeft: () => null,
        }}
      />
      {tabScreens.map((tab) =>
        tab.map((screen) => (
          <Stack.Screen
            name={screen.name}
            component={screen.component}
            options={screen.options}
            key={screen.name}
          />
        ))
      )}
    </Stack.Navigator>
  );
};

export default AppStack;
