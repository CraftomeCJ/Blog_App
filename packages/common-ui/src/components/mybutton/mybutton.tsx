import React from 'react';

import { View, Button } from 'react-native';

/* eslint-disable-next-line */
export interface MyButtonProps {
  onPress?: () => void;
}

export const MyButton = (props: MyButtonProps) => {
  return (
    <View>
      <Button title={'My Button'} onPress={props?.onPress} />
    </View>
  );
};
