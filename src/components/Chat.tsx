import * as actions from "../store/chat/actions";
import { RootState } from "../store/index";
import { connect } from "react-redux";
import React, { useState } from "react";

function Chat(props: any) {
  const [message, setMessage] = useState("");

  const messageList = () =>
    props.messages.map((message: any) => <li>{message.message}</li>);

  const handleChange = (e: any) => setMessage(e.currentTarget.value);
  return (
    <div>
      <h1>Chat</h1>
      <form>
        <input type="text" onChange={handleChange} />
        <input type="submit" value="Send" />
      </form>
      <p>{message}</p>
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
