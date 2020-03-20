import { SystemState, SystemActionTypes, LOG_IN, LOG_OUT } from "./types";

const initialState: SystemState = {
  usersOnline: 0,
  currentUser: { id: 0, name: "" }
};

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case LOG_IN:
      return {
        usersOnline: state.usersOnline + 1,
        currentUser: { id: state.usersOnline + 1, name: action.name }
      };
    case LOG_OUT:
      return {
        usersOnline: state.usersOnline - 1,
        currentUser: { id: state.usersOnline - 1, name: "" }
      };
    default:
      return state;
  }
}
