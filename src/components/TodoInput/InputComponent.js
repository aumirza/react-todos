import { useState } from "react";

const InputComponent = (props) => {
  const [inputState, setInputState] = useState("");

  const inputChangedHandler = (event) => {
    setInputState(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputState !== "") {
      props.newElem(inputState);
      e.target.reset();
      setInputState("");
    } else {
      alert("Please write something to add. ");
    }
  };
  return (
    <header id="myDIV" className="header">
      <div className="inputWrapper">
        <h2 className="appTitle">My To Do's List</h2>
        <form className="todoForm" onSubmit={submitHandler}>
          <input
            onChange={inputChangedHandler}
            type="text"
            name="addInput"
            className="addInput"
            placeholder="Title..."
          />
          <button type="submit" className="addBtn">
            Add
          </button>
        </form>
      </div>
    </header>
  );
};

export default InputComponent;
