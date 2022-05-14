import React from 'react';
import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface MyTextProps {
  text?: string;
}

export const MyText = (props: MyTextProps) => {
  return (
    <View>
      <Text>{props.text ?? 'My Text'}</Text>
    </View>
  );
};
