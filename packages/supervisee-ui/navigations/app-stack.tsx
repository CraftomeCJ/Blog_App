import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardTabAppStack from '../tabs/dashboard/app-stack';
import CaseNotesTabAppStack from '../tabs/case-notes/app-stack';
import LearnTabAppStack from '../tabs/learn/app-stack';
import JobsTabAppStack from '../tabs/jobs/app-stack';
import NearMeTabAppStack from '../tabs/near-me/app-stack';
import BottomTabStack from './bottom-tab-stack';
import {
  SuperviseeAppStackProps,
  useAuth,
  UserType,
} from '@shareapp1/common-utils';

const Stack = createStackNavigator<{ SuperVisorDashboardHome: undefined }>();
const tabScreens = [
  DashboardTabAppStack,
  CaseNotesTabAppStack,
  LearnTabAppStack,
  JobsTabAppStack,
  NearMeTabAppStack,
];
export const AppStack = ({ renderTabs }: SuperviseeAppStackProps) => {
  const { user } = useAuth();
  console.log('Supervisee UI auth', user);
  if (!user || user.role !== UserType.Supervisee) {
    return <></>;
  }
  return (
    <Stack.Navigator
      initialRouteName={BottomTabStack.name}
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name={BottomTabStack.name}
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
