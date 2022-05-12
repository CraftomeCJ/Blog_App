import React, { ReactElement } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import DashboardTabSettings from 'packages/supervisor-ui/tabs/dashboard/tab-settings';
import CaseNotesTabSettings from 'packages/supervisee-ui/tabs/case-notes/tab-settings';
import LearnTabSettings from 'packages/supervisee-ui/tabs/learn/tab-settings';
import JobsTabSettings from 'packages/supervisee-ui/tabs/jobs/tab-settings';
import NearMeTabSettings from 'packages/supervisee-ui/tabs/near-me/tab-settings';

type RootStackParamList = {
  Home: undefined;
  Supervisee: undefined;
};

const getHeaderTitle = (route): string => {
  const routeName = getFocusedRouteNameFromRoute(route);

  return routeName ?? '';
};

const Tab = createBottomTabNavigator<RootStackParamList>();

const tabs = [
  DashboardTabSettings,
  CaseNotesTabSettings,
  LearnTabSettings,
  JobsTabSettings,
  NearMeTabSettings,
];

const BottomTabStack = ({ navigation, route }): ReactElement => {
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);
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
