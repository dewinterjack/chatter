import { chatReducer } from "./chat/reducer";

//import { combineReducers } from "redux";
//const rootReducer = combineReducers({ chat: chatReducer });

export type RootState = ReturnType<typeof chatReducer>;
