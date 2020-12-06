import React from "react";

function List(props) {
  return (
    <li className="item">
      <input type="checkbox" onChange={() => props.onClick()} />
      {props.value}
    </li>
  );
}

function NewItem(props) {
  return (
    <div>
      <input
        type="text"
        value={props.input}
        onChange={(event) => props.onClick(event)}
        placeholder="Add Task"
      />

      <button type="submit" name="list" onClick={() => props.onAdd()}>
        +
      </button>
    </div>
  );
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      input: ""
    };
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  addNewItem() {
    this.setState((state) => ({
      tasks: [...state.tasks, state.input],
      input: " "
    }));
  }

  deleteItem(task) {
    console.log(this.state.tasks.filter((item) => item !== task));
    this.setState((state) => ({
      tasks: this.state.tasks.filter((item) => item !== task)
    }));
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.tasks.map((task) => (
            <List value={task} onClick={() => this.deleteItem(task)} />
          ))}
        </ul>

        <NewItem
          value={this.input}
          onClick={(event) => this.handleChange(event)}
          onAdd={() => this.addNewItem()}
        />
      </div>
    );
  }
}

export default TodoList;
