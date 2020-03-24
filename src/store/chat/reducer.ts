import {
  ChatState,
  ChatActionTypes,
  MESSAGE_SENT,
  RECEIVE_MESSAGE,
  DELETE_MESSAGE
} from "./types";

const initialState: ChatState = {
  messages: []
};

export function chatReducer(
  state = initialState,
  action: ChatActionTypes
): ChatState {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      const sorted = [...state.messages, action.payload].sort(
        (a, b) => a.timestamp - b.timestamp
      );
      return { messages: sorted };

    case MESSAGE_SENT:
      return {
        messages: [...state.messages, action.payload]
      };
    case DELETE_MESSAGE:
      return {
        messages: state.messages.filter(
          message => message.timestamp !== action.meta.timestamp
        )
      };
    default:
      return state;
  }
}
