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
  icon: string
  gradient: string
  examples?: string[]
}

export const DOMAINS: Domain[] = [
  { key: "producto", title: "Producto & Estrategia", description: "Roadmaps, discovery, pricing y growth asistidos.", icon: "🎯", gradient: "from-purple-500 to-pink-500" },
  { key: "diseno", title: "Diseño & UX", description: "Wireframes, UX writing y research.", icon: "🎨", gradient: "from-pink-500 to-rose-500" },
  { key: "frontend", title: "Frontend", description: "Generación de componentes, estados y tests UI.", icon: "💻", gradient: "from-blue-500 to-cyan-500" },
  { key: "backend", title: "Backend & APIs", description: "Diseño de servicios, contratos, integración.", icon: "⚙️", gradient: "from-slate-600 to-gray-600" },
  { key: "calidad", title: "Calidad & Testing", description: "Pruebas unitarias, E2E y QA asistido.", icon: "🧪", gradient: "from-teal-500 to-cyan-500" },
  { key: "devsecops", title: "DevSecOps & SRE", description: "Pipelines, seguridad y observabilidad.", icon: "🚀", gradient: "from-indigo-500 to-purple-500" },
  { key: "datos", title: "Datos & BI", description: "ETL, dashboards, calidad de datos.", icon: "📊", gradient: "from-emerald-500 to-teal-500" },
  { key: "ia", title: "IA & MLOps", description: "Experimentos, features y despliegue de modelos.", icon: "🤖", gradient: "from-violet-500 to-purple-500" },
  { key: "seguridad", title: "Seguridad, Riesgo & Cumplimiento (Banca)", description: "Controles, GRC y monitoreo.", icon: "🛡️", gradient: "from-red-500 to-orange-500" },
  { key: "bancaRetail", title: "Banca Retail, Canales & Atención", description: "Onboarding, atención y CRM.", icon: "🏦", gradient: "from-blue-600 to-indigo-600" },
  { key: "pagos", title: "Pagos & Tarjetas", description: "Prevención de fraude, conciliación y autorización.", icon: "💳", gradient: "from-green-500 to-emerald-500" },
  { key: "prestamos", title: "Préstamos & Riesgo de Crédito", description: "Originación, cobranzas y scoring.", icon: "💰", gradient: "from-yellow-500 to-orange-500" },
  { key: "mercados", title: "Mercados, Tesorería & ALM", description: "Cumplimiento y gestión de posiciones.", icon: "📈", gradient: "from-cyan-500 to-blue-500" },
  { key: "operaciones", title: "Operaciones & Back Office", description: "Procesamiento y liquidaciones.", icon: "⚡", gradient: "from-amber-500 to-yellow-500" },
  { key: "arquitecturaDatos", title: "Arquitectura & Gobierno de Datos", description: "Catálogo, linaje y calidad.", icon: "🏗️", gradient: "from-stone-500 to-slate-500" },
  { key: "personas", title: "Personas & Gestión", description: "Capacitación, selección y desempeño.", icon: "👥", gradient: "from-rose-500 to-pink-500" },
  { key: "finanzas", title: "Finanzas Internas & Procurement", description: "Planeamiento, compras y pagos.", icon: "💼", gradient: "from-indigo-600 to-blue-600" },
  { key: "legal", title: "Legal & Normativa", description: "Contratos, regulaciones y riesgos.", icon: "⚖️", gradient: "from-gray-600 to-slate-600" },
  { key: "comunicacion", title: "Comunicación & Marketing", description: "Contenido, campañas y CRM.", icon: "📢", gradient: "from-orange-500 to-red-500" },
  { key: "auditoria", title: "Auditoría Interna", description: "Planificación, ejecución y hallazgos.", icon: "🔍", gradient: "from-purple-600 to-indigo-600" },
  { key: "meta", title: "Meta-agentes & Gobierno", description: "Orquestación y políticas.", icon: "🎭", gradient: "from-fuchsia-500 to-purple-500" },
]
