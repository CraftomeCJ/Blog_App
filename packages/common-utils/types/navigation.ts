export enum SuperviseeTabTypes {
  Home,
  CaseNotes,
  Learn,
  Jobs,
  NearMe,
}

export enum SupervisorTabTypes {
  Home,
  More,
  Resources,
  Supervisee,
  Tasks,
}

export interface NavigationTabSettings {
  name: string;
  component: React.FC;
  options: { title: string };
  type: SuperviseeTabTypes | SupervisorTabTypes;
}

export interface SuperviseeAppStackProps {
  renderTabs?: SuperviseeTabTypes[];
}

export interface SupervisorAppStackProps {
  renderTabs?: SupervisorTabTypes[];
}
