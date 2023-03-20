import { TodoPrice } from "../Price";
import { TodoCard } from "./TodoCard";
import NoCard from "../../assets/NoCard.svg";
import "./style.css";

export function TodoPage({ todoList, removeTodoFromTodoList }) {
  localStorage.setItem("@nukenzie:value", JSON.stringify(todoList));
  return (
    <section className="containner">
      <h2>Resumo Financeiro</h2>
      <div>
        <ul>
          {todoList.length > 0 ? (
            <>
              {todoList.map((todo, index) => (
                <>
                  <TodoCard
                    key={index + 1}
                    todo={todo}
                    removeTodoFromTodoList={removeTodoFromTodoList}
                  />
                </>
              ))}
            </>
          ) : (
            <div className="noCard">
              <h1>Você ainda não possui nenhum lançamento</h1>
              <img src={NoCard} alt="" />
            </div>
          )}
        </ul>
      </div>
    </section>
  );
}
