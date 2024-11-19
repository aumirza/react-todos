const todoList = (props) => (
    <ul>
        {props.todos.map(todo => <li key={todo.id} >{todo.content}<span onClick={() => props.delete(todo.id)} className="close">{"\u00D7"}</span></li>)}
    </ul>
)

export default todoList;