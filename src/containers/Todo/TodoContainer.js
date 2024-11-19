import { Component } from "react";
import "./Todo.css";
import TodoInputComponent from "../../components/TodoInput/InputComponent";
import TodoListComponent from "../../components/TodoList/ListComponent";

class TodosComponent extends Component {
  state = {
    todos: [
      {
        id: "1",
        content: "My first todo!!!!",
        completed: false,
      },
    ],
    key: 1,
  };

  componentDidUpdate() {
    localStorage.setItem("todos", JSON.stringify(this.state.todos));
  }

  componentDidMount() {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      this.setState({
        todos: todos,
      });
    }
  }

  newTodoHandler = (input) => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: this.state.key + 1,
          content: input,
          completed: false,
        },
      ],
      key: this.state.key + 1,
    });
  };

  deleteTodoHandler = (id) => {
    let todosIndex = this.state.todos.findIndex((todo) => todo.id === id);
    let todos = [...this.state.todos];
    todos.splice(todosIndex, 1);
    this.setState({
      todos: todos,
    });
  };

  completeTodoHandler = (id) => {
    let todosIndex = this.state.todos.findIndex((todo) => todo.id === id);
    let todos = [...this.state.todos];
    todos[todosIndex].completed = !todos[todosIndex].completed;
    this.setState({
      todos: todos,
    });
  };

  render() {
    return (
      <div className="todoContainer">
        <TodoInputComponent newElem={(input) => this.newTodoHandler(input)} />
        <TodoListComponent
          delete={this.deleteTodoHandler}
          complete={this.completeTodoHandler}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default TodosComponent;
