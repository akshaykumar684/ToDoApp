import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { toDoActions } from "../store/task-state";
import { toastAction } from "../store/toast-state";
import taskAction from "../store/taskAction";

const TaskModalForm = () => {
  const [taskId, setTaskId] = useState(undefined);
  const [taskName, setTaskName] = useState("");
  const [taskRemarks, setTaskRemarks] = useState("");
  const dispatch = useDispatch();
  const show = useSelector((state) => state.toDoStates.showModal);
  const currentTaskAction = useSelector((state) => state.toDoStates.action);
  const selectedTask = useSelector((state) => state.toDoStates.selectedTask);

  const taskFormSubmitHandler = (event) => {
    event.preventDefault();

    if (currentTaskAction === taskAction.create) {
      const task = { id: Math.random(), name: taskName, remarks: taskRemarks };

      dispatch(toDoActions.addTask(task));
    } else {
      const task = { id: taskId, name: taskName, remarks: taskRemarks };
      dispatch(toDoActions.updateTask(task));
    }

    setTaskId(undefined);
    setTaskName("");
    setTaskRemarks("");

    dispatch(toDoActions.hideModal());
    dispatch(
      toastAction.showToast({
        isOperationSucessfull: true,
        msg: "Candidate Created Successfully",
      })
    );
  };

  const handleClose = () => {
    dispatch(toDoActions.hideModal());
  };
  const title =
    currentTaskAction === taskAction.create ? "Add Task" : "Edit Task";

  useEffect(() => {
    if (currentTaskAction === taskAction.update) {
      const { id, name, remarks } = selectedTask;
      setTaskId(id);
      setTaskName(name);
      setTaskRemarks(remarks);
    }
  }, [selectedTask, currentTaskAction]);

  const taskNameChangeHandler = (event) => {
    setTaskName(event.target.value);
  };

  const taskRemarksChangeHandler = (event) => {
    setTaskRemarks(event.target.value);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={taskFormSubmitHandler}>
          <Form.Group className="mb-3" controlId="formBasicTaskName">
            <Form.Label>Task Name</Form.Label>
            <Form.Control
              required
              type="text"
              value={taskName}
              onChange={taskNameChangeHandler}
              placeholder="Task name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicMobile">
            <Form.Label>Remarks</Form.Label>
            <Form.Control
              required
              type="text"
              value={taskRemarks}
              onChange={taskRemarksChangeHandler}
              placeholder="Remarks"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            {currentTaskAction}
          </Button>

          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ margin: "1em" }}
          >
            Close
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TaskModalForm;
