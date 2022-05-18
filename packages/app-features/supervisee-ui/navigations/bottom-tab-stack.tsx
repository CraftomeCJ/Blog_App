import React, { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardTabSettings from '../tabs/dashboard/tab-settings';
import CaseNotesTabSettings from '../tabs/case-notes/tab-settings';
import LearnTabSettings from '../tabs/learn/tab-settings';
import JobsTabSettings from '../tabs/jobs/tab-settings';
import NearMeTabSettings from '../tabs/near-me/tab-settings';
import { SuperviseeTabTypes } from '@shareapp1/types';

type RootStackParamList = {
  Home: undefined;
  Supervisee: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const tabs = [
  DashboardTabSettings,
  CaseNotesTabSettings,
  LearnTabSettings,
  JobsTabSettings,
  NearMeTabSettings,
];

const BottomTabStack = ({
  navigation,
  route,
  renderTabs,
}: {
  navigation: any;
  route: any;
  renderTabs?: SuperviseeTabTypes[];
}): ReactElement => {
  const filteredTabs = renderTabs
    ? tabs.filter((item) => {
        console.log(renderTabs, ':', item.type);
        return renderTabs.includes(item.type as SuperviseeTabTypes);
      })
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
