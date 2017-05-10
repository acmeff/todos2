import React from 'react';
import {uniqueId} from '../../util/utils';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false,
      tag_names: [],
      tag_field: ''
    };
    this.timesAChangin = this.timesAChangin.bind(this);
    this.buttonPresser = this.buttonPresser.bind(this);
    this.tagHandler = this.tagHandler.bind(this);
    this.tagSubmitter = this.tagSubmitter.bind(this);
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

  tagHandler(event){
    this.setState({tag_field: event.target.value});
  }

  tagSubmitter(event){
    event.preventDefault();
    this.state.tag_names = this.state.tag_names.concat(this.state.tag_field);
    this.setState(this.state);
  }

  buttonPresser (event) {
    event.preventDefault();
    this.props.createTodo(this.state).then(this.setState({title: "", body: ""}));
  }

  render() {
    return(
      <form>
        <ul>
          {
            this.props.errors.map((error, idx) => <li key={idx}>{error}</li>)
          }
        </ul>
        <ul>
          {
            this.state.tag_names.map((tagName, idx) => <li key={idx}>{tagName}</li>)
          }
        </ul>
        <input onChange={this.timesAChangin} type="text" name="title" value={this.state.title} placeholder="title"></input>
        <input onChange={this.timesAChangin} type="text" name="body" value={this.state.body} placeholder="body"></input>
        <br/>
        <input onChange={this.tagHandler} type="text" name="tag_names" value={this.state.tag_field} placeholder="tags"></input>
        <button onClick={this.tagSubmitter}>Submit Tag</button>

        <br/>
        <button type="submit" onClick={this.buttonPresser}>Add Todo Item</button>
      </form>
    );
  }
}

export default TodoForm;
