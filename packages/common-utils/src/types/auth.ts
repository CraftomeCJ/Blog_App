export enum UserType {
  Supervisee = 'Supervisee',
  Supervisor = 'Supervisor',
}
export interface User {
  role: UserType;
}

export interface Auth {
  user?: User;
  logIn: (user: User) => void;
  logOut: () => void;
}
