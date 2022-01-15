import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { toDoActions } from "../store/redux-store";
import taskAction from "../store/taskAction";

const ToDoItem = (props) => {
  const { id, name, remarks } = props;
  const dispatch = useDispatch();
  const editTaskHandler = () => {
    dispatch(
      toDoActions.showModal({ action: taskAction.update, selectedTask: props })
    );
  };
  const deleteTaskHandler = () => {
    console.log("task deleted");
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
