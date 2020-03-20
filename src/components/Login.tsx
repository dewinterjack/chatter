import * as actions from "../store/system/actions";
import { RootState } from "../store/index";
import { connect } from "react-redux";
import React from "react";
import { Button } from "reactstrap";

function Login(props: any) {
  return (
    <div style={{ marginTop: "10%" }}>
      <Button onClick={() => props.login("guest")}>Login as guest</Button>
      <br />
      <p>Users online: {props.usersOnline}</p>
    </div>
  );
}

const mapDispatch = (dispatch: any) => ({
  login: (username: string) => dispatch(actions.login(username))
});

const mapState = (state: RootState) => ({
  usersOnline: state.system.usersOnline
});

export default connect(mapState, mapDispatch)(Login);
