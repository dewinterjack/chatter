import React from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { RootState } from "./store/index";
import { connect } from "react-redux";
import Logout from "./components/Logout";

function App(props: any) {
  return (
    <div className="App">
      <Container>
        Users online: {props.usersOnline}
        <Row xs="3">
          <Col></Col>
          <Col>{ props.currentUser.name === "guest" && <Login />}<Chat/></Col>
  <Col>{ props.currentUser.name !== "guest" && <Logout />}</Col>
        </Row>
      </Container>
    </div>
  );
}

const mapState = (state: RootState) => ({
  currentUser: state.system.currentUser,
  usersOnline: state.system.usersOnline
});

export default connect(mapState, null)(App);
