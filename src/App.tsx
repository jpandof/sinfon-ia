import React, { useMemo, useState } from 'react'
import { DOMAINS, type Domain } from './data/domains'
import { Button } from './components/ui/button'
import { Search, Hash, Grid3X3, Moon, Sun } from 'lucide-react'

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
  const { dark, toggle } = useTheme()

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    let items = DOMAINS
    if (selected) {
      items = items.filter((d) => d.key === selected)
    }
    if (!query) return items
    return items.filter((d) =>
      [d.title, d.description, d.key].some((t) => t.toLowerCase().includes(query))
    )
  }, [q, selected])

  return (
    <div className="min-h-screen">
      <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Grid3X3 className="h-5 w-5 text-primary" />
            <h1 className="text-lg font-semibold tracking-tight">Catálogo de IA</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Tema" onClick={toggle}>
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <a
              className="text-sm text-muted-foreground hover:text-foreground"
              href="https://ui.shadcn.com" target="_blank" rel="noreferrer"
            >shadcn/ui</a>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative md:flex-[2] xl:max-w-4xl md:mr-2">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar dominios, descripciones..."
              className="w-full rounded-lg border bg-background pl-12 pr-4 py-3 text-base outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div className="flex gap-2 overflow-auto md:flex-none">
            <Button variant={selected === null ? 'default' : 'outline'} onClick={() => setSelected(null)}>
              Todos
            </Button>
            {DOMAINS.map((d) => (
              <Button
                key={d.key}
                variant={selected === d.key ? 'default' : 'outline'}
                onClick={() => setSelected(selected === d.key ? null : d.key)}
                className="gap-2"
                aria-pressed={selected === d.key}
              >
                <Hash className="h-4 w-4" />
                {d.title}
              </Button>
            ))}
          </div>
        </div>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((d) => (
            <DomainCard key={d.key} domain={d} query={q} />
          ))}
        </section>
      </main>

      <footer className="border-t">
        <div className="container py-6 text-xs text-muted-foreground">
          {new Date().getFullYear()} · Hecho con React + shadcn/ui · Tema {dark ? 'oscuro' : 'claro'}
        </div>
      </footer>
    </div>
  )
}

import { AGENTS, type Agent } from './data/agents'

function DomainCard({ domain, query }: { domain: Domain, query?: string }) {
  return (
    <div className="rounded-lg border bg-card p-5 transition hover:shadow-sm">
      <div className="mb-2 flex items-center gap-2">
        <div className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 text-primary">
          <Grid3X3 className="h-4 w-4" />
        </div>
        <h3 className="text-base font-semibold leading-tight">{domain.title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{domain.description}</p>
      {domain.examples && (
        <ul className="mt-3 list-disc pl-5 text-sm">
          {domain.examples.map((e, i) => (
            <li key={i}>{e}</li>
          ))}
        </ul>
      )}
      <div className="mt-4">
        <AgentsPreview domainKey={domain.key} query={query} />
      </div>
    </div>
  )
}

function AgentsPreview({ domainKey, query }: { domainKey: Domain['key'], query?: string }) {
  const [open, setOpen] = React.useState(false)
  const agents = useMemo(() => {
    const list = AGENTS.filter(a => a.domain === domainKey)
    if (!query) return list
    const q = query.toLowerCase()
    return list.filter(a => [a.name,a.summary,(a.tags||[]).join(' ')].some(t => t.toLowerCase().includes(q)))
  }, [domainKey, query])

  return (
    <div>
      <Button size="sm" variant="secondary" onClick={() => setOpen(true)}>
        Ver agentes ({agents.length})
      </Button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative z-10 w-full max-w-2xl rounded-lg border bg-background p-4 shadow-xl">
            <div className="mb-3 flex items-center justify-between gap-2">
              <h4 className="text-base font-semibold">Agentes · {domainKey}</h4>
              <Button size="sm" variant="ghost" onClick={() => setOpen(false)}>Cerrar</Button>
            </div>
            {agents.length === 0 ? (
              <p className="text-sm text-muted-foreground">No hay agentes que coincidan.</p>
            ) : (
              <ul className="space-y-3 max-h-[60vh] overflow-auto pr-1">
                {agents.map(a => (
                  <li key={a.id} className="rounded-md border p-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="font-medium leading-tight">{a.name}</p>
                        <p className="text-sm text-muted-foreground">{a.summary}</p>
                      </div>
                      {a.tags && (
                        <div className="ml-3 hidden gap-1 sm:flex">
                          {a.tags.map(t => (
                            <span key={t} className="rounded-md border px-2 py-0.5 text-xs text-muted-foreground">{t}</span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="mt-2">
                      <Button size="sm">Usar</Button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default App
