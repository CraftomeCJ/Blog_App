import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';
import { MyText, MyButton } from '@shareapp1/common-ui';

const Detail: React.FC = () => {
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
          <Text>This is detail page</Text>
          <MyButton onPress={() => navigate('Dashboard')} />
          <MyText />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Detail;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
});
