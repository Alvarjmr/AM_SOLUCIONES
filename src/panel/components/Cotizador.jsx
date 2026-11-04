import { useState } from "react";
import { usePersist } from "../hooks";
import { CATALOGO, cop } from "../data";

export default function Cotizador({ toast }) {
  const [cli, setCli] = usePersist("am_cli", { nombre: "", contacto: "", sede: "" });
  const [items, setItems] = usePersist("am_items", []);
  const [anticipo, setAnticipo] = usePersist("am_anticipo", 50);
  const [sel, setSel] = useState(0);

  const add = () => {
    const [n, min, max] = CATALOGO[sel];
    setItems([...items, { n, min, max, precio: Math.round((min + max) / 2), cant: 1 }]);
  };
  const upd = (i, k, v) => setItems(items.map((it, j) => j === i ? { ...it, [k]: v } : it));
  const total = items.reduce((s, it) => s + it.precio * it.cant, 0);
  const ant = total * anticipo / 100;

  const copiar = () => {
    const t = ["COTIZACIÓN · AM Soluciones Tecnológicas",
      "Cliente: " + (cli.nombre || "—") + (cli.sede ? " (" + cli.sede + ")" : ""),
      "Contacto: " + (cli.contacto || "—"), "",
      ...items.map(it => "• " + it.n + " x" + it.cant + ": " + cop(it.precio * it.cant)), "",
      "Total: " + cop(total),
      "Anticipo (" + anticipo + "%): " + cop(ant),
      "Cambios de alcance se cotizan por separado. No incluye repuestos ni licencias."].join("\n");
    try { navigator.clipboard.writeText(t).then(() => toast("Cotización copiada"), () => toast("No se pudo copiar")); }
    catch (e) { toast("No se pudo copiar"); }
  };

  return (
    <div className="grid">
      <div className="panel">
        <h2>Cotización</h2>
        <div className="row">
          <label>Cliente<input value={cli.nombre} onChange={e => setCli({ ...cli, nombre: e.target.value })} /></label>
          <label>Sede<input value={cli.sede} onChange={e => setCli({ ...cli, sede: e.target.value })} /></label>
        </div>
        <label>Contacto (WhatsApp o correo)<input value={cli.contacto} onChange={e => setCli({ ...cli, contacto: e.target.value })} /></label>
        <div style={{ display: "flex", gap: 8, alignItems: "end", marginTop: 6 }}>
          <label style={{ flex: 1, margin: 0 }}>Servicio
            <select value={sel} onChange={e => setSel(+e.target.value)}>
              {CATALOGO.map((c, i) => <option key={i} value={i}>{c[0]}</option>)}
            </select>
          </label>
          <button className="btn" onClick={add}>Agregar</button>
        </div>
        <div style={{ marginTop: 12 }}>
          {items.length === 0 && <p className="muted">Agrega servicios del catálogo para armar la cotización.</p>}
          {items.map((it, i) => (
            <div className="line" key={i}>
              <div>{it.n}<small>Rango: {cop(it.min)}{it.max !== it.min ? "–" + cop(it.max) : ""}</small></div>
              <input type="number" min="0" step="10000" aria-label="Precio" value={it.precio} onChange={e => upd(i, "precio", +e.target.value || 0)} />
              <input type="number" min="1" aria-label="Cantidad" value={it.cant} onChange={e => upd(i, "cant", Math.max(1, +e.target.value || 1))} />
              <button className="x" aria-label="Quitar" onClick={() => setItems(items.filter((_, j) => j !== i))}>×</button>
            </div>
          ))}
        </div>
      </div>
      <div className="panel">
        <h2>Resumen</h2>
        <div className="tot"><span>Subtotal</span><span>{cop(total)}</span></div>
        <label>Anticipo (%)<input type="number" min="0" max="100" value={anticipo} onChange={e => setAnticipo(Math.min(100, Math.max(0, +e.target.value || 0)))} /></label>
        <div className="tot"><span>Anticipo a solicitar</span><span>{cop(ant)}</span></div>
        <div className="tot big"><span>Total</span><span>{cop(total)}</span></div>
        <p className="muted">No incluye repuestos ni licencias. Los cambios de alcance se cotizan por separado.</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button className="btn" onClick={copiar} disabled={!items.length}>Copiar cotización</button>
          <button className="btn ghost" onClick={() => setItems([])}>Vaciar</button>
        </div>
      </div>
    </div>
  );
}
