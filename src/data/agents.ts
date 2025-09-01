import type { DomainKey } from './domains'

export type Agent = {
  id: string
  name: string
  summary: string
  domain: DomainKey
  tags?: string[]
  icon?: string
  color?: string
}

export const AGENTS: Agent[] = [
  // Producto & Estrategia
  { id: 'prd-planner', name: 'Roadmap Strategist', summary: 'Genera roadmaps trimestrales con dependencias y análisis de impacto.', domain: 'producto', tags: ['roadmap','estrategia','okrs'], icon: '🗺️', color: 'from-purple-500 to-pink-500' },
  { id: 'market-analyst', name: 'Market Intelligence', summary: 'Analiza tendencias de mercado y oportunidades competitivas.', domain: 'producto', tags: ['mercado','competencia','insights'], icon: '📊', color: 'from-blue-500 to-purple-500' },
  { id: 'user-researcher', name: 'User Insights Pro', summary: 'Diseña estudios de usuario y analiza feedback para product discovery.', domain: 'producto', tags: ['research','usuarios','discovery'], icon: '🔍', color: 'from-green-500 to-blue-500' },
  { id: 'pricing-optimizer', name: 'Pricing Wizard', summary: 'Optimiza estrategias de pricing con análisis de elasticidad.', domain: 'producto', tags: ['pricing','revenue','optimization'], icon: '💰', color: 'from-yellow-500 to-orange-500' },

  // Diseño & UX
  { id: 'ux-writer', name: 'UX Content Master', summary: 'Crea microcopy persuasivo y contenidos UX que convierten.', domain: 'diseno', tags: ['ux','contenido','copy'], icon: '✍️', color: 'from-pink-500 to-rose-500' },
  { id: 'wireframe-gen', name: 'Wireframe Genius', summary: 'Genera wireframes interactivos y prototipos de alta fidelidad.', domain: 'diseno', tags: ['wireframes','prototipos','figma'], icon: '📐', color: 'from-indigo-500 to-purple-500' },
  { id: 'design-system', name: 'Design System Architect', summary: 'Construye y mantiene design systems escalables y consistentes.', domain: 'diseno', tags: ['design-system','tokens','componentes'], icon: '🎨', color: 'from-cyan-500 to-blue-500' },
  { id: 'accessibility-guru', name: 'A11y Guardian', summary: 'Audita y mejora la accesibilidad de interfaces digitales.', domain: 'diseno', tags: ['a11y','wcag','inclusivo'], icon: '♿', color: 'from-emerald-500 to-teal-500' },

  // Frontend
  { id: 'react-gen', name: 'React Component Factory', summary: 'Construye componentes React con estado, hooks y testing integrado.', domain: 'frontend', tags: ['react','hooks','testing'], icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
  { id: 'vue-master', name: 'Vue Composition Pro', summary: 'Desarrolla aplicaciones Vue 3 con Composition API y TypeScript.', domain: 'frontend', tags: ['vue','composition','typescript'], icon: '💚', color: 'from-green-400 to-emerald-400' },
  { id: 'css-wizard', name: 'CSS Animation Studio', summary: 'Crea animaciones CSS avanzadas y micro-interacciones.', domain: 'frontend', tags: ['css','animaciones','ui'], icon: '🎭', color: 'from-purple-400 to-pink-400' },
  { id: 'performance-optimizer', name: 'Speed Demon', summary: 'Optimiza performance frontend con lazy loading y code splitting.', domain: 'frontend', tags: ['performance','optimization','webpack'], icon: '⚡', color: 'from-yellow-400 to-orange-400' },

  // Backend & APIs
  { id: 'api-designer', name: 'API Architect', summary: 'Diseña contratos OpenAPI robustos con mocks y documentación.', domain: 'backend', tags: ['openapi','rest','graphql'], icon: '🔌', color: 'from-slate-500 to-gray-500' },
  { id: 'microservices-guru', name: 'Microservices Orchestrator', summary: 'Diseña arquitecturas de microservicios con patrones resilientes.', domain: 'backend', tags: ['microservicios','docker','k8s'], icon: '🏗️', color: 'from-blue-600 to-indigo-600' },
  { id: 'db-optimizer', name: 'Database Whisperer', summary: 'Optimiza queries y diseña esquemas de base de datos eficientes.', domain: 'backend', tags: ['sql','nosql','performance'], icon: '🗄️', color: 'from-green-600 to-teal-600' },
  { id: 'auth-specialist', name: 'Security Gate Keeper', summary: 'Implementa autenticación y autorización con OAuth2 y JWT.', domain: 'backend', tags: ['auth','jwt','oauth2'], icon: '🔐', color: 'from-red-500 to-pink-500' },

  // Calidad & Testing
  { id: 'qa-buddy', name: 'Test Automation Hero', summary: 'Genera suites de pruebas automatizadas E2E y de integración.', domain: 'calidad', tags: ['qa','e2e','cypress'], icon: '🧪', color: 'from-teal-500 to-cyan-500' },
  { id: 'bug-hunter', name: 'Bug Detective', summary: 'Identifica y reproduce bugs con análisis de root cause.', domain: 'calidad', tags: ['debugging','analysis','reproduction'], icon: '🐛', color: 'from-orange-500 to-red-500' },
  { id: 'load-tester', name: 'Performance Stress Master', summary: 'Ejecuta pruebas de carga y análisis de performance.', domain: 'calidad', tags: ['load-testing','jmeter','k6'], icon: '📈', color: 'from-purple-500 to-indigo-500' },

  // DevSecOps & SRE
  { id: 'sec-gate', name: 'Security Scanner Pro', summary: 'Escanea vulnerabilidades en código, dependencias e IaC.', domain: 'devsecops', tags: ['sast','sca','iac'], icon: '🛡️', color: 'from-red-600 to-orange-600' },
  { id: 'pipeline-master', name: 'CI/CD Architect', summary: 'Construye pipelines robustos con GitOps y deployment strategies.', domain: 'devsecops', tags: ['cicd','gitops','deployment'], icon: '🚀', color: 'from-blue-500 to-purple-500' },
  { id: 'monitoring-guru', name: 'Observability Wizard', summary: 'Implementa monitoring, logging y alerting con Prometheus y Grafana.', domain: 'devsecops', tags: ['monitoring','prometheus','grafana'], icon: '📊', color: 'from-green-500 to-blue-500' },
  { id: 'infra-coder', name: 'Infrastructure as Code', summary: 'Automatiza infraestructura con Terraform, Ansible y Kubernetes.', domain: 'devsecops', tags: ['terraform','ansible','k8s'], icon: '🏭', color: 'from-gray-500 to-slate-500' },

  // Datos & BI
  { id: 'etl-helper', name: 'Data Pipeline Engineer', summary: 'Construye pipelines ETL robustos con validación y monitoreo.', domain: 'datos', tags: ['etl','airflow','spark'], icon: '🔄', color: 'from-indigo-500 to-blue-500' },
  { id: 'dashboard-creator', name: 'BI Dashboard Master', summary: 'Crea dashboards interactivos con insights accionables.', domain: 'datos', tags: ['bi','tableau','powerbi'], icon: '📊', color: 'from-cyan-500 to-teal-500' },
  { id: 'data-quality', name: 'Data Quality Guardian', summary: 'Implementa controles de calidad y lineage de datos.', domain: 'datos', tags: ['quality','lineage','governance'], icon: '✅', color: 'from-emerald-500 to-green-500' },

  // IA & MLOps
  { id: 'ml-orchestrator', name: 'ML Pipeline Orchestrator', summary: 'Orquesta entrenamientos, validación y despliegue de modelos ML.', domain: 'ia', tags: ['mlops','kubeflow','mlflow'], icon: '🤖', color: 'from-violet-500 to-purple-500' },
  { id: 'feature-engineer', name: 'Feature Engineering Pro', summary: 'Diseña y optimiza features para modelos de machine learning.', domain: 'ia', tags: ['features','preprocessing','selection'], icon: '⚙️', color: 'from-pink-500 to-rose-500' },
  { id: 'model-monitor', name: 'Model Performance Monitor', summary: 'Monitorea drift, performance y bias en modelos productivos.', domain: 'ia', tags: ['monitoring','drift','bias'], icon: '📈', color: 'from-orange-500 to-yellow-500' },
  { id: 'llm-fine-tuner', name: 'LLM Fine-tuning Specialist', summary: 'Fine-tunea y optimiza modelos de lenguaje para casos específicos.', domain: 'ia', tags: ['llm','fine-tuning','rag'], icon: '🧠', color: 'from-blue-500 to-indigo-500' },
]