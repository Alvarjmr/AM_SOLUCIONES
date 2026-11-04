import logo from "../assets/logo.png";
import { useState } from "react";
import Servicios from "./components/Servicios";
import Cotizador from "./components/Cotizador";
import Planes from "./components/Planes";
import Ruta from "./components/Ruta";

export default function App() {
  const [tab, setTab] = useState("servicios");
  const [msg, setMsg] = useState("");
  const toast = m => { setMsg(m); setTimeout(() => setMsg(""), 2000); };
  const tabs = [["servicios", "Servicios"], ["cotizador", "Cotizador"], ["planes", "Planes y proyección"], ["ruta", "Ruta 90 días"]];
  return (
    <div className="wrap">
      <header>
        <div className="brand">
          <img className="logo" src={logo} alt="AM Soluciones Tecnológicas" />
          <div>
            <h1>Panel de operaciones</h1>
            <p>Medellín y área metropolitana · <a href="#inicio" style={{ color: "var(--accent)" }}>Volver al sitio web</a></p>
          </div>
        </div>
      </header>
      <nav role="tablist">
        {tabs.map(([id, t]) => <button key={id} role="tab" aria-selected={tab === id} onClick={() => setTab(id)}>{t}</button>)}
      </nav>
      {tab === "servicios" && <Servicios go={setTab} toast={toast} />}
      {tab === "cotizador" && <Cotizador toast={toast} />}
      {tab === "planes" && <Planes />}
      {tab === "ruta" && <Ruta />}
      {msg && <div className="toast" role="status">{msg}</div>}
    </div>
  );
}
