import { SystemState, SystemActionTypes, LOGGED_IN, LOGGED_OUT, CONNECTION_COUNT_CHANGED } from "./types";

const initialState: SystemState = {
  usersOnline: 0,
  currentUser: { id: 0, name: "guest" }
};

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case LOGGED_IN:
      localStorage.setItem("currentUser", action.name);
      return {
        usersOnline: state.usersOnline,
        currentUser: { id: state.usersOnline + 1, name: action.name }
      };
    case LOGGED_OUT:
        localStorage.removeItem("currentUser");
      return {
        usersOnline: state.usersOnline,
        currentUser: { id: 0, name: "guest" }
      };
    case CONNECTION_COUNT_CHANGED:
      return {
        usersOnline: action.connectionCount,
        currentUser: state.currentUser
      };
    default:
      return state;
  }
}
