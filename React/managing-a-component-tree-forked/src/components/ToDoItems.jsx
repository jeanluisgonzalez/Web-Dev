import React from "react";

function ToDoItems(props) {
  function handlerClik() {
    // state ? setState(false) : setState(true);
    // setState((prevValue) => {
    //   return !prevValue;
    // });
  }
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.item}</li>
    </div>
  );
}

export default ToDoItems;
