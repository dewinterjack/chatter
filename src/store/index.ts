import { chatReducer } from "./chat/reducer";
import { systemReducer } from "./system/reducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  chat: chatReducer,
  system: systemReducer
});

export type RootState = ReturnType<typeof rootReducer>;
