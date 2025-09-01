import React, { useMemo, useState } from 'react'
import { DOMAINS, type Domain } from './data/domains'
import { Button } from './components/ui/button'
import { Modal } from './components/Modal'
import { Search, Hash, Grid3X3, Moon, Sun, X, Filter, Users, Tag, Sparkles, Zap, Star, ArrowRight, Eye, ChevronDown, ChevronUp } from 'lucide-react'

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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-slate-900/80">
        <div className="container flex h-20 items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-75 animate-pulse"></div>
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg">
                <Sparkles className="h-6 w-6" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Catálogo de IA
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center gap-1">
                <Zap className="h-3 w-3" />
                Agentes especializados por dominio
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
              <Star className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">
                {DOMAINS.length} dominios
              </span>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              aria-label="Cambiar tema" 
              onClick={toggle}
              className="relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg"></div>
              {dark ? <Sun className="h-4 w-4 relative z-10" /> : <Moon className="h-4 w-4 relative z-10" />}
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8 relative z-10">
        {/* Hero Search Section */}
        <div className="mb-12 text-center">
          <div className="mb-8">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 dark:from-white dark:via-purple-200 dark:to-white bg-clip-text text-transparent">
              Encuentra tu agente perfecto
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Explora nuestra colección de agentes de IA especializados, diseñados para potenciar cada área de tu organización
            </p>
          </div>

          {/* Enhanced Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-purple-500 transition-colors" />
                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Buscar por dominio, funcionalidad, tecnología..."
                  className="w-full rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm pl-14 pr-14 py-5 text-base outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20 transition-all placeholder:text-slate-400"
                />
                {q && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-slate-100 dark:hover:bg-slate-700"
                    onClick={() => setQ('')}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Enhanced Filters */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="gap-2 rounded-full border-2 hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all"
            >
              <Filter className="h-4 w-4" />
              Filtros
              {showFilters ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              {hasActiveFilters && (
                <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-xs text-white font-medium">
                  {(q ? 1 : 0) + (selected ? 1 : 0)}
                </span>
              )}
            </Button>
            
            {hasActiveFilters && (
              <Button 
                variant="ghost" 
                onClick={clearSearch} 
                className="gap-2 rounded-full hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-900/20 transition-all"
              >
                <X className="h-4 w-4" />
                Limpiar filtros
              </Button>
            )}
            
            <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <Eye className="h-4 w-4" />
              {filtered.length} de {DOMAINS.length} dominios
            </div>
          </div>

          {/* Collapsible Filter Tags */}
          {showFilters && (
            <div className="mt-6 max-w-4xl mx-auto">
              <div className="rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm p-6">
                <div className="mb-4 flex items-center gap-2 justify-center">
                  <Tag className="h-4 w-4 text-slate-500" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Filtrar por dominio</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Button
                    variant={selected === null ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelected(null)}
                    className="rounded-full transition-all hover:scale-105"
                  >
                    Todos los dominios
                  </Button>
                  {DOMAINS.map((d) => (
                    <Button
                      key={d.key}
                      variant={selected === d.key ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelected(selected === d.key ? null : d.key)}
                      className="rounded-full gap-2 transition-all hover:scale-105"
                    >
                      <Hash className="h-3 w-3" />
                      {d.title}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full blur opacity-50"></div>
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
                <Search className="h-10 w-10 text-slate-400" />
              </div>
            </div>
            <h3 className="mb-3 text-2xl font-bold text-slate-800 dark:text-slate-200">No se encontraron dominios</h3>
            <p className="mb-6 text-slate-600 dark:text-slate-400 max-w-md">
              Intenta con otros términos de búsqueda o ajusta los filtros para encontrar el agente perfecto
            </p>
            <Button onClick={clearSearch} className="rounded-full gap-2">
              <ArrowRight className="h-4 w-4" />
              Explorar todos los dominios
            </Button>
          </div>
        ) : (
          <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((d) => (
              <DomainCard key={d.key} domain={d} query={q} />
            ))}
          </section>
        )}
      </main>

      <footer className="relative z-10 border-t border-white/20 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl mt-20">
        <div className="container py-8">
          <div className="flex flex-col gap-4 text-center text-sm text-slate-600 dark:text-slate-400 sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="h-4 w-4 text-purple-500" />
              <span>{new Date().getFullYear()} · Catálogo de Agentes de IA</span>
            </div>
            <div className="flex items-center justify-center gap-4 sm:justify-end">
              <span className="flex items-center gap-1">
                <span className={`w-2 h-2 rounded-full ${dark ? 'bg-slate-400' : 'bg-yellow-400'}`}></span>
                Tema {dark ? 'oscuro' : 'claro'}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Grid3X3 className="h-3 w-3" />
                {DOMAINS.length} dominios disponibles
              </span>
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
    <div className="group relative">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-indigo-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      
      <div className="relative rounded-3xl border-2 border-slate-200/50 dark:border-slate-700/50 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-1">
        <div className="mb-6 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className={`absolute inset-0 bg-gradient-to-r ${domain.gradient} rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity`}></div>
              <div className={`relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${domain.gradient.replace('from-', 'from-').replace('to-', 'to-')}/10 border ${domain.gradient.replace('from-', 'border-').split(' ')[0]}/20 group-hover:${domain.gradient} group-hover:text-white transition-all duration-300 text-2xl`}>
                {domain.icon}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold leading-tight group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {domain.title}
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                  <Users className="h-3 w-3 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs font-medium text-emerald-700 dark:text-emerald-300">
                    {agentCount} agente{agentCount !== 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-base">
          {domain.description}
        </p>
        
        {domain.examples && (
          <div className="mb-6">
            <ul className="space-y-2">
              {domain.examples.slice(0, 3).map((e, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-500 dark:text-slate-400">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex-shrink-0" />
                  <span>{e}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
          <AgentsPreview domainKey={domain.key} query={query} />
        </div>
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
        onClick={() => setOpen(true)}
        className="w-full justify-between group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:text-white transition-all duration-300 rounded-2xl gap-3"
      >
        <span className="flex items-center gap-2">
          <Eye className="h-4 w-4" />
          Explorar agentes
        </span>
        <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-medium">
          {agents.length}
          <ArrowRight className="h-3 w-3" />
        </span>
      </Button>
      
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={`Agentes de ${DOMAINS.find(d => d.key === domainKey)?.title}`}
        subtitle={
          <span className="flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            {agents.length} agente{agents.length !== 1 ? 's' : ''} especializado{agents.length !== 1 ? 's' : ''} disponible{agents.length !== 1 ? 's' : ''}
          </span>
        }
      >
        {agents.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-600 rounded-full blur opacity-50"></div>
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700">
                <Users className="h-8 w-8 text-slate-400" />
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              No hay agentes que coincidan con la búsqueda
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {agents.map(a => (
              <div key={a.id} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-5 hover:shadow-xl hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="mb-4 flex items-start gap-3">
                    <div className="text-3xl flex-shrink-0">{a.icon || '🤖'}</div>
                    <div className="flex-1 min-w-0">
                      <h5 className="font-bold text-base leading-tight mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{a.name}</h5>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{a.summary}</p>
                    </div>
                  </div>
                  
                  {a.tags && a.tags.length > 0 && (
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {a.tags.slice(0, 3).map(t => (
                        <span 
                          key={t} 
                          className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-600 px-2.5 py-1 text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-700/50 hover:bg-purple-50 hover:border-purple-200 dark:hover:bg-purple-900/20 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                      {a.tags.length > 3 && (
                        <span className="inline-flex items-center rounded-full border border-slate-200 dark:border-slate-600 px-2.5 py-1 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-700/50">
                          +{a.tags.length - 3}
                        </span>
                      )}
                    </div>
                  )}
                  
                  <Button size="sm" className="w-full rounded-xl gap-2 text-sm group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300">
                    <Zap className="h-4 w-4" />
                    Usar agente
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </Modal>
    </div>
  )
}

export default App