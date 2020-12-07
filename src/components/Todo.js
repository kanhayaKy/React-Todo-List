import React from "react";

function List(props) {
  return (
    <li className="item">
      <input type="checkbox" checked={false} onChange={() => props.onClick()} />
      {props.value}
    </li>
  );
}

function NewItem(props) {
  return (
    <div>
      <input
        type="text"
        value={props.value}
        onChange={(event) => props.onClick(event)}
        placeholder="Add Task"
      />

      <button type="submit" name="list" onClick={props.onAdd}>
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
      input: ""
    }));
  }

  deleteItem(index) {
    this.setState((state) => {
      const tasks = [...this.state.tasks];
      tasks.splice(index, 1);
      return {
        tasks: tasks
      };
    });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.tasks.map((task, i) => (
            <List value={task} onClick={() => this.deleteItem(i)} key={i} />
          ))}
        </ul>

        <NewItem
          value={this.state.input}
          onClick={(event) => this.handleChange(event)}
          onAdd={() => this.addNewItem()}
        />
      </div>
    );
  }
}

export default TodoList;
