import React from "react";
import "./todo-app-list-item.css";
import { useDispatch } from "react-redux";
import {
  completeTodo,
  deleteTodo,
  setTodoEditable,
} from "../../../store/actions/todo-app.actions";
import { FiEdit, FiTrash } from "react-icons/fi";
import EditBoxComponent from "../../edit-box/edit-box.component";
import TooltipComponent from "../../tooltip/tooltip.component";

function TodoAppListItem(props) {
  const { editable, completed, id, content } = props;
  const dispatch = useDispatch();

  const renderItem = () => {
    switch (true) {
      case completed && !editable:
        return <del>{content}</del>;
      case editable && !completed:
        return <EditBoxComponent content={content} id={id} />;
      default:
        return content;
    }
  };

  return (
    <li className="todo-list__item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(completeTodo(id))}
      />
      <div
        style={{
          textOverflow: "ellipsis",
          overflow: editable ? "" : "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {renderItem()}
      </div>
      <TooltipComponent title={"edit"} position={"top"}>
        <button
          className="ui-button"
          onClick={() => dispatch(setTodoEditable(id))}
        >
          <FiEdit />
        </button>
      </TooltipComponent>
      <TooltipComponent title={"delete"} position={"top"}>
        <button className="ui-button" onClick={() => dispatch(deleteTodo(id))}>
          <FiTrash />
        </button>
      </TooltipComponent>
    </li>
  );
}

export default TodoAppListItem;
