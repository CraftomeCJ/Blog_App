import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';
import { MyButton, MyText } from '@shareapp1/common-ui';
import { useAuth } from '@shareapp1/common-utils';

const Home: React.FC = () => {
  const auth = useAuth();

  const scrollViewRef = useRef<null | ScrollView>(null);
  return (
    <ScrollView
        ref={(ref) => {
          scrollViewRef.current = ref;
        }}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <Text>Welcome to Supervisor More Tab!</Text>
        <MyButton title="Logout" onPress={() => auth.logOut()} />
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
