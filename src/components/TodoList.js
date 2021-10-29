import React from "react";

import Todo from "./Todo";

function TodoList({todoList, onCheckBtnClick}) {
  return (
    <>
      {todoList.map((todo) => (
        <Todo key={todo.id} todo={todo} onCheckBtnClick={onCheckBtnClick}/>
      ))}
    </>
  );
}

export default TodoList;
