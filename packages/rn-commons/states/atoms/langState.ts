import { atom } from 'recoil';
import { LangKey } from '../../types';

export const langState = atom<LangKey>({
  key: 'langState',
  default: 'en',
});
