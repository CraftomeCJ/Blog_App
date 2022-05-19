import { atom } from 'recoil';
import { User, UserType } from '../../types';

export const authState = atom<User>({
  key: 'authState',
  default: {
    role: UserType.Unauthenticated,
  },
});
