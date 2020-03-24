import {
  Message,
  SEND_MESSAGE,
  DELETE_MESSAGE,
  RECEIVE_MESSAGE,
  SIGNALR_SEND_MESSAGE,
  ChatActionTypes
} from "./types";

export function sendMessage(newMessage: Message): ChatActionTypes {
  return {
    type: SIGNALR_SEND_MESSAGE,
    payload: newMessage
  };
}

export function signalRSendMessage(newMessage: Message): ChatActionTypes {
  return {
    type: SEND_MESSAGE,
    payload: newMessage
  };
}

export function receiveMessage(newMessage: Message): ChatActionTypes {
  return {
    type: RECEIVE_MESSAGE,
    payload: newMessage
  };
}

export function deleteMessage(timestamp: number): ChatActionTypes {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp
    }
  };
}
