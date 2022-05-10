import React from 'react';

import { View, Text, Button } from 'react-native';

/* eslint-disable-next-line */
export interface RedButtonProps {}

export function MyButton(props: RedButtonProps) {
  return (
    <View>
      <Button title={'My Button'} />
    </View>
  );
}

export default MyButton;
