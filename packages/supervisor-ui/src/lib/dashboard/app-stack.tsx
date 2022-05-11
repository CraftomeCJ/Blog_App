import React, { ReactElement } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// import DashboardScreen from './screens/dashboard';
import { Text } from 'react-native';
const Stack = createStackNavigator<{ Dashboard: undefined }>();

const AppStack = (): ReactElement => {
  return <Text>ABDC</Text>;
};
export default AppStack;

// <Stack.Navigator
//   initialRouteName={'Dashboard'}
//   screenOptions={{ gestureEnabled: false }}
// >
//   <Stack.Screen
//     name={'Dashboard'}
//     component={DashboardScreen}
//     options={{
//       title: 'Supervisor Dashboard',
//       headerLeft: () => null,
//     }}
//   />
// </Stack.Navigator>
