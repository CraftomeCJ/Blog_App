import React from 'react';
import { render } from '@testing-library/react-native';
import Home from '../screens/home';
import { RecoilRoot } from 'recoil';

describe('Supervisor UI:More:Home', () => {
  it('should render successfully', () => {
    const { container } = render(
      <RecoilRoot>
        <Home />
      </RecoilRoot>
    );

    expect(container).toBeTruthy();
  });
});
