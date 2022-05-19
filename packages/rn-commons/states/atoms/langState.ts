import { atom } from 'recoil';
import { LangKey } from '@shareapp1/types';

export const langState = atom<LangKey>({
  key: 'langState',
  default: 'en',
});
