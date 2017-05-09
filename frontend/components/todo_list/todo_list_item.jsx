import React from 'react';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    const {todo} = this.props;
    this.state = {
      id: todo.id,
      body: todo.body,
      title: todo.title,
      done: todo.done
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.buttonText = this.buttonText.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
  }

  handleDelete(evernt) {
    evernt.preventDefault();
    this.props.removeTodo(this.props.todo);
  }

  updateTodo(event) {
    event.preventDefault();
    this.props.receiveTodo({
          id: this.props.todo.id,
          body: this.props.todo.body,
          title: this.props.todo.title,
          done: !this.props.todo.done
        });
  }

  buttonText() {
    if (this.props.todo.done) {
      return "Undo";
    } else {
      return "Done";
    }
  }

  render() {
    return (
      <li>{this.props.todo.title}<button onClick={this.updateTodo}>{this.buttonText()}</button><button onClick={this.handleDelete}>Remove</button></li>
    );
  }
}

export default TodoListItem;
