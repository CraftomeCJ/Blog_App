import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';
import { MyButton, MyText } from 'packages/rn-commons/ui/src';
import { useAuth } from 'packages/rn-commons/states';

const Home: React.FC = () => {
  const {logOut} = useAuth();

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
        <MyButton title="Logout" onPress={() => logOut()} />
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
