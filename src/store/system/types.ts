export interface User {
  id: number;
  name: string;
}

export interface SystemState {
  usersOnline: number;
  currentUser: User;
}

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

interface LoginAction {
  type: typeof LOG_IN;
  name: string;
}

interface LogoutAction {
  type: typeof LOG_OUT;
}

export type SystemActionTypes = LoginAction | LogoutAction;
