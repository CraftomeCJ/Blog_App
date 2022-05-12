import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MyButton, MyText } from '@shareapp1/common-ui';

import { Text } from 'react-native';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Dashboard(props: DashboardProps) {
  const scrollViewRef = useRef<null | ScrollView>(null);
  const { navigate } = useNavigation();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          ref={(ref) => {
            scrollViewRef.current = ref;
          }}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Text>Welcome to Supervisee dashboard!</Text>
          <MyButton onPress={() => navigate('SuperViseeDetail')} />
          <MyText />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
});
