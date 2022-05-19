import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '@shareapp1/states';
import { authScreens } from './auth-screens';

const Stack = createStackNavigator<{ Welcome: undefined }>();
export const AuthStack = () => {
  const { user, isAuthenticated } = useAuth();
  if (isAuthenticated()) {
    return null;
  }
  return (
    <Stack.Navigator
      initialRouteName={authScreens[0].name}
      screenOptions={{
        gestureEnabled: false,
        headerLeft: () => {
          return null;
        },
      }}
    >
      {authScreens.map((screen) => (
        <Stack.Screen
          name={screen.name}
          component={screen.component}
          options={screen.options}
          key={screen.name}
        />
      ))}
    </Stack.Navigator>
  );
};
