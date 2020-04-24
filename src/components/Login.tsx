import * as actions from "../store/system/actions";
import { RootState } from "../store/index";
import { connect } from "react-redux";
import React from "react";
import { Button } from "reactstrap";
import * as NetlifyIdentityWidget from "netlify-identity-widget";

function Login(props: any) {
  return (
    <div style={{ marginTop: "10%" }}>
      <Button onClick={() => NetlifyIdentityWidget.open()}>Login</Button>
      <br />
    </div>
  );
}

const mapDispatch = (dispatch: any) => ({
  login: (name: string) => dispatch(actions.login(name))
});

const mapState = (state: RootState) => ({
  usersOnline: state.system.usersOnline
});

export default connect(mapState, mapDispatch)(Login);
