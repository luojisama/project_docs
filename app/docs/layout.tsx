import { Sidebar } from "@/components/Sidebar"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container max-w-screen-2xl flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 px-4 md:px-8">
      <Sidebar />
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
        <div className="mx-auto w-full min-w-0">
          {children}
        </div>
        <div className="hidden text-sm xl:block">
            <div className="sticky top-16 -mt-10 pt-4">
                {/* Table of contents could go here */}
                <p className="font-medium">On this page</p>
                <ul className="m-0 list-none text-muted-foreground mt-2 space-y-2">
                   <li><a href="#" className="hover:text-foreground">Introduction</a></li>
                   <li><a href="#" className="hover:text-foreground">Features</a></li>
                </ul>
            </div>
        </div>
      </main>
    </div>
  )
}
