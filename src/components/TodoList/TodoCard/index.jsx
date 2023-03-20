import React, { useState } from "react";
import trash from "../../../assets/trash.png";

export const TodoCard = ({ todo, removeTodoFromTodoList }) => {
  const [data, setData] = useState(todo);

  if (data.tipo == "Entrada") {
  }

  const remove = () => {
    removeTodoFromTodoList(todo.id);
  };

  return (
    <>
      {data.tipo == "Entrada" ? (
        <li className="card" id="entrada">
          <div className="title">
            <h3>{data.description}</h3>
            <p>{data.tipo}</p>
          </div>
          <p>{`R$: ${data.valor}`}</p>
          <button onClick={() => remove()}>
            <img src={trash} alt="" />
          </button>
        </li>
      ) : (
        <li className="card" id="saida">
          <div className="title">
            <h3>{data.description}</h3>
            <p>{data.tipo}</p>
          </div>
          <p>{`R$: ${data.valor}`}</p>
          <button onClick={() => remove()}>
            <img src={trash} alt="" />
          </button>
        </li>
      )}
    </>
  );
};
