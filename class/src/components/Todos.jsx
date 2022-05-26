import React, { useEffect } from "react";
import { useState } from "react";
const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newtodos, setnewTodos] = useState("");

  const saveInfo = () => {
    fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        value: newtodos,
        isCompleted: false,
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        setTodos([...todos, d]);
        setnewTodos("");
      });
  };

  useEffect(() => {
    fetch("http://localhost:8080/todos?_page=2&_limit=3")
      .then((r) => r.json())
      .then((d) => {
        setTodos(d);
      });
  }, []);
  return (
    <div>
      Todos
      <div>
        <div>
          <input
            value={newtodos}
            onChange={({ target }) => setnewTodos(target.value)}
          />
          <button onClick={saveInfo}>+</button>
        </div>
        {todos.map((todo) => (
          <div key={todos.id}>{todo.value}</div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
