export interface Config {
  lang: LangConfig;
}

export interface InitialConfigState {
  lang?: LangKey;
}

/* lang */
export type LangKey = 'en' | 'zh' | 'ma' | 'tm';

export interface LangConfig {
  current?: LangKey;
  list: LangKey[];
  set: (key: LangKey) => void;
}
