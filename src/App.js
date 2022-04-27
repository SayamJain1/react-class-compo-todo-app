import React, { Component } from "react";
import Header from "./component/Header";
import Input from "./component/Input";
import Table from "./component/Table";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "Sayam",
      todoItems: [
        { action: "Buy milk", done: false },
        { action: "Dentise at 5pm", done: false },
        { action: "Goto walk", done: false },
      ],
      newTodo: "",
    };
  }

  toggleDone = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map((item) => {
        console.log(!item.done);
        return item.action === todo.action
          ? { ...item, done: !item.done }
          : item;
      }),
    });
  };

  addItem = () => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { action: this.state.newTodo, done: false },
      ],
      newTodo: "",
    });
  };

  updateValue = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  todoRows = () => {
    return this.state.todoItems.map((item) => (
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input
            type="checkbox"
            checked={item.done}
            onChange={() => this.toggleDone(item)}
          ></input>
        </td>
      </tr>
    ));
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <Header userName={this.state.userName} />
          <div className="col-12">
            <Input
              value={this.state.newTodo}
              changeHandler={this.updateValue}
            />
            <button className="btn btn-secondary" onClick={this.addItem}>
              Add to list
            </button>
            <Table rows={this.todoRows()} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
