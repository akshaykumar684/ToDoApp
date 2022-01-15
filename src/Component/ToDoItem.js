import { Button } from "react-bootstrap";

const ToDoItem = (props) => {
  const { id, name, remarks } = props;
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{remarks}</td>
      <td>
        <Button variant="primary" style={{ margin: "1em" }}>
          Edit
        </Button>
        <Button variant="danger">Delete</Button>
      </td>
    </tr>
  );
};

export default ToDoItem;
