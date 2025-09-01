export type DomainKey =
  | "producto"
  | "diseno"
  | "frontend"
  | "backend"
  | "calidad"
  | "devsecops"
  | "datos"
  | "ia"
  | "seguridad"
  | "bancaRetail"
  | "pagos"
  | "prestamos"
  | "mercados"
  | "operaciones"
  | "arquitecturaDatos"
  | "personas"
  | "finanzas"
  | "legal"
  | "comunicacion"
  | "auditoria"
  | "meta"

export type Domain = {
  key: DomainKey
  title: string
  description: string
  examples?: string[]
}

export const DOMAINS: Domain[] = [
  { key: "producto", title: "Producto & Estrategia", description: "Roadmaps, discovery, pricing y growth asistidos." },
  { key: "diseno", title: "Diseño & UX", description: "Wireframes, UX writing y research.", },
  { key: "frontend", title: "Frontend", description: "Generación de componentes, estados y tests UI.", },
  { key: "backend", title: "Backend & APIs", description: "Diseño de servicios, contratos, integración.", },
  { key: "calidad", title: "Calidad & Testing", description: "Pruebas unitarias, E2E y QA asistido.", },
  { key: "devsecops", title: "DevSecOps & SRE", description: "Pipelines, seguridad y observabilidad.", },
  { key: "datos", title: "Datos & BI", description: "ETL, dashboards, calidad de datos.", },
  { key: "ia", title: "IA & MLOps", description: "Experimentos, features y despliegue de modelos.", },
  { key: "seguridad", title: "Seguridad, Riesgo & Cumplimiento (Banca)", description: "Controles, GRC y monitoreo.", },
  { key: "bancaRetail", title: "Banca Retail, Canales & Atención", description: "Onboarding, atención y CRM.", },
  { key: "pagos", title: "Pagos & Tarjetas", description: "Prevención de fraude, conciliación y autorización.", },
  { key: "prestamos", title: "Préstamos & Riesgo de Crédito", description: "Originación, cobranzas y scoring.", },
  { key: "mercados", title: "Mercados, Tesorería & ALM", description: "Cumplimiento y gestión de posiciones.", },
  { key: "operaciones", title: "Operaciones & Back Office", description: "Procesamiento y liquidaciones.", },
  { key: "arquitecturaDatos", title: "Arquitectura & Gobierno de Datos", description: "Catálogo, linaje y calidad.", },
  { key: "personas", title: "Personas & Gestión", description: "Capacitación, selección y desempeño.", },
  { key: "finanzas", title: "Finanzas Internas & Procurement", description: "Planeamiento, compras y pagos.", },
  { key: "legal", title: "Legal & Normativa", description: "Contratos, regulaciones y riesgos.", },
  { key: "comunicacion", title: "Comunicación & Marketing", description: "Contenido, campañas y CRM.", },
  { key: "auditoria", title: "Auditoría Interna", description: "Planificación, ejecución y hallazgos.", },
  { key: "meta", title: "Meta-agentes & Gobierno", description: "Orquestación y políticas.", },
]
