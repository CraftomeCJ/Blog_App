import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';
import { MyText } from '@shareapp1/common-ui';

const Home: React.FC = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);
  return (
    <ScrollView
        ref={(ref) => {
          scrollViewRef.current = ref;
        }}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <Text>Welcome to Supervisor Resources Tab!</Text>
        <MyText />
      </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
});
