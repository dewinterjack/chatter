import React from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { RootState } from "./store/index";
import { connect } from "react-redux";
import Logout from "./components/Logout";

function App(props: any) {
  const mainContent = () => {
    if (props.currentUser.id === 0) {
      return <Login />;
    }
    return <Chat />;
  };

  return (
    <div className="App">
      <Container>
        Users online: {props.usersOnline}
        <Row xs="3">
          <Col></Col>
          <Col>{mainContent()}</Col>
  <Col>{ props.currentUser.id !== 0 && <Logout />}</Col>
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
