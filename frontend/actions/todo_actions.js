import * as APIUtil from '../util/todo_api_util';
import { receiveErrors, clearErrors } from './errors_actions';

export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";


export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo
});

export const fetchTodos = () => (dispatch) => (
  APIUtil.getTodos().then(todos => dispatch(receiveTodos(todos)), todos => console.error(todos))
);

export const createTodo = (todo) => (dispatch) => (
  APIUtil.addTodo(todo).then(newTodo => dispatch(receiveTodo(newTodo)),
                             err => dispatch(receiveErrors(err.responseJSON)))
                        .then(() => dispatch(clearErrors()))
);

export const patchTodo = (todo) => (dispatch) => (
  APIUtil.updateTodo(todo).then(newTodo => dispatch(receiveTodo(newTodo)),
                             err => dispatch(receiveErrors(err.responseJSON)))
                          .then(() => dispatch(clearErrors()))
);

export const deleteTodo = (todo) => (dispatch) => (
  APIUtil.deleteTodo(todo).then(newTodo => dispatch(removeTodo(newTodo)),
                             err => dispatch(receiveErrors(err.responseJSON)))
                          .then(() => dispatch(clearErrors()))
);

window.removeTodo = removeTodo;
