import React, { ReactElement } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DashboardScreen from './screens/dashboard';
import DetailScreen from './screens/detail';

const Stack = createStackNavigator<{ Dashboard: undefined }>();

const AppStack = (): ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Dashboard'}
        screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen
          name={'Dashboard'}
          component={DashboardScreen}
          options={{
            title: 'Supervisor Dashboard1111',
          }}
        />
        <Stack.Screen
          name={'Detail'}
          component={DetailScreen}
          options={{
            title: 'Supervisor Detail',
            headerLeft: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppStack;
