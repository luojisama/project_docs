"use client"

import { useState, useEffect } from "react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

interface RemoteMarkdownProps {
  url: string
}

export function RemoteMarkdown({ url }: RemoteMarkdownProps) {
  const [content, setContent] = useState("")

  useEffect(() => {
    // Convert github.com blob to raw.githubusercontent.com
    const rawUrl = url
      .replace("github.com", "raw.githubusercontent.com")
      .replace("/blob/", "/")

    fetch(rawUrl)
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error("Failed to fetch markdown:", err))
  }, [url])

  return (
    <div className="prose dark:prose-invert max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
