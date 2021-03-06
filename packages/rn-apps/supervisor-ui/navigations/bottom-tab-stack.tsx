import React, { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardTabSettings from '../tabs/dashboard/tab-settings';
import SuperviseeTabSettings from '../tabs/supervisee/tab-settings';
import TasksTabSettings from '../tabs/tasks/tab-settings';
import ResourcesTabSettings from '../tabs/resources/tab-settings';
import MoreTabSettings from '../tabs/more/tab-settings';
import { SupervisorTabTypes } from '@shareapp1/types';

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

const BottomTabStack = ({
  navigation,
  route,
  renderTabs,
}: {
  navigation: any;
  route: any;
  renderTabs?: SupervisorTabTypes[];
}): ReactElement => {
  const filteredTabs = renderTabs
    ? tabs.filter((item) =>
        renderTabs.includes(item.type as SupervisorTabTypes)
      )
    : tabs;
  return (
    <Tab.Navigator initialRouteName={DashboardTabSettings.name}>
      {filteredTabs.map((tab) => (
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
