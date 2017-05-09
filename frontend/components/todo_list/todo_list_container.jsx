import { connect } from 'react-redux'; //🦆
import TodoList from './todo_list';
import { deleteTodo, fetchTodos, createTodo, patchTodo } from '../../actions/todo_actions';
import {allTodos} from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  todos: allTodos(state),
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: (todo) => dispatch(createTodo(todo)),
  deleteTodo: (todo) => dispatch(deleteTodo(todo)),
  patchTodo: (todo) => dispatch(patchTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
