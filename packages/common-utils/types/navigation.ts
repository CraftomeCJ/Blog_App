export enum SuperviseeTabTypes {
  Home = 'Home',
  CaseNotes = 'CaseNotes',
  Learn = 'Learn',
  Jobs = 'Jobs',
  NearMe = 'NearMe',
}

export enum SupervisorTabTypes {
  Home = 'Home',
  Resources = 'Resources',
  Supervisee = 'Supervisee',
  Tasks = 'Tasks',
  More = 'More',
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
