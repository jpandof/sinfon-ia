import React, { useMemo, useState } from 'react'
import { DOMAINS, type Domain } from './data/domains'
import { Button } from './components/ui/button'
import { Search, Hash, Grid3X3, Moon, Sun, X, Filter, Users, Tag } from 'lucide-react'

function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    return document.documentElement.classList.contains('dark')
  })
  const toggle = () => {
    document.documentElement.classList.toggle('dark')
    setDark(document.documentElement.classList.contains('dark'))
  }
  return { dark, toggle }
}

const App: React.FC = () => {
  const [q, setQ] = useState('')
  const [selected, setSelected] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)
  const { dark, toggle } = useTheme()

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    let items = DOMAINS
    
    if (selected) {
      items = items.filter((d) => d.key === selected)
    }
    
    if (!query) return items
    
    return items.filter((d) => {
      // Búsqueda más inteligente que incluye palabras parciales
      const searchText = [d.title, d.description, d.key].join(' ').toLowerCase()
      const queryWords = query.split(' ').filter(word => word.length > 0)
      
      return queryWords.every(word => searchText.includes(word))
    })
  }, [q, selected])

  const clearSearch = () => {
    setQ('')
    setSelected(null)
  }

  const hasActiveFilters = q.trim() !== '' || selected !== null

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/95">
        <div className="container flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Grid3X3 className="h-4 w-4" />
            </div>
            <div>
              <h1 className="text-lg font-semibold tracking-tight">Catálogo de IA</h1>
              <p className="text-xs text-muted-foreground">Agentes especializados por dominio</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Cambiar tema" onClick={toggle}>
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-6">
        {/* Barra de búsqueda mejorada */}
        <div className="mb-6 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar por dominio, descripción o funcionalidad..."
              className="w-full rounded-xl border bg-background pl-12 pr-12 py-4 text-base outline-none focus:ring-2 focus:ring-ring transition-all"
            />
            {q && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                onClick={() => setQ('')}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Filtros mejorados */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="gap-2"
              >
                <Filter className="h-4 w-4" />
                Filtros
                {hasActiveFilters && (
                  <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
                    {(q ? 1 : 0) + (selected ? 1 : 0)}
                  </span>
                )}
              </Button>
              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearSearch} className="gap-2">
                  <X className="h-4 w-4" />
                  Limpiar
                </Button>
              )}
            </div>
            <div className="text-sm text-muted-foreground">
              {filtered.length} de {DOMAINS.length} dominios
            </div>
          </div>

          {/* Tags de filtros */}
          {showFilters && (
            <div className="rounded-lg border bg-card p-4">
              <div className="mb-3 flex items-center gap-2">
                <Tag className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">Filtrar por dominio</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={selected === null ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelected(null)}
                  className="rounded-full"
                >
                  Todos
                </Button>
                {DOMAINS.map((d) => (
                  <Button
                    key={d.key}
                    variant={selected === d.key ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelected(selected === d.key ? null : d.key)}
                    className="rounded-full gap-2"
                  >
                    <Hash className="h-3 w-3" />
                    {d.title}
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Resultados */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">No se encontraron dominios</h3>
            <p className="mb-4 text-muted-foreground">
              Intenta con otros términos de búsqueda o ajusta los filtros
            </p>
            <Button variant="outline" onClick={clearSearch}>
              Limpiar búsqueda
            </Button>
          </div>
        ) : (
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((d) => (
              <DomainCard key={d.key} domain={d} query={q} />
            ))}
          </section>
        )}
      </main>

      <footer className="border-t bg-muted/30">
        <div className="container py-6">
          <div className="flex flex-col gap-2 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
            <div>
              {new Date().getFullYear()} · Catálogo de Agentes de IA
            </div>
            <div className="flex items-center justify-center gap-4 sm:justify-end">
              <span>Tema {dark ? 'oscuro' : 'claro'}</span>
              <span>•</span>
              <span>{DOMAINS.length} dominios disponibles</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

import { AGENTS, type Agent } from './data/agents'

function DomainCard({ domain, query }: { domain: Domain, query?: string }) {
  const agentCount = AGENTS.filter(a => a.domain === domain.key).length
  
  return (
    <div className="group rounded-xl border bg-card p-6 transition-all hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Grid3X3 className="h-5 w-5" />
          </div>
          <div>
            <h3 className="font-semibold leading-tight group-hover:text-primary transition-colors">
              {domain.title}
            </h3>
            <div className="flex items-center gap-1 mt-1">
              <Users className="h-3 w-3 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                {agentCount} agente{agentCount !== 1 ? 's' : ''}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
        {domain.description}
      </p>
      
      {domain.examples && (
        <div className="mb-4">
          <ul className="space-y-1">
            {domain.examples.slice(0, 3).map((e, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="mt-1.5 h-1 w-1 rounded-full bg-primary/60 flex-shrink-0" />
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="pt-2 border-t">
        <AgentsPreview domainKey={domain.key} query={query} />
      </div>
    </div>
  )
}

function AgentsPreview({ domainKey, query }: { domainKey: Domain['key'], query?: string }) {
  const [open, setOpen] = React.useState(false)
  const agents = useMemo(() => {
    const list = AGENTS.filter(a => a.domain === domainKey)
    if (!query?.trim()) return list
    
    const q = query.toLowerCase()
    return list.filter(a => {
      const searchText = [a.name, a.summary, (a.tags || []).join(' ')].join(' ').toLowerCase()
      const queryWords = q.split(' ').filter(word => word.length > 0)
      return queryWords.every(word => searchText.includes(word))
    })
  }, [domainKey, query])

  return (
    <div>
      <Button 
        size="sm" 
        variant="secondary" 
        onClick={() => setOpen(true)}
        className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
      >
        <span>Ver agentes</span>
        <span className="ml-2 rounded-full bg-background/20 px-2 py-0.5 text-xs">
          {agents.length}
        </span>
      </Button>
      
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative z-10 w-full max-w-3xl max-h-[80vh] rounded-xl border bg-background shadow-2xl">
            <div className="sticky top-0 flex items-center justify-between gap-4 border-b bg-background p-6 rounded-t-xl">
              <div>
                <h4 className="text-lg font-semibold">
                  Agentes de {DOMAINS.find(d => d.key === domainKey)?.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {agents.length} agente{agents.length !== 1 ? 's' : ''} disponible{agents.length !== 1 ? 's' : ''}
                </p>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="p-6 overflow-auto max-h-[60vh]">
              {agents.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                    <Users className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">
                    No hay agentes que coincidan con la búsqueda
                  </p>
                </div>
              ) : (
                <div className="grid gap-4 sm:grid-cols-2">
                  {agents.map(a => (
                    <div key={a.id} className="rounded-lg border p-4 hover:shadow-sm transition-shadow">
                      <div className="mb-3">
                        <h5 className="font-medium leading-tight mb-1">{a.name}</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">{a.summary}</p>
                      </div>
                      
                      {a.tags && a.tags.length > 0 && (
                        <div className="mb-3 flex flex-wrap gap-1">
                          {a.tags.map(t => (
                            <span 
                              key={t} 
                              className="inline-flex items-center rounded-full border px-2 py-1 text-xs text-muted-foreground bg-muted/50"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <Button size="sm" className="w-full">
                        Usar agente
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App