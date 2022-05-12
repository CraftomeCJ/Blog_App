import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MyText } from '@shareapp1/common-ui';

import { Text } from 'react-native';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Home(props: DashboardProps) {
  const scrollViewRef = useRef<null | ScrollView>(null);
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
          <Text>Welcome to Supervisee Learn Tab!</Text>
          <MyText />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
});