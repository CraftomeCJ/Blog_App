import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MyText, MyButton } from 'packages/rn-commons/ui/src';
import { useAuth } from 'packages/rn-commons/states';

const Dashboard: React.FC = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);
  const { navigate } = useNavigation();
  const { user, logOut } = useAuth();
  return (
    <ScrollView
        ref={(ref) => {
          scrollViewRef.current = ref;
        }}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <Text>Welcome to dashboard {user?.role}!</Text>
        <MyButton onPress={() => navigate('Detail')} />
        <MyButton title="Logout" onPress={logOut} />

        <MyText />
      </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
});
