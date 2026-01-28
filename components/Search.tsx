"use client"

import * as React from "react"
import { Search as SearchIcon, File } from "lucide-react"
import { createPortal } from "react-dom"
import { useTranslations } from "next-intl"
import { useRouter } from "next/navigation"

const ITEMS = [
  { title: "Music 音乐项目", href: "/docs/music", desc: "Web 音乐播放器文档" },
  { title: "Nav 导航站", href: "/docs/nav", desc: "个人导航站文档" },
  { title: "Bot 插件列表", href: "/docs/bot", desc: "Bot 插件使用说明" },
]

export function Search() {
  const [open, setOpen] = React.useState(false)
  const [query, setQuery] = React.useState("")
  const t = useTranslations("Navbar")
  const tSearch = useTranslations("Search")
  const router = useRouter()

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

  const filtered = ITEMS.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.desc.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-xl bg-muted/50 px-4 py-2 text-sm text-muted-foreground hover:bg-muted transition-colors w-full md:w-64 border border-transparent hover:border-border/50"
      >
        <SearchIcon className="h-4 w-4" />
        <span>{t("search")}</span>
        <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>
      </button>

      {open && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 z-[100] flex items-start justify-center sm:items-center">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
            onClick={() => setOpen(false)}
          />
          
          <div className="relative z-[101] w-full max-w-lg rounded-2xl bg-popover shadow-2xl border border-border animate-in fade-in zoom-in-95 duration-200 mt-20 sm:mt-0 overflow-hidden">
             <div className="flex items-center border-b border-border px-4">
                <SearchIcon className="mr-2 h-4 w-4 opacity-50 text-foreground" />
                <input 
                  className="flex h-12 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground text-foreground disabled:cursor-not-allowed disabled:opacity-50" 
                  placeholder={t("searchPlaceholder")}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  autoFocus
                />
             </div>
             <div className="max-h-[300px] overflow-y-auto p-2">
                {filtered.length === 0 ? (
                    <div className="py-6 text-center text-sm text-muted-foreground">
                        {tSearch("noResults")}
                    </div>
                ) : (
                    <div className="flex flex-col gap-1">
                        {filtered.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => {
                                    router.push(item.href)
                                    setOpen(false)
                                }}
                                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-foreground hover:bg-muted text-left"
                            >
                                <File className="h-4 w-4 text-muted-foreground" />
                                <div>
                                    <div className="font-medium">{item.title}</div>
                                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                )}
             </div>
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
