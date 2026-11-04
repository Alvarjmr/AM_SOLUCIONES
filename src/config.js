// ============================================================
//  DATOS EDITABLES DE AM SOLUCIONES TECNOLÓGICAS
//  Completa solo lo que tengas. Lo que dejes vacío ("") no se muestra
//  y el sitio indica "por completar" donde corresponde.
// ============================================================
export const CONFIG = {
  // WhatsApp empresarial: código de país + número, sin "+", espacios ni guiones.
  // Ejemplo Colombia: "573001234567"
  whatsapp: "",
  email: "",
  telefono: "",
  direccion: "",
  redes: { facebook: "", instagram: "", linkedin: "", tiktok: "", youtube: "" },
  // Opcional: URL de un servicio de formularios (por ejemplo Formspree) para
  // recibir las solicitudes por correo. Si está vacío, el formulario usa
  // WhatsApp o el correo configurados arriba.
  formEndpoint: "",
};

export const waLink = (texto = "Hola, quiero solicitar una cotización.") =>
  CONFIG.whatsapp ? `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}` : "";
