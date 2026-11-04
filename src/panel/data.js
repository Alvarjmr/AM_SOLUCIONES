export const cop = n => "$" + Math.round(n).toLocaleString("es-CO");

export const CATALOGO = [
  ["Diagnóstico técnico presencial", 60000, 90000],
  ["Mantenimiento de computador", 80000, 120000],
  ["Configuración router/Wi-Fi", 80000, 150000],
  ["Configuración switch", 100000, 180000],
  ["Configuración DVR/NVR", 100000, 180000],
  ["Configuración inicial servidor Linux/Windows", 250000, 500000],
  ["Configuración MariaDB/MySQL", 180000, 350000],
  ["Automatización Python (desde)", 300000, 300000],
  ["Programación ESP32", 180000, 350000],
  ["Aplicación web básica (desde)", 800000, 800000],
];

export const PLANES = [
  { id: "basico", nombre: "Básico", precio: 250000, incluye: "Hasta 3 horas remotas, asesoría, revisión básica y reporte mensual." },
  { id: "empresarial", nombre: "Empresarial", precio: 450000, incluye: "Hasta 6 horas remotas, una visita preventiva, revisión de red y respaldos, reporte." },
  { id: "integral", nombre: "Integral", precio: 750000, incluye: "Hasta 10 horas remotas, dos visitas preventivas y revisión de servidores, redes y respaldos." },
];

export const RUTA = [
  ["Días 1–15", ["Definir marca y catálogo", "Fijar tarifas", "Crear formatos de diagnóstico", "Crear formato de cotización", "Redactar contrato de mantenimiento"]],
  ["Días 16–30", ["Activar WhatsApp Business y perfil de Google", "Contactar 30 prospectos", "Visitar 10 negocios", "Enviar propuestas"]],
  ["Días 31–60", ["Cerrar los primeros trabajos", "Documentar resultados", "Pedir referidos y testimonios autorizados", "Convertir clientes puntuales a mantenimiento"]],
  ["Días 61–90", ["Buscar 3–5 contratos recurrentes", "Medir rentabilidad por servicio", "Ajustar precios y alcance"]],
];

export const KPIS = [
  ["prospectos", "Prospectos contactados", 30],
  ["visitas", "Visitas comerciales", 10],
  ["cotizaciones", "Cotizaciones enviadas", 8],
  ["clientes", "Clientes nuevos", 2],
  ["contratos", "Contratos recurrentes (día 90)", 5],
];

export const CATEGORIAS = [
  { t: "Redes e infraestructura TI", d: "Conectividad estable y ordenada para tu negocio.", l: ["Redes LAN y Wi-Fi", "Cableado estructurado y puntos de red", "Configuración de routers y switches", "Mantenimiento de redes empresariales"], s: [2, 3] },
  { t: "Seguridad electrónica", d: "Cámaras y vigilancia con acceso remoto.", l: ["Instalación de cámaras CCTV", "Configuración de DVR y NVR", "Acceso remoto a cámaras", "Mantenimiento de sistemas de vigilancia"], s: [4] },
  { t: "Soporte tecnológico empresarial", d: "Equipos funcionando, con o sin contrato mensual.", l: ["Mantenimiento preventivo y correctivo", "Instalación de software y sistemas operativos", "Soporte remoto y presencial", "Planes de soporte técnico mensual"], s: [0, 1] },
  { t: "Servidores y bases de datos", d: "Servicios centrales configurados y respaldados.", l: ["Configuración de servidores Linux y Windows", "Administración de MariaDB/MySQL", "Respaldos y revisión de disponibilidad"], s: [5, 6] },
  { t: "Software, automatización e IoT", d: "Procesos y dispositivos inteligentes a la medida.", l: ["Aplicaciones web de alcance definido", "Automatización con Python", "Integración con Firebase", "Prototipos con ESP32 y Raspberry Pi"], s: [7, 8, 9] },
];
