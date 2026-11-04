import { useState, useEffect } from "react";
import { CONFIG, waLink } from "../config";
import { OPCIONES_SERVICIO } from "./content";
import { Icon, WaButton, Redes } from "./shared";

const VACIO = { nombre: "", empresa: "", correo: "", telefono: "", servicio: "", descripcion: "" };
const texto = f => `Hola, soy ${f.nombre}${f.empresa ? " de " + f.empresa : ""}. Quiero cotizar: ${f.servicio}.\n\n${f.descripcion}\n\nCorreo: ${f.correo}${f.telefono ? "\nTeléfono: " + f.telefono : ""}`;

const MSG = {
  ok: "¡Gracias! Recibimos tu solicitud y te contactaremos pronto.",
  wa: "Se abrió WhatsApp con tu solicitud. Envía el mensaje para completar el contacto.",
  mail: "Se abrió tu programa de correo con la solicitud lista para enviar.",
  error: "No pudimos enviar la solicitud. Inténtalo de nuevo o escríbenos por WhatsApp.",
};

export default function Contacto() {
  const [f, setF] = useState(VACIO);
  const [estado, setEstado] = useState("");
  const set = k => e => setF({ ...f, [k]: e.target.value });

  useEffect(() => {
    const h = e => setF(s => ({ ...s, servicio: e.detail }));
    window.addEventListener("am:servicio", h);
    return () => window.removeEventListener("am:servicio", h);
  }, []);

  async function enviar(e) {
    e.preventDefault();
    const t = texto(f);
    if (CONFIG.formEndpoint) {
      setEstado("enviando");
      try {
        const r = await fetch(CONFIG.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ ...f, mensaje: t }) });
        if (r.ok) { setEstado("ok"); setF(VACIO); } else setEstado("error");
      } catch { setEstado("error"); }
      return;
    }
    const wa = waLink(t);
    if (wa) { window.open(wa, "_blank", "noopener"); setEstado("wa"); return; }
    if (CONFIG.email) {
      window.location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Solicitud de cotización: " + f.servicio)}&body=${encodeURIComponent(t)}`;
      setEstado("mail"); return;
    }
    setEstado("pendiente");
  }

  const dato = (icon, label, valor, href) => (
    <li><Icon n={icon} size={18} /> <span><strong>{label}:</strong> {valor ? (href ? <a href={href}>{valor}</a> : valor) : <em className="s-muted">por completar</em>}</span></li>
  );

  return (
    <section id="contacto" className="s-sec">
      <div className="s-wrap s-contact">
        <div>
          <p className="s-kicker">Contacto y cotizaciones</p>
          <h2>Cuéntanos qué necesita tu empresa</h2>
          <p className="s-sub">Describe tu requerimiento y te presentamos una propuesta con alcance, precio y cronograma.</p>
          <ul className="s-info">
            <li><Icon n="pin" size={18} /> <span><strong>Cobertura:</strong> Medellín y área metropolitana</span></li>
            {dato("whatsapp", "WhatsApp", CONFIG.whatsapp && "+" + CONFIG.whatsapp, waLink())}
            {dato("mail", "Correo", CONFIG.email, CONFIG.email && "mailto:" + CONFIG.email)}
            {dato("headset", "Teléfono", CONFIG.telefono, CONFIG.telefono && "tel:" + CONFIG.telefono)}
            {dato("pin", "Dirección", CONFIG.direccion)}
          </ul>
          <WaButton />
          <div style={{ marginTop: 14 }}><Redes /></div>
        </div>
        <form className="s-form" onSubmit={enviar}>
          <div className="s-row">
            <label>Nombre del cliente *<input required value={f.nombre} onChange={set("nombre")} autoComplete="name" /></label>
            <label>Empresa<input value={f.empresa} onChange={set("empresa")} autoComplete="organization" /></label>
          </div>
          <div className="s-row">
            <label>Correo electrónico *<input required type="email" value={f.correo} onChange={set("correo")} autoComplete="email" /></label>
            <label>Número de teléfono<input type="tel" value={f.telefono} onChange={set("telefono")} autoComplete="tel" /></label>
          </div>
          <label>Servicio que necesita *
            <select required value={f.servicio} onChange={set("servicio")}>
              <option value="">Selecciona una opción</option>
              {OPCIONES_SERVICIO.map(o => <option key={o}>{o}</option>)}
            </select>
          </label>
          <label>Descripción del requerimiento *<textarea required rows="5" value={f.descripcion} onChange={set("descripcion")} /></label>
          <button className="s-btn" type="submit" disabled={estado === "enviando"}>{estado === "enviando" ? "Enviando…" : "Solicitar cotización"}</button>
          {MSG[estado] && <p className={"s-status" + (estado === "error" ? " err" : "")} role="status">{MSG[estado]}</p>}
          {estado === "pendiente" && (
            <div className="s-status" role="status">
              <p>Aún no hay un canal de recepción configurado (WhatsApp, correo o servicio de formularios). Completa los datos en <code>src/config.js</code>. Mientras tanto, copia tu solicitud:</p>
              <textarea readOnly rows="5" value={texto(f)} onFocus={e => e.target.select()} />
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
