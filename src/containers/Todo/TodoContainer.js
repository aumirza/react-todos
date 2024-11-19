import { Component } from 'react';
import './Todo.css';
import TodoInputComponent from '../../components/TodoInput/InputComponent';
import TodoListComponent from '../../components/TodoList/ListComponent';


class TodosComponent extends Component {

  state = {
    todos: [
        {
        id:"1",
        content:"Hellow World"
      }
    ],
    key: 1
  }


  newTodoHandler = (input) => {
    this.setState(
      {
        todos : [
          ...this.state.todos,
          {
            id: this.state.key + 1,
            content: input
          }
        ],
        key : this.state.key + 1
      }  
    );
  }

    deleteTodoHandler = (id) => {
      let todosIndex = this.state.todos.findIndex(todo => todo.id === id);
      let todos = [...this.state.todos];
      todos.splice(todosIndex, 1);
      this.setState(
          {
            todos: todos
          }
        );
    }

    render() {
      return (
        <div className="Todo">
          <TodoInputComponent newElem={(input) => this.newTodoHandler(input)} />
          <TodoListComponent delete={this.deleteTodoHandler} todos={this.state.todos} />
        </div>
      );
  }
}

export default TodosComponent;
