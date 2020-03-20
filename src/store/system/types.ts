export interface User {
  id: number;
  name: string;
}

export interface UserState {
  loggedIn: boolean;
}

export interface SystemState {
  usersOnline: number;
}

export const LOG_IN = "LOG_IN";

interface LoginAction {
  type: typeof LOG_IN;
  name: string;
}

export type SystemActionTypes = LoginAction;
