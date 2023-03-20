import { useState } from "react";
import { RenderDashboard } from "./components/RenderDashboard";
import "./App.css";
import { RenderPageHome } from "./components/RenderHomePage";

function App() {
  const [inPage, setInPage] = useState(true);

  return (
    <main className="main">
      {inPage ? (
        <div className="home">
          <RenderPageHome setInPage={setInPage} />
        </div>
      ) : (
        <div className="dashboard">
          <RenderDashboard setInPage={setInPage} />
        </div>
      )}
    </main>
  );
}

export default App;
