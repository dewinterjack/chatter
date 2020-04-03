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

function onlyUnique(value: any, index: any, self: any) {
  return self.indexOf(value) === index;
}

export function chatReducer(
  state = initialState,
  action: ChatActionTypes
): ChatState {
  switch (action.type) {
    case RECEIVE_MESSAGE:
      const sorted = [...state.messages, action.payload].sort(
        (a, b) => a.timestamp - b.timestamp
      );

      const uniqueMessages = sorted.filter((thing, i, arr: any) => {
        return (
          arr.indexOf(arr.find((t: any) => t.timestamp === thing.timestamp)) ===
          i
        );
      });

      return { messages: uniqueMessages };

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
