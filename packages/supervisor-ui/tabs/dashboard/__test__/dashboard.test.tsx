import React from 'react';
import { render } from '@testing-library/react-native';
import Dashboard from '../screens/dashboard';

describe('Supervisor UI:Dashboard:Home', () => {
  it('should render successfully', () => {
    const { container } = render(<Dashboard />);

    expect(container).toBeTruthy();
  });
});
