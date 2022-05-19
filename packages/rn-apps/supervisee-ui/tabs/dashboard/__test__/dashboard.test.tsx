import React from 'react';
import { render } from '@testing-library/react-native';
import Dashboard from '../screens/Dashboard';
import { RecoilRoot } from 'recoil';

describe('Supervisee UI:Dashboard:Home', () => {
  it('should render successfully', () => {
    const { container } = render(
      <RecoilRoot>
        <Dashboard />
      </RecoilRoot>
    );

    expect(container).toBeTruthy();
  });
});
