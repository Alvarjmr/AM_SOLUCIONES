import { useEffect, useState } from "react";
import Site from "./site/Site";
import Panel from "./panel/Panel";
import "./site/site.css";
import "./panel/panel.css";

// El sitio público vive en "/". El panel interno (cotizador, planes, ruta 90 días) en "/#/panel".
const esPanel = () => window.location.hash.startsWith("#/panel");

export default function App() {
  const [panel, setPanel] = useState(esPanel());
  useEffect(() => {
    const f = () => setPanel(esPanel());
    window.addEventListener("hashchange", f);
    return () => window.removeEventListener("hashchange", f);
  }, []);
  return panel ? <div className="panel-root"><Panel /></div> : <Site />;
}
