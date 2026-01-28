import Link from "next/link"
import { ArrowRight, Music, Globe, BookOpen } from "lucide-react"

export default function Home() {
  return (
    <div className="container relative max-w-screen-2xl px-4 py-12 md:px-8 md:py-24 lg:py-32">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-4 text-center">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]">
          Shiro Documentation Center
        </h1>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Unified documentation for all projects. Beautifully designed, easy to navigate.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/docs/music"
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Get Started
          </Link>
          <Link
            href="https://github.com/luojisama"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-full border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            GitHub
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          href="/docs/music"
          title="Music Project"
          description="Learn how to use the music player, sync lyrics, and contribute."
          icon={<Music className="h-10 w-10 text-primary" />}
        />
        <Card
          href="/docs/nav"
          title="Navigation Site"
          description="Documentation for the navigation portal and site configuration."
          icon={<Globe className="h-10 w-10 text-primary" />}
        />
        <Card
          href="/docs/blog"
          title="Blog Theme"
          description="Guides on writing posts, customizing the theme, and deployment."
          icon={<BookOpen className="h-10 w-10 text-primary" />}
        />
      </div>
    </div>
  )
}

function Card({ href, title, description, icon }: { href: string; title: string; description: string; icon: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
    >
      <div className="flex flex-col gap-4">
        <div className="rounded-full bg-primary/10 w-fit p-3">
          {icon}
        </div>
        <div className="space-y-2">
          <h3 className="font-bold leading-none tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Read Docs <ArrowRight className="ml-1 h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}
