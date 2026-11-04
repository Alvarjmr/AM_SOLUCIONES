import { useState } from "react";
import logo from "../assets/logo.png";
import { CONFIG, waLink } from "../config";
import { Hero, Nosotros, Servicios, Portafolio, PorQue, Planes } from "./Sections";
import Contacto from "./Contacto";
import { Icon, Redes } from "./shared";

const MENU = [["inicio", "Inicio"], ["nosotros", "Nosotros"], ["servicios", "Servicios"], ["portafolio", "Portafolio"], ["planes", "Planes empresariales"], ["contacto", "Contacto"]];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="s-header">
      <div className="s-wrap s-bar">
        <a href="#inicio" className="s-brand" aria-label="AM Soluciones Tecnológicas, inicio">
          <img src={logo} alt="AM Soluciones Tecnológicas" height="52" />
        </a>
        <button className="s-burger" aria-label="Abrir menú" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /><span /></button>
        <nav className={"s-nav" + (open ? " open" : "")} aria-label="Principal">
          {MENU.map(([id, t]) => <a key={id} href={"#" + id} onClick={() => setOpen(false)}>{t}</a>)}
          <a className="s-btn s-btn-sm" href="#contacto" onClick={() => setOpen(false)}>Cotizar</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="s-footer">
      <div className="s-wrap s-foot">
        <div>
          <img className="s-flogo" src={logo} alt="AM Soluciones Tecnológicas" height="56" />
          <p>Tecnología, conectividad e innovación para tu empresa.</p>
          <p><Icon n="pin" size={16} /> Medellín y área metropolitana</p>
        </div>
        <nav aria-label="Pie de página">
          {MENU.map(([id, t]) => <a key={id} href={"#" + id}>{t}</a>)}
        </nav>
        <div>
          <p>{CONFIG.email || "Correo: por completar"}</p>
          <p>{CONFIG.whatsapp ? "WhatsApp: +" + CONFIG.whatsapp : "WhatsApp: por completar"}</p>
          <Redes />
        </div>
      </div>
      <p className="s-copy">© {new Date().getFullYear()} AM Soluciones Tecnológicas. Todos los derechos reservados.</p>
    </footer>
  );
}

export default function Site() {
  const wa = waLink();
  return (
    <div className="site">
      <Header />
      <main>
        <Hero /><Nosotros /><Servicios /><Portafolio /><PorQue /><Planes /><Contacto />
      </main>
      <Footer />
      <a className="s-float" href={wa || "#contacto"} {...(wa ? { target: "_blank", rel: "noopener noreferrer" } : {})} aria-label="Cotizar por WhatsApp">
        <Icon n="whatsapp" size={26} />
      </a>
    </div>
  );
}
