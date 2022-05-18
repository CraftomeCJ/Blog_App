import React from 'react';
import { RecoilRoot } from 'recoil';
import { Provider as PaperProvider } from 'react-native-paper';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider, ConfigProvider, useAuthState, useConfigState } from '@shareapp1/data';


type AppProviderProps = { children?: React.ReactNode };
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const config = useConfigState({ lang: 'en' });
  const auth = useAuthState();
  console.log('AppProvider auth', auth);
  return (
    <RecoilRoot>
      <PaperProvider>
        <ConfigProvider value={config}>
          <AuthProvider value={auth}>
            <SafeAreaProvider>{children}</SafeAreaProvider>
          </AuthProvider>
        </ConfigProvider>
      </PaperProvider>
    </RecoilRoot>
  );
};
