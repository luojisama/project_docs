"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const sidebarItems = [
  {
    title: "Music Project",
    items: [
      { href: "/docs/music", title: "Introduction" },
      { href: "/docs/music/usage", title: "Usage" },
      { href: "/docs/music/development", title: "Development" },
    ],
  },
  {
    title: "Nav Project",
    items: [
      { href: "/docs/nav", title: "Introduction" },
      { href: "/docs/nav/config", title: "Configuration" },
    ],
  },
  {
    title: "Blog",
    items: [
      { href: "/docs/blog", title: "Introduction" },
      { href: "/docs/blog/writing", title: "Writing Posts" },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()

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
                                        pathname === item.href
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
