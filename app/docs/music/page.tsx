export default function MusicDocsPage() {
  return (
    <div className="prose prose-slate dark:prose-invert max-w-none">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Music Project</h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Welcome to the documentation for the Music project. This project is a web-based music player that supports lyrics synchronization, playlist management, and more.
      </p>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">Features</h2>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Play music from local or remote sources.</li>
        <li>Synchronized lyrics display (LRC format).</li>
        <li>Custom playlists.</li>
        <li>Theme support (Light/Dark).</li>
      </ul>
    </div>
  )
}
