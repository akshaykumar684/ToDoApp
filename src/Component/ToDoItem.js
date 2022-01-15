import { Button } from "react-bootstrap";

const ToDoItem = (props) => {
  const { id, name, remarks } = props;
  const editTaskHandler = () => {
    console.log("task edited");
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
