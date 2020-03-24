export interface Message {
  user: string;
  message: string;
  timestamp: number;
}

export interface ChatState {
  messages: Message[];
}

export const MESSAGE_SENT = "MESSAGE_SENT";
export const SIGNALR_SEND_MESSAGE = "SIGNALR_SEND_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";

interface SignalRSendMessageAction {
  type: typeof SIGNALR_SEND_MESSAGE;
  payload: Message;
}
interface MessageSentAction {
  type: typeof MESSAGE_SENT;
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
  | MessageSentAction
  | SignalRSendMessageAction
  | DeleteMessageAction
  | ReceiveMessageAction;
