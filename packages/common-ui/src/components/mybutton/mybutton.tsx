import React from 'react';

import { View, Button } from 'react-native';

/* eslint-disable-next-line */
export interface MyButtonProps {
  onPress?: () => void;
}

const MyButton = (props: MyButtonProps) => {
  return (
    <View>
      <Button title={'My Button'} onPress={props?.onPress} />
    </View>
  );
};

export default MyButton;
