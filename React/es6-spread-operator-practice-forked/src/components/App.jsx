import React, { useState } from "react";
import List from "./List";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  function handlerChange(e) {
    const newValue = e.target.value;
    setInputText(newValue);
  }
  function handlerClick() {
    setItems((prevValue) => {
      return [...prevValue, inputText];
    });
    setInputText("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handlerChange} value={inputText} gtype="text" />
        <button>
          <span onClick={handlerClick}>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((toDoItem) => (
            <List text={toDoItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
