import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuth } from '@shareapp1/common-utils';
import { authScreens } from './auth-screens';

const Stack = createStackNavigator<{ Welcome: undefined }>();
export const AuthStack = () => {
  const { user } = useAuth();
  useEffect(() => {
    console.log('AuthStack auth', user);
  }, [user]);
  if (user) {
    return null;
  }
  return (
    <Stack.Navigator
      initialRouteName={authScreens[0].name}
      screenOptions={{ gestureEnabled: false }}
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
