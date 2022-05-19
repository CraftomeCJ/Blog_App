import React from 'react';
import { render } from '@testing-library/react-native';
import Dashboard from '../screens/dashboard';
import { RecoilRoot } from 'recoil';

describe('Supervisor UI:Dashboard:Home', () => {
  it('should render successfully', () => {
    const { container } = render(
      <RecoilRoot>
        <Dashboard />
      </RecoilRoot>
    );

    expect(container).toBeTruthy();
  });
});
