"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"

export function Sidebar() {
  const pathname = usePathname()
  const t = useTranslations("Sidebar")

  const sidebarItems = [
    {
      title: t("music"),
      items: [
        { href: "/docs/music", title: t("musicIntro") },
        { href: "/docs/music#features", title: t("musicFeatures") },
        { href: "/docs/music#tech-stack", title: t("musicTech") },
        { href: "/docs/music#development", title: t("musicDev") },
      ],
    },
    {
      title: t("nav"),
      items: [
        { href: "/docs/nav", title: t("navIntro") },
        { href: "/docs/nav#features", title: t("navFeatures") },
        { href: "/docs/nav#quick-start", title: t("navQuickStart") },
        { href: "/docs/nav#customize", title: t("navCustomize") },
      ],
    },
    {
      title: t("bot"),
      items: [
        { href: "/docs/bot", title: t("botList") },
      ],
    },
  ]

  return (
    <aside className="fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 md:sticky md:block">
        <div className="h-full overflow-y-auto py-6 pr-6 lg:py-8">
            <div className="w-full">
                {sidebarItems.map((group, index) => (
                    <div key={index} className="pb-4">
                        <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">{group.title}</h4>
                        <div className="grid grid-flow-row auto-rows-max text-sm">
                            {group.items.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline",
                                        pathname === item.href.split('#')[0] && item.href.indexOf('#') === -1 // Only highlight main link to avoid all sub-links being highlighted
                                            ? "font-medium text-foreground"
                                            : "text-muted-foreground"
                                    )}
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </aside>
  )
}
