import * as actions from "../store/chat/actions";
import { RootState } from "../store/index";
import { connect } from "react-redux";
import React from "react";

const Chat = () => <h1>Chat</h1>;

const mapDispatch = {
  sendMessage: () => ({ type: "SEND_MESSAGE" })
};

const mapState = (state: RootState) => ({
  messages: state.messages
});

export default connect(mapState, mapDispatch)(Chat);
