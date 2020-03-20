import { LOG_IN, LOG_OUT, SystemActionTypes } from "./types";

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
