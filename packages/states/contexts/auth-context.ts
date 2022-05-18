import { useState } from 'react';
import { Auth, User } from '@shareapp1/types';
import createContext from './create-context';

export const [useAuth, AuthProvider] = createContext<Auth>();

export const useAuthState = (initial?: User): Auth => {
  const [user, setUser] = useState<User | undefined>(initial);
  console.log('useAuthState', user);
  return {
    user,
    logIn: setUser,
    logOut: (): void => setUser(undefined),
  };
};
