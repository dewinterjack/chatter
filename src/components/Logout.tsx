import * as actions from "../store/system/actions";
import { RootState } from "../store/index";
import { connect } from "react-redux";
import React from "react";
import { Button } from "reactstrap";
import * as NetlifyIdentityWidget from "netlify-identity-widget";

function Logout(props: any) {
  return (
    <div>
      {props.username}
      <Button style={{ margin: 10 }} onClick={() => NetlifyIdentityWidget.logout()}>
        Logout
      </Button>
    </div>
  );
}

const mapDispatch = (dispatch: any) => ({
  logout: () => dispatch(actions.logout())
});

const mapState = (state: RootState) => ({
  username: state.system.currentUser.name
});

export default connect(mapState, mapDispatch)(Logout);
