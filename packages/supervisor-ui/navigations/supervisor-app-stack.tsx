import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuthAppStack from 'packages/auth-ui/src/app-stack';
import DashboardTabAppStack from 'packages/supervisor-ui/tabs/dashboard/app-stack';
import SuperviseeTabAppStack from 'packages/supervisor-ui/tabs/supervisee/app-stack';
import TasksTabAppStack from 'packages/supervisor-ui/tabs/tasks/app-stack';
import ResourcesTabAppStack from 'packages/supervisor-ui/tabs/resources/app-stack';
import MoreTabAppStack from 'packages/supervisor-ui/tabs/more/app-stack';
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
const tabs = includeAuth ? [AuthAppStack, ...tabScreens] : tabScreens;
const AppStack = ({ renderTabs }: SupervisorAppStackProps) => {
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

export default AppStack;
