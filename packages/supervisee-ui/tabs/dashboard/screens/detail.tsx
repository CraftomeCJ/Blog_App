import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
} from 'react-native';
import { MyButton, MyText } from '@shareapp1/common-ui';

const Detail: React.FC = () => {
  const scrollViewRef = useRef<null | ScrollView>(null);
  const { navigate } = useNavigation();

  return (
    <>
      <ScrollView
        ref={(ref) => {
          scrollViewRef.current = ref;
        }}
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}
      >
        <Text>This is SuperVisee Detail page</Text>
        <MyButton onPress={() => navigate('Dashboard')} />
        <MyText />
      </ScrollView>
    </>
  );
};

export default Detail;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
});
