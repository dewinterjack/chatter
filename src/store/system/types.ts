export interface User {
  id: number;
  name: string;
}

export interface SystemState {
  usersOnline: number;
  currentUser: User;
}

export const LOG_IN = "LOG_IN";

interface LoginAction {
  type: typeof LOG_IN;
  name: string;
}

export type SystemActionTypes = LoginAction;
