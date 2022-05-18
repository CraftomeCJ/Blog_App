import React from 'react';
import { RecoilRoot } from 'recoil';
import { Provider as PaperProvider } from 'react-native-paper';

import { SafeAreaProvider } from 'react-native-safe-area-context';


type AppProviderProps = { children?: React.ReactNode };
export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

  return (
    <RecoilRoot>
      <PaperProvider>
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </PaperProvider>
    </RecoilRoot>
  );
};
