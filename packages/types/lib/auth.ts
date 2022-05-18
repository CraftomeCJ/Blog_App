export enum UserType {
  Supervisee = 'Supervisee',
  Supervisor = 'Supervisor',
  Unauthenticated = 'Unauthenticated',
}
export interface User {
  role: UserType;
}

export interface Auth {
  user?: User;
  logIn: (user: User) => void;
  logOut: () => void;
  isAuthenticated: () => boolean;
}
