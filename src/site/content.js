export const SERVICIOS = [
  { id: "soporte", icon: "monitor", titulo: "Soporte técnico e infraestructura TI",
    desc: "Mantenemos tus equipos y servidores funcionando para que tu operación no se detenga.",
    items: ["Mantenimiento preventivo y correctivo de computadores", "Instalación y configuración de sistemas operativos", "Diagnóstico y solución de problemas tecnológicos", "Administración y soporte de servidores", "Soporte técnico remoto y presencial"] },
  { id: "redes", icon: "network", titulo: "Redes y telecomunicaciones",
    desc: "Redes estables, ordenadas y documentadas para oficinas, comercios y bodegas.",
    items: ["Diseño e instalación de redes LAN", "Configuración de routers y switches", "Cableado estructurado", "Redes inalámbricas Wi-Fi", "Configuración y mantenimiento de infraestructura de red", "Diagnóstico y solución de problemas de conectividad"] },
  { id: "cctv", icon: "camera", titulo: "Seguridad electrónica y CCTV",
    desc: "Videovigilancia configurada para que puedas supervisar tu negocio a distancia.",
    items: ["Instalación y configuración de cámaras de seguridad", "Configuración de DVR y NVR", "Acceso remoto a sistemas de videovigilancia", "Mantenimiento de sistemas CCTV", "Diagnóstico de fallas en sistemas de seguridad"] },
  { id: "software", icon: "code", titulo: "Desarrollo de software y bases de datos",
    desc: "Aplicaciones y bases de datos a la medida para organizar y automatizar tu gestión.",
    items: ["Desarrollo de aplicaciones web", "Sistemas de facturación y gestión empresarial", "Desarrollo de soluciones con Python y Flask", "Implementación y administración de bases de datos MariaDB y MySQL", "Automatización de procesos empresariales", "Integración de aplicaciones con Firebase"] },
  { id: "iot", icon: "chip", titulo: "Automatización e Internet de las Cosas (IoT)",
    desc: "Dispositivos conectados que monitorean y controlan procesos de tu negocio.",
    items: ["Desarrollo de proyectos con ESP32 y Raspberry Pi", "Automatización de procesos", "Integración de sensores y dispositivos electrónicos", "Sistemas de monitoreo y control remoto", "Integración de dispositivos con plataformas en la nube", "Soluciones personalizadas para necesidades empresariales"] },
];

export const PROYECTOS = [
  { icon: "shield", titulo: "Sistema de alarma inteligente",
    desc: "Sistema de seguridad con Raspberry Pi y sensores de movimiento PIR, con registro en Firebase y notificaciones remotas desde una aplicación Android.",
    tech: ["Raspberry Pi", "Sensores PIR", "Firebase", "Android"] },
  { icon: "layers", titulo: "Sistema de facturación empresarial",
    desc: "Aplicación web para administrar clientes, productos, facturas y detalles de ventas, con generación de comprobantes e impresión térmica.",
    tech: ["Python", "Flask", "MariaDB"] },
  { icon: "chip", titulo: "Automatización con ESP32",
    desc: "Soluciones de control electrónico con sensores, relés y comunicación inalámbrica para automatizar dispositivos.",
    tech: ["ESP32", "Sensores", "Relés", "Wi-Fi"] },
  { icon: "camera", titulo: "Sistema de detección de vehículos",
    desc: "Sistema de visión artificial con cámaras IP y procesamiento de imágenes para detectar y registrar vehículos.",
    tech: ["Cámaras IP", "Python", "OpenCV"] },
  { icon: "network", titulo: "Infraestructura de redes",
    desc: "Configuración de switches administrables, VLAN y direccionamiento IP, con administración de la conectividad de la red.",
    tech: ["Switches administrables", "VLAN", "Direccionamiento IP"] },
];

export const PORQUE = [
  { icon: "server", t: "Experiencia técnica", d: "Conocimiento en telecomunicaciones e infraestructura TI." },
  { icon: "spark", t: "Soluciones a tu medida", d: "Adaptadas a las necesidades de cada empresa." },
  { icon: "headset", t: "Atención presencial y remota", d: "Soporte donde lo necesites, cuando lo necesites." },
  { icon: "layers", t: "Tecnologías modernas", d: "Integramos herramientas actuales a tu operación." },
  { icon: "shield", t: "Compromiso con la calidad", d: "Trabajamos con responsabilidad y seguimiento." },
  { icon: "users", t: "Acompañamiento continuo", d: "Soporte tecnológico antes, durante y después." },
];

export const PLANES = [
  { id: "Plan Básico", precio: "250.000", items: ["Hasta 3 horas de soporte remoto", "Diagnóstico de incidentes", "Asesoría tecnológica"] },
  { id: "Plan Empresarial", precio: "450.000", destacado: true, items: ["Hasta 6 horas de soporte remoto", "Una visita técnica mensual", "Mantenimiento y seguimiento de incidentes"] },
  { id: "Plan Integral", precio: "750.000", items: ["Hasta 10 horas de soporte remoto", "Dos visitas técnicas mensuales", "Seguimiento de infraestructura tecnológica"] },
];

export const OPCIONES_SERVICIO = [...SERVICIOS.map(s => s.titulo), "Planes de soporte empresarial", "Otro / no estoy seguro"];
