"use client"

import { useState, useEffect } from "react"
import { Star, GitFork, Circle, ExternalLink } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface RepoData {
  name: string
  description: string
  stargazers_count: number
  forks_count: number
  language: string
  html_url: string
}

interface RepoCardProps {
  username: string
  repository: string
  className?: string
}

export function RepoCard({ username, repository, className }: RepoCardProps) {
  const [data, setData] = useState<RepoData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`https://api.github.com/repos/${username}/${repository}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch")
        return res.json()
      })
      .then((data) => {
        setData(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [username, repository])

  if (error) {
    return (
      <Link
        href={`https://github.com/${username}/${repository}`}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "flex items-center gap-2 rounded-xl border bg-card p-4 text-card-foreground shadow-sm transition-colors hover:bg-accent/50",
          className
        )}
      >
        <ExternalLink className="h-4 w-4" />
        <span className="font-medium">
          {username}/{repository}
        </span>
      </Link>
    )
  }

  if (loading) {
    return (
      <div className={cn("h-[104px] w-full animate-pulse rounded-xl border bg-muted/50", className)} />
    )
  }

  return (
    <Link
      href={data?.html_url || `https://github.com/${username}/${repository}`}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group block w-full overflow-hidden rounded-xl border bg-card text-card-foreground shadow-sm transition-all hover:bg-accent/50 hover:shadow-md",
        className
      )}
    >
      <div className="p-4">
        <div className="flex items-center justify-between gap-2">
          <div className="font-semibold truncate">{data?.name}</div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-1">
          {data?.description}
        </p>
        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
          {data?.language && (
            <div className="flex items-center gap-1.5">
              <Circle className="h-3 w-3 fill-current text-primary" />
              {data.language}
            </div>
          )}
          <div className="flex items-center gap-1">
            <Star className="h-3 w-3" />
            {data?.stargazers_count}
          </div>
          <div className="flex items-center gap-1">
            <GitFork className="h-3 w-3" />
            {data?.forks_count}
          </div>
        </div>
      </div>
    </Link>
  )
}
