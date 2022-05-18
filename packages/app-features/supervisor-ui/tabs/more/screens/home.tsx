import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';
import { MyButton, MyText } from '@shareapp1/common-ui/react-native';
import { useAuth } from '@shareapp1/states';

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
