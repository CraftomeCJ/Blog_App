import React from 'react';
import AppStack from 'packages/supervisor-ui/src/lib/dashboard/app-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator<{ Dashboard: undefined }>();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Dashboard'}
        screenOptions={{ gestureEnabled: false }}
      >
        {AppStack.map((item) => (
          <Stack.Screen
            name={item.name}
            component={item.component}
            options={item.options}
            key={item.name}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
