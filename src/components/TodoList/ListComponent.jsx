const todoList = (props) => (
  <div className="todosWrapper">
    <ul className="todos">
      {props.todos.map((todo) => (
        <li key={todo.id} className="todo">
          <div>
            <input
              className="complete-check"
              type="checkbox"
              onChange={() => props.complete(todo.id)}
              checked={todo.completed}
            />

            {todo.completed ? (
              <div className="completed">{todo.content}</div>
            ) : (
              <div>{todo.content}</div>
            )}
          </div>

          <div onClick={() => props.delete(todo.id)} className="close">
            {"\u00D7"}
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default todoList;
