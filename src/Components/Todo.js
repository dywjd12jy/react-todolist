import React from "react";
import "../style/Todo.css";
import TodoList from "./TodoList";

function Todo() {
    return (
        <div className="todo-wrap">
            <h2>To do</h2>
            <TodoList />

        </ div>
    );
}

export default Todo;