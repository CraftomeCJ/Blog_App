import React from 'react';
import { render } from '@testing-library/react-native';

import AppStack from './app-stack';

describe('AppStack', () => {
  it('should render successfully', () => {
    const { container } = render(<AppStack />);
    expect(container).toBeTruthy();
  });
});
