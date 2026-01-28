"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

export function TableOfContents() {
  const [headings, setHeadings] = React.useState<{ id: string; text: string; level: number }[]>([])
  const pathname = usePathname()

  React.useEffect(() => {
    // Small delay to ensure content is rendered
    const timer = setTimeout(() => {
        const elements = Array.from(document.querySelectorAll("h2, h3"))
          .map((element) => ({
            id: element.id,
            text: element.textContent || "",
            level: Number(element.tagName.substring(1)),
          }))
          .filter((item) => item.id) // Only list items with IDs

        setHeadings(elements)
    }, 100)
    
    return () => clearTimeout(timer)
  }, [pathname])

  if (headings.length === 0) {
      return null
  }

  return (
    <div className="hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 pt-4">
            <p className="font-medium">On this page</p>
            <ul className="m-0 list-none text-muted-foreground mt-2 space-y-2">
                {headings.map(heading => (
                    <li key={heading.id} style={{ paddingLeft: (heading.level - 2) * 12 }}>
                        <a href={`#${heading.id}`} className="hover:text-foreground block transition-colors">
                            {heading.text}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}
