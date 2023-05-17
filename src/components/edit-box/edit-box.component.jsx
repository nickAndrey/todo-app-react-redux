import React, { useState } from 'react';
import { editTodo, setTodoEditable } from '../../store/actions/todo-app.actions';
import { FiSave } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import './edit-box.component.css';
import TooltipComponent from '../tooltip/tooltip.component';

function EditBoxComponent(props) {
  const { content, id } = props;
  const [value, setValue] = useState(content);
  const dispatch = useDispatch();

  return (
    <div className="editable-box" onClick={(e) => e.stopPropagation()}>
      <input
        className="editable-box__input"
        type="text"
        defaultValue={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={(e) =>
          e.keyCode === 13 ? dispatch(editTodo(id, value)) && dispatch(setTodoEditable(id)) : null
        }
      />
      <TooltipComponent title={'save'} position={'top'}>
        <button className="ui-button" onClick={() => dispatch(editTodo(id, value)) && dispatch(setTodoEditable(id))}>
          <FiSave />
        </button>
      </TooltipComponent>
    </div>
  );
}

export default EditBoxComponent;
