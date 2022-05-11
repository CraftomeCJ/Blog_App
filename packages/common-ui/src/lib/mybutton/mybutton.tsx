import React from 'react';

import { View, Text, Button } from 'react-native';

/* eslint-disable-next-line */
export interface RedButtonProps {
  onPress?: () => void;
}

export function MyButton(props: RedButtonProps) {
  return (
    <View>
      <Button title={'My Button'} onPress={props?.onPress} />
    </View>
  );
}

export default MyButton;
