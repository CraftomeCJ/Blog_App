import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../screens/home';

describe('Supervisee UI:Learn:Home', () => {
  it('should render successfully', () => {
    const { container } = render(<Home />);

    expect(container).toBeTruthy();
  });
});
