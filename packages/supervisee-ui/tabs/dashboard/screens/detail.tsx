import { useNavigation } from '@react-navigation/native';
import { MyButton, MyText } from '@shareapp1/common-ui';
import React, { useRef } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, StatusBar } from 'react-native';
import { Text } from 'react-native';

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
          <Text>This is SuperVisee Detail page</Text>
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
