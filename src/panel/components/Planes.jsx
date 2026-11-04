import { usePersist } from "../hooks";
import { PLANES, cop } from "../data";

export default function Planes() {
  const [n, setN] = usePersist("am_planes", { basico: 2, empresarial: 2, integral: 1, puntuales: 2 });
  const set = (k, d) => setN({ ...n, [k]: Math.max(0, n[k] + d) });
  const mrr = PLANES.reduce((s, p) => s + p.precio * n[p.id], 0);
  const total = mrr + n.puntuales * 150000;
  const recurrentes = n.basico + n.empresarial + n.integral;
  return (
    <div>
      <div className="plans">
        {PLANES.map(p => (
          <div className="plan" key={p.id}>
            <h3>{p.nombre}</h3>
            <div className="price">{cop(p.precio)}<span className="muted"> /mes</span></div>
            <p className="muted" style={{ margin: 0 }}>{p.incluye}</p>
            <div className="stepper">
              <button aria-label="Menos" onClick={() => set(p.id, -1)}>−</button>
              <strong>{n[p.id]}</strong>
              <button aria-label="Más" onClick={() => set(p.id, 1)}>+</button>
              <span className="muted">clientes</span>
            </div>
          </div>
        ))}
      </div>
      <div className="panel" style={{ marginTop: 16 }}>
        <h2>Proyección mensual</h2>
        <div className="stepper" style={{ marginTop: 0, marginBottom: 12 }}>
          <button aria-label="Menos" onClick={() => set("puntuales", -1)}>−</button>
          <strong>{n.puntuales}</strong>
          <button aria-label="Más" onClick={() => set("puntuales", 1)}>+</button>
          <span className="muted">trabajos puntuales de $150.000</span>
        </div>
        <div className="tot"><span>Ingreso recurrente ({recurrentes} contratos)</span><span>{cop(mrr)}</span></div>
        <div className="tot"><span>Trabajos puntuales</span><span>{cop(n.puntuales * 150000)}</span></div>
        <div className="tot big"><span>Facturación bruta</span><span>{cop(total)}</span></div>
        <div className="note">Es una ilustración, no una promesa de ventas ni utilidad neta. Descuenta costos operativos, materiales, impuestos y seguridad social. Escenario del plan: $2.450.000.</div>
      </div>
    </div>
  );
}
