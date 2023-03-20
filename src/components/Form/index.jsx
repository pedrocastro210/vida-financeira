import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

export function RenderForm({ addTodoToTodoList }) {
  const [formData, setFormData] = useState({
    description: "",
    valor: "",
    tipo: "Entrada",
  });

  const submit = (event) => {
    event.preventDefault();
    if (formData.description !== "" && formData.valor !== "") {
      addTodoToTodoList(formData);
    } else {
      toast.warning("Preencha todos os campos");
    }

    setFormData({
      description: "",
      valor: "",
      tipo: "Entrada",
    });
  };

  return (
    <section className="sectionDashboard">
      <form onSubmit={submit}>
        <label htmlFor="description" className="labelDescription">
          Descrição
        </label>
        <input
          type="text"
          name="description"
          placeholder="Digite aqui sua descrição"
          className="description"
          value={formData.description}
          onChange={(event) =>
            setFormData({ ...formData, description: event.target.value })
          }
        />
        <span>Ex: Compra de roupas</span>
        <div className="inputs">
          <div className="inputValue">
            <label htmlFor="value">Valor</label>
            <input
              type="text"
              name="value"
              placeholder="R$"
              className="value"
              value={formData.valor}
              onChange={(event) =>
                setFormData({ ...formData, valor: event.target.value })
              }
            />
          </div>
          <div className="inputType">
            <label htmlFor="typeSelect">Tipo de valor</label>
            <select
              name="typeSelect"
              value={formData.tipo}
              onChange={(event) =>
                setFormData({ ...formData, tipo: event.target.value })
              }
            >
              <option value="Entrada">Entrada</option>
              <option value="Saida">Saída</option>
            </select>
          </div>
        </div>
        <button type="submit">Inserir valor</button>
      </form>
    </section>
  );
}
