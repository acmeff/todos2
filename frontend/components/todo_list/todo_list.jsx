import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const { props } = this;
    return(
    <div>
      <ul>
      {
        props.todos.map((todo, idx) => <TodoListItem patchTodo={ props.patchTodo } key={idx} todo={todo} deleteTodo={ props.deleteTodo } receiveTodo={ props.receiveTodo }/>)
      }
      </ul>
      <TodoForm createTodo={ props.createTodo } errors={ props.errors }/>
    </div>);
  }
}

export default TodoList;
