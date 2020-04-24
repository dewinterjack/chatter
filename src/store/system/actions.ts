import { LOG_IN, LOG_OUT, LOGGED_IN, LOGGED_OUT, CONNECTION_COUNT_CHANGED, SystemActionTypes } from "./types";

export function login(name: string): SystemActionTypes {
  return {
    type: LOG_IN,
    name: name
  };
}

export function logout(): SystemActionTypes {
  return {
    type: LOG_OUT
  };
}

export function loggedIn(name: string): SystemActionTypes {
  return {
    type: LOGGED_IN,
    name: name
  };
}

export function loggedOut(): SystemActionTypes {
  return {
    type: LOGGED_OUT
  };
}

export function connectionCountChanged(connectionCount: number): SystemActionTypes {
  return {
    type: CONNECTION_COUNT_CHANGED,
    connectionCount: connectionCount
  };
}
