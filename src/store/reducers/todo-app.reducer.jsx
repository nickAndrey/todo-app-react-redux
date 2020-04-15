import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  IS_EDIT_TODO,
} from "../actions/todo-app.actions";

export function todoAppReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      const equals = state.filter(
        (item) => item.content === action.payload.content
      );
      if (!equals.length && action.payload.content) {
        return [
          ...state,
          {
            id: action.payload.id,
            content: action.payload.content,
            completed: false,
            editable: false,
          },
        ];
      }
      return state;
    case DELETE_TODO:
      return state.filter((item) => item.id !== action.payload.id);
    case IS_EDIT_TODO:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, editable: !item.editable }
          : item
      );
    case EDIT_TODO:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, content: action.payload.content }
          : item
      );
    case COMPLETE_TODO:
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, completed: !item.completed }
          : item
      );
    default:
      return state;
  }
}
