import { useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { LangConfig, LangKey } from '@shareapp1/types';
import { useRecoilState } from 'recoil';
import { langState } from '../atoms/langState';

export const Languages: { [key in LangKey]: { name: string } } = {
  en: { name: 'English' },
  zh: { name: 'Chinese' },
  ma: { name: 'Malay' },
  tm: { name: 'Tamil' },
};

export const useLang = (initial?: LangKey): LangConfig => {
  const [current, setCurrent] = useRecoilState<LangKey>(langState);
  const { i18n } = useTranslation();

  const set = useCallback(
    (langKey: LangKey) => {
      console.log('i18n11111', i18n);
      // i18n?.changeLanguage(langKey);
      setCurrent(langKey);
    },
    [i18n]
  );

  useEffect(() => {
    set(initial ?? 'en');
  }, [initial, set]);

  const list: LangKey[] = ['en', 'zh', 'ma', 'tm'];

  return { current, list, set };
};

/* helper */
export const getLang = (
  langKey: LangKey
): {
  name: string;
} => Languages[langKey] ?? Languages['en'];
