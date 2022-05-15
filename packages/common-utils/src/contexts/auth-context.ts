import { useState } from 'react';
import { Auth, User } from '../types/auth';
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
