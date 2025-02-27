import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"

const projects = [
  {
    id: 1,
    title: "AI-Powered Crop Disease Detection",
    description: "Using machine learning to identify and diagnose crop diseases in real-time.",
    category: "Agriculture",
    status: "In Progress",
    lastUpdated: "2023-06-15",
    image: "/project-images/crop-disease.jpg",
    author: "John Doe",
    likes: 156,
    views: 1200,
  },
  {
    id: 2,
    title: "Smart Water Management System",
    description: "IoT-based solution for efficient water distribution and conservation in urban areas.",
    category: "Environment",
    status: "Completed",
    lastUpdated: "2023-05-20",
    image: "/project-images/smart-water.jpg",
    author: "Jane Smith",
    likes: 100,
    views: 800,
  },
  {
    id: 3,
    title: "Blockchain-Based Voting Platform",
    description: "Secure and transparent digital voting system using blockchain technology.",
    category: "Governance",
    status: "Planning",
    lastUpdated: "2023-06-10",
    image: "/project-images/blockchain-voting.jpg",
    author: "Alice Johnson",
    likes: 75,
    views: 500,
  },
]

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Projects</h1>
        <Button asChild>
          <Link href="/dashboard/projects/new">Create New Project</Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

