import * as actions from "../store/chat/actions";
import { RootState } from "../store/index";
import { connect } from "react-redux";
import React, { useState } from "react";
import { Message } from "../store/chat/types";

function Chat(props: any) {
  const [message, setMessage] = useState("");

  const messageList = () =>
    props.messages.map((message: Message) => (
      <li key={message.timestamp}>{message.message}</li>
    ));

  const handleChange = (e: any) => setMessage(e.currentTarget.value);
  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    props.sendMessage({ user: "", message, timestamp: Date.now() });
  };

  return (
    <div>
      <h1>Chat</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <input type="submit" value="Send" />
      </form>
      <div>{messageList()}</div>
    </div>
  );
}

const mapDispatch = (dispatch: any) => ({
  sendMessage: (message: any) => dispatch(actions.sendMessage(message))
});

const mapState = (state: RootState) => ({
  messages: state.messages
});

export default connect(mapState, mapDispatch)(Chat);
