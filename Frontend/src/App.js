import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ToDoList from "./Component/ToDoList";
import TaskModalForm from "./Component/TaskModalForm";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { toDoActions } from "./store/task-state";
import taskAction from "./store/taskAction";
import Toasts from "./Component/UI/Toast";
const App = () => {
  const toastData = useSelector((state) => state.toastStates);

  const dispatch = useDispatch();
  const addTaskHandler = () => {
    dispatch(
      toDoActions.showModal({ action: taskAction.create, selectedTask: null })
    );
  };
  return (
    <div>
      <Toasts Data={toastData} />

      <TaskModalForm />
      <Container>
        <Row>
          <Col>
            <h1> Task Lists</h1>
            <ToDoList />
          </Col>
        </Row>
      </Container>
      <Button
        variant="primary"
        style={{ margin: "1em" }}
        onClick={addTaskHandler}
      >
        Add
      </Button>
    </div>
  );
};

export default App;
