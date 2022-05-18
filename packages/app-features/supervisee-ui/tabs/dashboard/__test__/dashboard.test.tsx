import React from 'react';
import { render } from '@testing-library/react-native';
import Dashboard from '../screens/Dashboard';

describe('Supervisee UI:Dashboard:Home', () => {
  it('should render successfully', () => {
    const { container } = render(<Dashboard />);

    expect(container).toBeTruthy();
  });
});
