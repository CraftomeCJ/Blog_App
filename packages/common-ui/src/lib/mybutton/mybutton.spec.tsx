import React from 'react';
import { render } from '@testing-library/react-native';

import MyButton from './mybutton';

describe('Button', () => {
  it('should render successfully', () => {
    const { container } = render(<MyButton />);
    expect(container).toBeTruthy();
  });
});
