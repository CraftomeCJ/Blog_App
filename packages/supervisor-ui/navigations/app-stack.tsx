import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardTabAppStack from '../tabs/dashboard/app-stack';
import SuperviseeTabAppStack from '../tabs/supervisee/app-stack';
import TasksTabAppStack from '../tabs/tasks/app-stack';
import ResourcesTabAppStack from '../tabs/resources/app-stack';
import MoreTabAppStack from '../tabs/more/app-stack';
import BottomTabStack from './bottom-tab-stack';
import {
  SupervisorAppStackProps,
  useAuth,
  UserType,
} from '@shareapp1/common-utils';

const Stack = createStackNavigator<{ SuperVisorDashboardHome: undefined }>();
const tabScreens = [
  DashboardTabAppStack,
  SuperviseeTabAppStack,
  TasksTabAppStack,
  ResourcesTabAppStack,
  MoreTabAppStack,
];
export const AppStack = ({ renderTabs }: SupervisorAppStackProps) => {
  const { user, logOut } = useAuth();
  if (!user || user.role !== UserType.Supervisor) {
    logOut();
    return null;
  }
  console.log('Supervisor UI auth', user);
  console.log('tabScreens', tabScreens);

  return (
    <Stack.Navigator
      initialRouteName={'Dashboard'}
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name={'SupervisorTbs'}
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
