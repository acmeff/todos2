import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

const TodoList = (props) => {
  return(
    <div>
      <ul>
      {
        props.todos.map((todo, idx) => <TodoListItem key={idx} todo={todo} removeTodo={ props.removeTodo } receiveTodo={ props.receiveTodo }/>)
      }
      </ul>
      <TodoForm receiveTodo={ props.receiveTodo }/>
    </div>);

};

export default TodoList;
