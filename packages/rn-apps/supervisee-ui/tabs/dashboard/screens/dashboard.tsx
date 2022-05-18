import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from 'packages/rn-commons/states';
import { MyButton, MyText } from 'packages/rn-commons/ui/src';

const Dashboard: React.FC = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);
  const { navigate } = useNavigation();
  const { logOut } = useAuth();
  return (
    <>
      <ScrollView
        ref={(ref) => {
          scrollViewRef.current = ref;
        }}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <Text>Welcome to Supervisee dashboard!</Text>
        <MyButton onPress={() => navigate('SuperViseeDetail')} />
        <MyButton title="Logout" onPress={logOut} />
        <MyText />
      </ScrollView>
    </>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
});
