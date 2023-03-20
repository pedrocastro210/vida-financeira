import { useState } from "react";
import { RenderForm } from "../Form";
import { TodoPage } from "../TodoList";
import { v4 as uuidv4 } from "uuid";
import Logo from "../../assets/logo.svg";
import "./style.css";
import { TodoPrice } from "../Price";

export function RenderDashboard({ setInPage }) {
  const myLocalStorage = localStorage.getItem("@nukenzie:value");
  const [todoList, setTodoList] = useState(
    myLocalStorage ? JSON.parse(myLocalStorage) : []
  );

  const addTodoToTodoList = (todo) => {
    const newTodo = { ...todo, id: uuidv4() };
    setTodoList([...todoList, newTodo]);
  };

  const removeTodoFromTodoList = (todoId) => {
    const newTodoList = todoList.filter((todo) => todo.id !== todoId);
    setTodoList(newTodoList);
  };

  let soma = [];

  todoList.map((todo) => soma.push(todo.valor));

  return (
    <>
      <div className="header">
        <img src={Logo} alt="" />
        <button onClick={() => setInPage(true)}>Início</button>
      </div>
      <div className="main">
        <div>
          <RenderForm addTodoToTodoList={addTodoToTodoList} />
          <TodoPrice todoList={todoList} />
        </div>
        <TodoPage
          todoList={todoList}
          removeTodoFromTodoList={removeTodoFromTodoList}
        />
      </div>
    </>
  );
}
