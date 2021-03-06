import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toDoActions } from "../store/task-state";
import taskAction from "../store/taskAction";
import axiosFetch from "../axios/axios-config";
import { toastAction } from "../store/toast-state";
import AppMessage from "../Common/AppMessage";
const ToDoItem = (props) => {
  const { id, name, remarks } = props;
  const dispatch = useDispatch();
  const editTaskHandler = () => {
    dispatch(
      toDoActions.showModal({ action: taskAction.update, selectedTask: props })
    );
  };
  const deleteTaskHandler = () => {
    axiosFetch
      .delete(`/ToDoTask/${id}`)
      .then((res) => {
        if (res.status === 204) {
          dispatch(toDoActions.deleteTask(props));
          dispatch(
            toastAction.showToast({
              isOperationSucessfull: true,
              msg: AppMessage.TaskDeleteMsg,
            })
          );
        } else {
          dispatch(
            toastAction.showToast({
              isOperationSucessfull: false,
              msg: AppMessage.TaskDeleteErrorMsg,
            })
          );
        }
      })
      .catch((err) => {
        dispatch(
          toastAction.showToast({
            isOperationSucessfull: false,
            msg: AppMessage.TaskDeleteErrorMsg,
          })
        );
      });
  };
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{remarks}</td>
      <td>
        <Button
          variant="primary"
          style={{ margin: "1em" }}
          onClick={editTaskHandler}
        >
          Edit
        </Button>
        <Button variant="danger" onClick={deleteTaskHandler}>
          Delete
        </Button>
      </td>
    </tr>
  );
};

export default ToDoItem;
