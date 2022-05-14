import { Config, InitialConfigState } from '../types/config';
import createContext from './create-context';
import { useLang } from '../hooks/useLang';

export const [useConfig, ConfigProvider] = createContext<Config>();

export const useConfigState = (initial?: InitialConfigState): Config => {
  const lang = useLang(initial?.lang);

  return { lang };
};
