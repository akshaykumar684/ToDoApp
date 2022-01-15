import ToDoItem from "./ToDoItem";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

const ToDoList = () => {
  const todoList = useSelector((state) => state.toDoStates.tasks);
  return (
    <Table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Remarks</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todoList.map((todoItem) => (
          <ToDoItem
            key={todoItem.id}
            id={todoItem.id}
            name={todoItem.name}
            remarks={todoItem.remarks}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default ToDoList;
