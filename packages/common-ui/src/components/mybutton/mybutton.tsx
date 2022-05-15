import React from 'react';

import { View, Button } from 'react-native';

/* eslint-disable-next-line */
export interface MyButtonProps {
  onPress?: () => void;
  title?: string;
}

export const MyButton = (props: MyButtonProps) => {
  return (
    <View>
      <Button title={props.title ?? 'My Button'} onPress={props?.onPress} />
    </View>
  );
};
