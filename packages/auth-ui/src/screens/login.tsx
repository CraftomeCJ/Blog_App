import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MyButton, MyText } from '@shareapp1/common-ui';

import { Text } from 'react-native';

/* eslint-disable-next-line */
export interface DashboardProps {}

export function Login(props: DashboardProps) {
  const { navigate } = useNavigation();
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
        <Text>Please Login!</Text>
        <MyButton
          onPress={() => {
            navigate('');
          }}
        />
        <MyText />
      </ScrollView>
    </>
  );
}

export default Login;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
});
