import React, { useEffect, useRef } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Text } from 'react-native';
import { MyText } from 'packages/rn-commons/ui/src';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Welcome(props: DashboardProps) {
  const { navigate } = useNavigation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('Login');
    }, 1000);
    return () => clearTimeout(timeout);
  }, [navigate]);

  const scrollViewRef = useRef<null | ScrollView>(null);
  return (
    <>
      <ScrollView
        ref={(ref) => {
          scrollViewRef.current = ref;
        }}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <Text>Welcome to SHARE APP!</Text>
        <MyText />
      </ScrollView>
    </>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
});
