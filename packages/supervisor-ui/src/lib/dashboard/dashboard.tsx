import { MyButton, MyText } from '@shareapp1/common-ui';
import React from 'react';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  return (
    <View>
      <Text>Welcome to dashboard!</Text>
      <MyButton />
      <MyText />
    </View>
  );
}

export default Dashboard;
