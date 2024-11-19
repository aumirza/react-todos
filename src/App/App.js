import "./App.css";
import Todo from "../containers/Todo/TodoContainer";

const App = () => {
  return (
    <div className="App">
      <Todo />
      <footer>
        <p className="footerText">
          Made with ❤️ by
          <a href="ahmadullah.in" target="_blank">
            {" "}
            Aumirza
          </a>
        </p>
      </footer>
    </div>
  );
};

export default App;
