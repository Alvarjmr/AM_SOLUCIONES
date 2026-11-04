import { CONFIG, waLink } from "../config";

const P = {
  monitor: <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></>,
  network: <><rect x="9" y="2" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="16" y="16" width="6" height="6" rx="1" /><path d="M12 8v4M5 16v-4h14v4" /></>,
  camera: <><path d="M2 8a2 2 0 012-2h9a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2z" /><path d="M15 11l7-3v8l-7-3" /></>,
  code: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
  chip: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /></>,
  server: <><rect x="3" y="3" width="18" height="7" rx="2" /><rect x="3" y="14" width="18" height="7" rx="2" /><path d="M7 6.5h.01M7 17.5h.01" /></>,
  shield: <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></>,
  check: <path d="M5 12l5 5 9-10" />,
  whatsapp: <path d="M21 12a9 9 0 01-13.4 7.8L3 21l1.3-4.4A9 9 0 1121 12z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  pin: <><path d="M12 21s7-6.2 7-12a7 7 0 10-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></>,
  layers: <path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5" />,
  users: <><circle cx="9" cy="8" r="3.5" /><path d="M2 20a7 7 0 0114 0M17 5a3.5 3.5 0 010 7M19 14a7 7 0 013 6" /></>,
  spark: <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" />,
  headset: <path d="M4 14v-2a8 8 0 0116 0v2M4 14h3v5H4zM17 14h3v5h-3z" />,
};

export const Icon = ({ n, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{P[n]}</svg>
);

// Avisa al formulario qué servicio se quiere cotizar
export const pedir = s => window.dispatchEvent(new CustomEvent("am:servicio", { detail: s }));

export function WaButton({ texto, className = "s-btn s-btn-wa", children = "Cotizar por WhatsApp" }) {
  const link = waLink(texto);
  return (
    <a className={className} href={link || "#contacto"} {...(link ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      <Icon n="whatsapp" size={18} /> {children}
    </a>
  );
}

export function Redes() {
  const r = Object.entries(CONFIG.redes || {}).filter(([, u]) => u);
  if (!r.length) return <p className="s-muted">Redes sociales: por completar.</p>;
  return <ul className="s-redes">{r.map(([n, u]) => <li key={n}><a href={u} target="_blank" rel="noopener noreferrer">{n[0].toUpperCase() + n.slice(1)}</a></li>)}</ul>;
}
