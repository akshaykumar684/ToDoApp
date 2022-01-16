import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import ToDoList from "./Component/ToDoList";
import TaskModalForm from "./Component/TaskModalForm";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { toDoActions } from "./store/task-state";
import taskAction from "./store/taskAction";
import { toastAction } from "./store/toast-state";
import Toasts from "./Component/UI/Toast";
import axiosFetch from "./axios/axios-config";
import AppMessage from "./Common/AppMessage";
import "./App.css";
const App = () => {
  const toastData = useSelector((state) => state.toastStates);

  const dispatch = useDispatch();
  const addTaskHandler = () => {
    dispatch(
      toDoActions.showModal({ action: taskAction.create, selectedTask: null })
    );
  };

  useEffect(() => {
    axiosFetch
      .get(`/ToDoTask`)
      .then((res) => {
        dispatch(toDoActions.initializeTasks(res.data));
        dispatch(
          toastAction.showToast({
            isOperationSucessfull: true,
            msg: AppMessage.DataFetchSuccessful,
          })
        );
      })
      .catch((err) => {
        console.log(err);
        dispatch(
          toastAction.showToast({
            isOperationSucessfull: false,
            msg: AppMessage.DataFetchError,
          })
        );
      });
  }, [dispatch]);

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
      <div className="buttonContainer">
        <Button
          variant="primary"
          style={{ margin: "1em" }}
          onClick={addTaskHandler}
        >
          Add
        </Button>
      </div>
    </div>
  );
};

export default App;
