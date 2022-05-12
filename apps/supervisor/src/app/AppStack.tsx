import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardTabAppStack from 'packages/supervisor-ui/tabs/dashboard/app-stack';
import SuperviseeTabAppStack from 'packages/supervisor-ui/tabs/supervisee/app-stack';
import TasksTabAppStack from 'packages/supervisor-ui/tabs/tasks/app-stack';
import BottomTabStack from './BottomTabStack';

const Stack = createStackNavigator<{ SuperVisorDashboardHome: undefined }>();
const tabScreens = [
  DashboardTabAppStack,
  SuperviseeTabAppStack,
  TasksTabAppStack,
];
const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Dashboard'}
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name={'SupervisorTbs'}
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
