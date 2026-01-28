"use client"

import * as React from "react"
import { Search as SearchIcon, Command } from "lucide-react"

export function Search() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-xl bg-muted/50 px-4 py-2 text-sm text-muted-foreground hover:bg-muted transition-colors w-full md:w-64 border border-transparent hover:border-border/50"
      >
        <SearchIcon className="h-4 w-4" />
        <span>Search documentation...</span>
        <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center bg-black/50 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl bg-popover p-4 shadow-2xl border border-border animate-in fade-in zoom-in-95 duration-200">
             <div className="flex items-center border-b border-border pb-2 mb-2">
                <SearchIcon className="mr-2 h-4 w-4 opacity-50" />
                <input 
                  className="flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50" 
                  placeholder="Type a command or search..." 
                  autoFocus
                />
             </div>
             <div className="py-6 text-center text-sm text-muted-foreground">
                No results found. (This is a mock search)
             </div>
             <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">✕</button>
          </div>
          <div className="absolute inset-0 -z-10" onClick={() => setOpen(false)} />
        </div>
      )}
    </>
  )
}
