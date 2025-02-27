import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FileText, Users, DollarSign, Calendar } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8
                      border border-blue-500/20 shadow-glow">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-white
                         drop-shadow-[0_2px_10px_rgba(37,99,235,0.2)]">
            Student Dashboard
          </h1>
          <Button asChild 
                  className="bg-blue-600 hover:bg-blue-700 text-white
                           shadow-[0_0_15px_rgba(37,99,235,0.2)]">
            <Link href="/dashboard/projects/new">Submit New Project</Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Total Projects", value: "3", icon: FileText, change: "+1 from last month" },
          { title: "Mentors Matched", value: "2", icon: Users, change: "+1 from last month" },
          { title: "Funding Received", value: "₹50,000", icon: DollarSign, change: "+₹25,000 from last month" },
          { title: "Upcoming Events", value: "2", icon: Calendar, change: "Next event in 3 days" }
        ].map((stat, index) => (
          <div key={index}
               className="bg-black/30 backdrop-blur-md rounded-xl p-6
                         border border-blue-500/20 hover:border-blue-500/40
                         transform hover:-translate-y-1 transition-all duration-300
                         shadow-glow hover:shadow-[0_0_25px_rgba(37,99,235,0.2)]">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <p className="text-sm text-blue-200/70">{stat.title}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
              <stat.icon className="h-5 w-5 text-blue-400" />
            </div>
            <p className="text-xs text-blue-200/50 mt-2">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2 bg-black/30 backdrop-blur-md rounded-xl
                       border border-blue-500/20 shadow-glow">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white mb-4
                          drop-shadow-[0_1px_5px_rgba(37,99,235,0.2)]">
              Active Projects
            </h2>
            {/* Add project list here */}
          </div>
        </div>

        <div className="bg-black/30 backdrop-blur-md rounded-xl
                       border border-blue-500/20 shadow-glow">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white mb-4
                          drop-shadow-[0_1px_5px_rgba(37,99,235,0.2)]">
              Connected Mentor
            </h2>
            {/* Add mentor details here */}
          </div>
        </div>
      </div>
    </div>
  )
}

