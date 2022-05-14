import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { authScreens } from '@shareapp1/auth-ui';
import DashboardTabAppStack from '../tabs/dashboard/app-stack';
import SuperviseeTabAppStack from '../tabs/supervisee/app-stack';
import TasksTabAppStack from '../tabs/tasks/app-stack';
import ResourcesTabAppStack from '../tabs/resources/app-stack';
import MoreTabAppStack from '../tabs/more/app-stack';
import BottomTabStack from './supervisor-bottom-tab-stack';
import { SupervisorAppStackProps } from '@shareapp1/common-utils';

const Stack = createStackNavigator<{ SuperVisorDashboardHome: undefined }>();
const includeAuth = true;
const tabScreens = [
  DashboardTabAppStack,
  SuperviseeTabAppStack,
  TasksTabAppStack,
  ResourcesTabAppStack,
  MoreTabAppStack,
];
const tabs = includeAuth ? [authScreens, ...tabScreens] : tabScreens;
export const AppStack = ({ renderTabs }: SupervisorAppStackProps) => {
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
      {tabs.map((tab) =>
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
