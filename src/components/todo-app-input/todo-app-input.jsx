import React, { useState } from 'react';
import './todo-app-input.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/actions/todo-app.actions';
import { FiPlus } from 'react-icons/fi';
import TooltipComponent from '../tooltip/tooltip.component';

function TodoAppInput() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const addToList = (e) => {
    dispatch(addTodo(value));
    e.target.value = '';
  };

  return (
    <div className={'pane'}>
      <span>Todo:</span>
      <textarea
        cols="1"
        rows="1"
        className="pane__textarea"
        placeholder="Make a note..."
        onKeyUp={(e) => {
          setValue(e.target.value);
          e.keyCode === 13 && addToList(e);
        }}
      />
      <TooltipComponent title={'add to list'} position={'top'}>
        <button type="button" className="ui-button" onClick={() => dispatch(addTodo(value))}>
          <FiPlus />
        </button>
      </TooltipComponent>
    </div>
  );
}

export default TodoAppInput;
