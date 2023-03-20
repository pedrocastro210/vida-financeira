import Illustration from "../../assets/Illustration.svg";
import Logo from "../../assets/logo.svg";
import "./style.css";

export function RenderPageHome({ setInPage }) {
  return (
    <>
      <section className="SectionOne">
        <div>
          <img src={Logo} alt="" />
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <button onClick={() => setInPage(false)}>Iniciar</button>
        </div>
      </section>
      <section className="SectionTwo">
        <img src={Illustration} alt="" />
      </section>
    </>
  );
}
