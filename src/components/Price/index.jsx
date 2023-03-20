import "./style.css";

export function TodoPrice({ todoList }) {
  let arrayNumber = [0];

  todoList.forEach((todo) => {
    if (todo.tipo == "Saida") {
      arrayNumber.push(todo.valor * -1);
    } else {
      arrayNumber.push(todo.valor * 1);
    }
  });

  const total = arrayNumber.reduce((total, quantidade) => total + quantidade);

  return (
    <section className="price">
      <div>
        <h4>Valor total:</h4>
        <p>O valor se refere ao saldo</p>
      </div>
      <h4>{`R$: ${total}`}</h4>
    </section>
  );
}
