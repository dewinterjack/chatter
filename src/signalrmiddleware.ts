import { HubConnectionBuilder, LogLevel } from "@microsoft/signalr";
import * as chatActions from "./store/chat/actions";
import * as systemActions from "./store/system/actions";
import { SIGNALR_SEND_MESSAGE } from "./store/chat/types";

const connection = new HubConnectionBuilder()
  .withUrl("https://chatterapi-dev-as.azurewebsites.net/chatHub")
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
        store.dispatch(chatActions.messageSent(action.payload));
        break;
    }

    return next(action);
  };
}

export function signalRRegisterCommands(store: any, callback: Function) {
  connection.on("ReceiveMessage", (user, message, timestamp) => {
    timestamp = +timestamp;
    store.dispatch(
      chatActions.receiveMessage({
        user,
        message,
        timestamp
      })
    );
  });

  connection.on("ConnectionCountChanged", (connectionCount: number) => {
    store.dispatch(systemActions.connectionCountChanged(connectionCount));
  });

  connection.start().then(callback());
}
