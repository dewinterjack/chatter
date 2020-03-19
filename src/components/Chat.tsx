import * as actions from "../store/chat/actions";
import { RootState } from "../store/index";
import { connect } from "react-redux";
import React from "react";

function Chat(props: any) {
  const messageList = () =>
    props.messages.map((message: any) => <li>{message.message}</li>);
  return (
    <div>
      <h1>Chat</h1>
      <form>
        <input type="text" />
        <input type="submit" value="Send" />
      </form>
      <div>{messageList()}</div>
    </div>
  );
}

const mapDispatch = {
  sendMessage: () => ({ type: "SEND_MESSAGE" })
};

const mapState = (state: RootState) => ({
  messages: state.messages
});

export default connect(mapState, mapDispatch)(Chat);
