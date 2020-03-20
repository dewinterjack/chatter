import React from "react";
import "./App.css";
import { Container, Row, Col } from "reactstrap";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      <Container>
        <Row xs="3">
          <Col></Col>
          <Col>
            <Chat />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
