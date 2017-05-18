import React, { Component } from 'react';
import AddTodo from "../containers/AddTodo";
import TodoList from "./TodoList";
import '../css/App.css';


class App extends Component {

  render() {

    return (
      <div className="App">
        <AddTodo /> <br />
        Show Todos: <br />
        <TodoList />
      </div>
    );
  }
}

export default App;
