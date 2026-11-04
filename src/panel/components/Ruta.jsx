import { usePersist } from "../hooks";
import { RUTA, KPIS } from "../data";

export default function Ruta() {
  const [done, setDone] = usePersist("am_ruta", {});
  const [k, setK] = usePersist("am_kpi", {});
  const all = RUTA.flatMap(([f, ts]) => ts.map(t => f + t));
  const hechas = all.filter(x => done[x]).length;
  const pct = Math.round(hechas / all.length * 100);
  return (
    <div className="grid">
      <div className="panel">
        <h2>Hoja de ruta de 90 días</h2>
        <div className="bar" role="progressbar" aria-valuenow={pct} aria-valuemin="0" aria-valuemax="100"><i style={{ width: pct + "%" }} /></div>
        <p className="muted">{hechas} de {all.length} tareas · {pct}%</p>
        {RUTA.map(([f, ts]) => (
          <div className="phase" key={f}>
            <h3>{f}</h3>
            {ts.map(t => (
              <label className="chk" key={t} style={{ margin: 0, color: "var(--ink)", fontSize: 15 }}>
                <input type="checkbox" checked={!!done[f + t]} onChange={e => setDone({ ...done, [f + t]: e.target.checked })} />
                <span style={{ textDecoration: done[f + t] ? "line-through" : "none", opacity: done[f + t] ? .6 : 1 }}>{t}</span>
              </label>
            ))}
          </div>
        ))}
      </div>
      <div className="panel">
        <h2>Indicadores del mes</h2>
        {KPIS.map(([id, nombre, meta]) => {
          const v = k[id] || 0;
          return (
            <div className="kpi" key={id}>
              <span>{nombre}<span className="muted"> · meta {meta}</span></span>
              <span className="stepper" style={{ margin: 0 }}>
                <button aria-label="Menos" onClick={() => setK({ ...k, [id]: Math.max(0, v - 1) })}>−</button>
                <strong style={{ minWidth: 22, textAlign: "center" }}>{v}</strong>
                <button aria-label="Más" onClick={() => setK({ ...k, [id]: v + 1 })}>+</button>
              </span>
              <div className="bar"><i style={{ width: Math.min(100, v / meta * 100) + "%" }} /></div>
            </div>
          );
        })}
        <button className="btn ghost sm" style={{ marginTop: 12 }} onClick={() => setK({})}>Reiniciar mes</button>
      </div>
    </div>
  );
}
