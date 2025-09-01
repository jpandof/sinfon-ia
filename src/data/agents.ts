import type { DomainKey } from './domains'

export type Agent = {
  id: string
  name: string
  summary: string
  domain: DomainKey
  tags?: string[]
}

export const AGENTS: Agent[] = [
  { id: 'prd-planner', name: 'Planner de Roadmap', summary: 'Genera roadmaps trimestrales con dependencias.', domain: 'producto', tags: ['roadmap','estrategia'] },
  { id: 'ux-writer', name: 'UX Writer', summary: 'Propuesta de microcopy y contenidos UX.', domain: 'diseno', tags: ['ux','contenido'] },
  { id: 'react-gen', name: 'Generador React', summary: 'Construye componentes con estado y pruebas.', domain: 'frontend', tags: ['react','testing'] },
  { id: 'api-designer', name: 'Diseñador de APIs', summary: 'Diseña contratos OpenAPI y mocks.', domain: 'backend', tags: ['openapi','mock'] },
  { id: 'qa-buddy', name: 'QA Buddy', summary: 'Genera casos y suites de prueba.', domain: 'calidad', tags: ['qa','e2e'] },
  { id: 'sec-gate', name: 'Security Gate', summary: 'Escanea dependencias y IaC.', domain: 'devsecops', tags: ['sast','iac'] },
  { id: 'etl-helper', name: 'ETL Helper', summary: 'Asiste en pipelines y validación de datos.', domain: 'datos', tags: ['etl','dbt'] },
  { id: 'ml-orchestrator', name: 'ML Orchestrator', summary: 'Orquesta entrenamientos y despliegues.', domain: 'ia', tags: ['mlops','deploy'] },
]
