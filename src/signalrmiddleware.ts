import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import * as actions from "./store/chat/actions";
import { SIGNALR_SEND_MESSAGE } from "./store/chat/types";

const connection = new HubConnectionBuilder()
  .withUrl("https://localhost:5001/chatHub")
  .configureLogging(LogLevel.Debug)
  .build();

export function signalRInvokeMiddleware(store: any) {
  return (next: any) => async (action: any) => {
    switch (action.type) {
      case SIGNALR_SEND_MESSAGE:
        connection.invoke(
          "sendMessage",
          action.payload.user,
          action.payload.message,
          action.payload.timestamp.toString()
        );
        store.dispatch(actions.messageSent(action.payload));
        break;
    }

    return next(action);
  };
}

export function signalRRegisterCommands(store: any, callback: Function) {
  connection.on("ReceiveMessage", (user, message, timestamp) => {
    timestamp = +timestamp;
    store.dispatch(
      actions.receiveMessage({
        user,
        message,
        timestamp
      })
    );
    console.log("Message has been sent");
  });

  connection.start().then(callback());
}
