export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const IS_EDIT_TODO = 'IS_EDIT_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

let initialId = 0;
export function addTodo(content) {
  return {
    type: ADD_TODO,
    payload: {
      id: ++initialId,
      content: content,
    },
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: {
      id: id,
    },
  };
}

export function setTodoEditable(id) {
  return {
    type: IS_EDIT_TODO,
    payload: {
      id: id,
    },
  };
}

export function editTodo(id, content) {
  return {
    type: EDIT_TODO,
    payload: {
      id: id,
      content: content,
    },
  };
}

export function completeTodo(id) {
  return {
    type: COMPLETE_TODO,
    payload: {
      id: id,
    },
  };
}
