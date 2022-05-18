import { atom } from 'recoil';
import { User, UserType } from '@shareapp1/types';

const authState = atom<User>({
  key: 'authState',
  default: {
    role: UserType.Unauthenticated
  },
});
export default authState;