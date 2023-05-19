import { combineReducers } from 'redux';
import { todoAppReducer } from './todo-app.reducer';

const rootReducer = combineReducers({
  todoList: todoAppReducer,
});

export default rootReducer;
