import { useState } from 'react';


const InputComponent = (props) => {

    const [inputState, setInputState] = useState("")

    const inputChangedHandler = (event) => {
        setInputState(event.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (inputState !== ""){
            props.newElem(inputState);
            e.target.reset();
            setInputState("");
        } else {
            alert("Please write something to add. ")
        }
    }
    return (
        <div id="myDIV" className="header">
            <h2>My To Do List</h2>
            <form onSubmit={submitHandler}>
                <input onChange={inputChangedHandler} type="text" name="addInput" placeholder="Title..." />
                <button type="submit" className="addBtn">Add</button>
            </form>
        </div>
    );
}

export default InputComponent;