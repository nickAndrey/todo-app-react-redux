import React from 'react';
import './todo-app-list.css';
import { useSelector } from 'react-redux';
import TodoAppListItem from './todo-app-list-item/todo-app-list-item';

function TodoAppList() {
  const todoList = useSelector((state) => state.todoList);

  return (
    <>
      <h4>Todos: {todoList.length}</h4>
      <ul className="todo-list">
        {todoList.map((item, idx) => (
          <TodoAppListItem
            key={idx}
            completed={item.completed}
            editable={item.editable}
            id={item.id}
            content={item.content}
          />
        ))}
      </ul>
    </>
  );
}
export default TodoAppList;
