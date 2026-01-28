"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Search } from "@/components/Search"
import { ThemeToggle } from "@/components/ThemeToggle"
import { useTranslations } from "next-intl"

export function Navbar() {
  const pathname = usePathname()
  const t = useTranslations("Navbar")

  const links = [
    { href: "/", label: t("home") },
    { href: "/docs/music", label: t("music") },
    { href: "/docs/nav", label: t("nav") },
    { href: "/docs/bot", label: "Bot" },
  ]

  return (
    <header className="fixed top-0 z-40 w-full border-b border-border/40 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 md:px-8">
        <div className="mr-4 flex items-center gap-2">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <img src="https://blog.shiro.team/avatar.png" alt="Logo" className="h-8 w-8 rounded-full" />
            <span className="hidden font-bold sm:inline-block">
              Shiro Docs
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === link.href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Search />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
