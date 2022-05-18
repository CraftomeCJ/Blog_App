import { useRecoilState } from 'recoil';
import { Auth, UserType, User } from '@shareapp1/types';
import { authState } from '../atoms/authState';

export const useAuth = (): Auth => {
  const [user, setUser] = useRecoilState(authState);

  const logOut = () => {
    const user: User = { role: UserType.Unauthenticated };
    setUser(() => user);
  };

  return {
    user,
    logIn: setUser,
    logOut,
    isAuthenticated: () => user.role !== UserType.Unauthenticated,
  };
};
