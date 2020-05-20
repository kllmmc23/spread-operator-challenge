import React, { useState } from "react";

function App() {
  const [textInput, setTextInput] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    setTextInput(event.target.value);
  }
  function handleClick() {
    setItems((prevItems) => [...prevItems, textInput]);
    setTextInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={textInput} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((lItems) => (
            <li>{lItems}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
