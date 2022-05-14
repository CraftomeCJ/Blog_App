import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardTabAppStack from '../tabs/dashboard/app-stack';
import CaseNotesTabAppStack from '../tabs/case-notes/app-stack';
import LearnTabAppStack from '../tabs/learn/app-stack';
import JobsTabAppStack from '../tabs/jobs/app-stack';
import NearMeTabAppStack from '../tabs/near-me/app-stack';
import { authScreens } from '@shareapp1/auth-ui';
import BottomTabStack from './bottom-tab-stack';
import { SuperviseeAppStackProps } from '@shareapp1/common-utils';

const Stack = createStackNavigator<{ SuperVisorDashboardHome: undefined }>();
const includeAuth = false;
const tabScreens = [
  DashboardTabAppStack,
  CaseNotesTabAppStack,
  LearnTabAppStack,
  JobsTabAppStack,
  NearMeTabAppStack,
];
export const AppStack = ({ renderTabs }: SuperviseeAppStackProps) => {
  return (
    <Stack.Navigator
      initialRouteName={authScreens[0].name}
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name={'SuperviseeTabs'}
        options={{
          headerLeft: () => null,
        }}
      >
        {(props) => <BottomTabStack {...props} renderTabs={renderTabs} />}
      </Stack.Screen>
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
