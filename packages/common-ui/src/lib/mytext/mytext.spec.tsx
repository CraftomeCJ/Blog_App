import React from 'react';
import { render } from '@testing-library/react-native';

import Mytext from './mytext';

describe('Mytext', () => {
  it('should render successfully', () => {
    const { container } = render(<Mytext />);
    expect(container).toBeTruthy();
  });
});
