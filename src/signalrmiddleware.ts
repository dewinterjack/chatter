import { HubConnectionBuilder } from "@microsoft/signalr";
import * as actions from "./store/chat/actions";
import {
  SEND_MESSAGE,
  Message,
  SIGNALR_SEND_MESSAGE
} from "./store/chat/types";

const connection = new HubConnectionBuilder()
  .withUrl("https://localhost:5001/chatHub")
  .build();

export function signalRInvokeMiddleware(store: any) {
  return (next: any) => async (action: any) => {
    switch (action.type) {
      case SIGNALR_SEND_MESSAGE:
        connection.invoke(
          "sendMessage",
          action.payload.user,
          action.payload.message
        );
        store.dispatch(actions.signalRSendMessage(action.payload));
        break;
    }

    return next(action);
  };
}

export function signalRRegisterCommands(store: any, callback: Function) {
  connection.on("ReceiveMessage", data => {
    // store.dispatch(
    //   actions.receiveMessage({
    //     user: data.user,
    //     message: data.message,
    //     timestamp: Date.now()
    //   })
    // );
    console.log("Message has been sent");
  });

  connection.on("DecrementCounter", data => {
    store.dispatch({ type: "DECREMENT_COUNT" });
    console.log("Count has been decremented");
  });

  connection.start().then(callback());
}
