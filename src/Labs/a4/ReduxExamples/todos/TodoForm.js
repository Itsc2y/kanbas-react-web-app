import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

function TodoForm() {
  const { todo } = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item" style={{width:500}}>
      <div className="row">
        <div className="col">
          <input
            value={todo.title}
            onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
            className="form-control"
          />
        </div>
        <div className="col">
          <button className="btn btn-success float-end" onClick={() => dispatch(addTodo(todo))}> Add </button>
          <button className="btn btn-warning float-end me-2" onClick={() => dispatch(updateTodo(todo))}> Update </button>
        </div>
      </div>
    </li>
  );
}
export default TodoForm;