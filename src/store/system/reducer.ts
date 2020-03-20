import { SystemState, SystemActionTypes, LOG_IN } from "./types";

const initialState: SystemState = {
  usersOnline: 0
};

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case LOG_IN:
      return {
        usersOnline: state.usersOnline + 1
      };
    default:
      return state;
  }
}
