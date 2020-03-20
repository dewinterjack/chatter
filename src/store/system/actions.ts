import { LOG_IN, SystemActionTypes } from "./types";

export function login(name: string): SystemActionTypes {
  return {
    type: LOG_IN,
    name: name
  };
}
