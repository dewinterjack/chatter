export interface Message {
  user: string;
  message: string;
  timestamp: number;
}

export interface ChatState {
  messages: Message[];
}

export const SEND_MESSAGE = "SEND_MESSAGE";
export const SIGNALR_SEND_MESSAGE = "SIGNALR_SEND_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

interface SignalRSendMessageAction {
  type: typeof SIGNALR_SEND_MESSAGE;
  payload: Message;
}
interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: Message;
}

interface DeleteMessageAction {
  type: typeof DELETE_MESSAGE;
  meta: {
    timestamp: number;
  };
}

interface ReceiveMessageAction {
  type: typeof RECEIVE_MESSAGE;
  payload: Message;
}

export type ChatActionTypes =
  | SendMessageAction
  | SignalRSendMessageAction
  | DeleteMessageAction
  | ReceiveMessageAction;
