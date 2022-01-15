import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ToDoList from "./Component/ToDoList";
const App = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1> Task Lists</h1>
            <ToDoList />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default App;
