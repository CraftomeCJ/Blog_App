import createContext from './create-context';
import { useLang } from '@shareapp1/utilities';
import { Config, InitialConfigState } from '@shareapp1/types';

export const [useConfig, ConfigProvider] = createContext<Config>();

export const useConfigState = (initial?: InitialConfigState): Config => {
  const lang = useLang(initial?.lang);

  return { lang };
};
