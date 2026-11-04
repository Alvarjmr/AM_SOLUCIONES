import { CATEGORIAS, CATALOGO, cop } from "../data";

export default function Servicios({ go, toast }) {
  const quote = i => {
    const [n, min, max] = CATALOGO[i];
    let cur = [];
    try { cur = JSON.parse(localStorage.getItem("am_items")) || []; } catch (e) {}
    cur.push({ n, min, max, precio: Math.round((min + max) / 2), cant: 1 });
    try { localStorage.setItem("am_items", JSON.stringify(cur)); } catch (e) {}
    toast("Agregado a la cotización");
    go("cotizador");
  };
  return (
    <div>
      <p className="muted" style={{ marginTop: 0 }}>Redes · Infraestructura · Automatización · IoT. Elige un servicio para llevarlo a la cotización.</p>
      <div className="cats">
        {CATEGORIAS.map(c => (
          <section className="cat" key={c.t}>
            <h2>{c.t}</h2>
            <p>{c.d}</p>
            <ul>{c.l.map(x => <li key={x}>{x}</li>)}</ul>
            <div className="svcs">
              {c.s.map(i => (
                <div className="svc" key={i}>
                  <div>{CATALOGO[i][0]}<small>{cop(CATALOGO[i][1])}{CATALOGO[i][2] !== CATALOGO[i][1] ? "–" + cop(CATALOGO[i][2]) : ""}</small></div>
                  <button className="btn ghost sm" onClick={() => quote(i)}>Cotizar</button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
