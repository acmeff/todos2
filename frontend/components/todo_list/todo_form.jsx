import React from 'react';
import {uniqueId} from '../../util/utils';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uniqueId(),
      title: "",
      body: "",
      done: false
    };
    this.timesAChangin = this.timesAChangin.bind(this);
    this.buttonPresser = this.buttonPresser.bind(this);
  }

  timesAChangin(event){
    const inputVal = event.target.value;
    const inputKey = event.target.name;

    switch (inputKey) {
      case "title":
        this.setState({title: inputVal});
        break;
      case "body":
        this.setState({body: inputVal});
        break;
      default:
        console.error("This is not the key you're looking for");
    }
  }

  buttonPresser (event) {
    event.preventDefault();
    this.props.receiveTodo(this.state);
    this.setState({id: uniqueId(), title: "", body: ""});
  }

  render() {
    return(
      <form>
        <input onChange={this.timesAChangin} type="text" name="title" value={this.state.title}></input>
        <input onChange={this.timesAChangin} type="text" name="body" value={this.state.body}></input>

        <br/>
        <button type="submit" onClick={this.buttonPresser}>Add Todo Item</button>
      </form>
    );
  }
}

export default TodoForm;
