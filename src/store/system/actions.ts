import { LOG_IN, SystemActionTypes } from "./types";

export function login(username: string): SystemActionTypes {
  return {
    type: LOG_IN,
    name: username
  };
}
