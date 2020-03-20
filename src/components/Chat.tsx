import * as actions from "../store/chat/actions";
import { RootState } from "../store/index";
import { connect } from "react-redux";
import React, { useState } from "react";
import { Message } from "../store/chat/types";
import { Card, CardBody, CardText, CardFooter } from "reactstrap";

function Chat(props: any) {
  const [message, setMessage] = useState("");

  const messageList = () =>
    props.messages.map((message: Message) => (
      <div key={message.timestamp}>
        <br />
        <Card style={{ width: "75%", margin: "auto", textAlign: "start" }}>
          <CardBody>
            <CardText>{message.message}</CardText>
            <CardFooter style={{ fontSize: "x-small", padding: 0 }}>
              <div
                style={{
                  float: "right"
                }}
              >
                {new Date(message.timestamp).toLocaleTimeString()}
              </div>
              {props.currentUser.name}
            </CardFooter>
          </CardBody>
        </Card>
      </div>
    ));

  const handleChange = (e: any) => setMessage(e.currentTarget.value);

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    props.sendMessage({ user: "guest", message, timestamp: Date.now() });
    setMessage("");
  };

  return (
    <div>
      <h1>Chat</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={message} onChange={handleChange} />
        <input type="submit" value="Send" />
      </form>
      {messageList()}
    </div>
  );
}

const mapDispatch = (dispatch: any) => ({
  sendMessage: (message: any) => dispatch(actions.sendMessage(message))
});

const mapState = (state: RootState) => ({
  messages: state.chat.messages,
  currentUser: state.system.currentUser
});

export default connect(mapState, mapDispatch)(Chat);
