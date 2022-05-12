import React, { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardTabSettings from 'packages/supervisor-ui/tabs/dashboard/tab-settings';
import SuperviseeTabSettings from 'packages/supervisor-ui/tabs/supervisee/tab-settings';
import TasksTabSettings from 'packages/supervisor-ui/tabs/tasks/tab-settings';
import ResourcesTabSettings from 'packages/supervisor-ui/tabs/resources/tab-settings';
import MoreTabSettings from 'packages/supervisor-ui/tabs/more/tab-settings';

type RootStackParamList = {
  Home: undefined;
  Supervisee: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const tabs = [
  DashboardTabSettings,
  SuperviseeTabSettings,
  TasksTabSettings,
  ResourcesTabSettings,
  MoreTabSettings,
];

const BottomTabStack = ({ navigation, route }): ReactElement => {
  return (
    <Tab.Navigator initialRouteName={DashboardTabSettings.name}>
      {tabs.map((tab) => (
        <Tab.Screen
          name={tab.name}
          component={tab.component}
          options={tab.options}
          key={tab.name}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabStack;
