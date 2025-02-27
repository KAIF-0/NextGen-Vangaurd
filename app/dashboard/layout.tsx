import { Sidebar } from "@/components/dashboard/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-[calc(100vh-3.5rem)] overflow-hidden bg-gradient-radial-complex">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-8 bg-black/10 backdrop-blur-sm">
        <div className="container mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
};

