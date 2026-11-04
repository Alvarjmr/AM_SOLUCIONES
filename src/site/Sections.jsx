import { SERVICIOS, PROYECTOS, PORQUE, PLANES } from "./content";
import { Icon, pedir } from "./shared";

export function Hero() {
  return (
    <section id="inicio" className="s-hero">
      <div className="s-wrap s-hero-grid">
        <div>
          <p className="s-eyebrow">Tecnología, conectividad e innovación para tu empresa</p>
          <h1>Soluciones tecnológicas para impulsar tu empresa.</h1>
          <p className="s-lead">En AM Soluciones Tecnológicas ayudamos a las empresas a optimizar sus procesos mediante servicios de soporte técnico, redes, infraestructura TI, seguridad electrónica, desarrollo de software y automatización.</p>
          <p className="s-lead">Ofrecemos soluciones tecnológicas adaptadas a las necesidades de cada negocio.</p>
          <div className="s-actions">
            <a className="s-btn" href="#contacto">Solicitar una cotización</a>
            <a className="s-btn s-btn-ghost" href="#servicios">Conocer nuestros servicios</a>
          </div>
          <p className="s-cover"><Icon n="pin" size={16} /> Medellín y área metropolitana · Soporte remoto y presencial</p>
        </div>
        <aside className="s-hero-card" aria-label="Líneas de servicio">
          <h2>Nuestras líneas</h2>
          <ul>{SERVICIOS.map(s => <li key={s.id}><a href={"#" + s.id}><Icon n={s.icon} size={20} /> {s.titulo}</a></li>)}</ul>
        </aside>
      </div>
    </section>
  );
}

export function Nosotros() {
  return (
    <section id="nosotros" className="s-sec">
      <div className="s-wrap s-about">
        <div>
          <p className="s-kicker">Nosotros</p>
          <h2>Tecnología práctica y confiable para tu negocio</h2>
          <p>En AM Soluciones Tecnológicas somos una empresa enfocada en brindar soluciones integrales de tecnología para pequeñas y medianas empresas.</p>
          <p>Contamos con conocimientos y experiencia en telecomunicaciones, redes, infraestructura tecnológica, soporte técnico, bases de datos, desarrollo de software y automatización.</p>
          <p>Nuestro propósito es ayudar a las empresas a mejorar su productividad, optimizar sus recursos tecnológicos y mantener sus sistemas funcionando de manera eficiente y segura.</p>
          <p>Trabajamos con compromiso, responsabilidad e innovación para ofrecer soluciones prácticas y confiables.</p>
        </div>
        <ul className="s-values">
          {["Compromiso", "Responsabilidad", "Innovación", "Confianza"].map(v => <li key={v}><Icon n="check" size={18} /> {v}</li>)}
        </ul>
      </div>
    </section>
  );
}

export function Servicios() {
  return (
    <section id="servicios" className="s-sec s-gray">
      <div className="s-wrap">
        <p className="s-kicker">Servicios</p>
        <h2>Nuestros servicios</h2>
        <p className="s-sub">Cinco líneas de servicio para cubrir la tecnología de tu empresa.</p>
        <div className="s-services">
          {SERVICIOS.map(s => (
            <article id={s.id} key={s.id} className="s-service">
              <div className="s-ico"><Icon n={s.icon} size={28} /></div>
              <div>
                <h3>{s.titulo}</h3>
                <p>{s.desc}</p>
                <ul className="s-checks">{s.items.map(i => <li key={i}><Icon n="check" size={16} /> {i}</li>)}</ul>
                <a className="s-link" href="#contacto" onClick={() => pedir(s.titulo)}>Cotizar este servicio →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Portafolio() {
  return (
    <section id="portafolio" className="s-sec">
      <div className="s-wrap">
        <p className="s-kicker">Portafolio</p>
        <h2>Proyectos y soluciones tecnológicas</h2>
        <p className="s-sub">Experiencias y desarrollos que muestran nuestras capacidades técnicas. No son productos comerciales certificados.</p>
        <div className="s-projects">
          {PROYECTOS.map((p, i) => (
            <article className="s-project" key={p.titulo}>
              <div className={"s-pimg v" + (i % 5)} aria-hidden="true"><Icon n={p.icon} size={56} /></div>
              <div className="s-pbody">
                <h3>{p.titulo}</h3>
                <p>{p.desc}</p>
                <ul className="s-tags">{p.tech.map(t => <li key={t}>{t}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PorQue() {
  return (
    <section id="porque" className="s-sec s-navy">
      <div className="s-wrap">
        <p className="s-kicker">¿Por qué elegirnos?</p>
        <h2>Un aliado técnico para tu empresa</h2>
        <div className="s-why">
          {PORQUE.map(w => (
            <div key={w.t} className="s-whyitem">
              <Icon n={w.icon} size={28} />
              <h3>{w.t}</h3>
              <p>{w.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Planes() {
  return (
    <section id="planes" className="s-sec s-gray">
      <div className="s-wrap">
        <p className="s-kicker">Planes empresariales</p>
        <h2>Planes de soporte empresarial</h2>
        <p className="s-sub">Mantenimiento y soporte mensual para que tu tecnología siempre esté al día.</p>
        <div className="s-plans">
          {PLANES.map(p => (
            <article key={p.id} className={"s-plan" + (p.destacado ? " feat" : "")}>
              <h3>{p.id}</h3>
              <p className="s-price"><span>$</span>{p.precio}<small> COP / mes</small></p>
              <ul className="s-checks">{p.items.map(i => <li key={i}><Icon n="check" size={16} /> {i}</li>)}</ul>
              <a className="s-btn" href="#contacto" onClick={() => pedir("Planes de soporte empresarial")}>Solicitar este plan</a>
            </article>
          ))}
        </div>
        <p className="s-note">Los planes están sujetos a evaluación de las necesidades del cliente. Equipos, repuestos, licencias, materiales y trabajos adicionales se cotizan por separado.</p>
      </div>
    </section>
  );
}
