import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    author: string
    likes: number
    views: number
    category: string
  }
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-black/30 backdrop-blur-md rounded-xl overflow-hidden
                    border border-blue-500/20 hover:border-blue-500/40
                    transform hover:-translate-y-1 transition-all duration-300
                    shadow-glow hover:shadow-[0_0_25px_rgba(37,99,235,0.2)]">
      {/* Image Section */}
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-blue-400 text-sm font-medium">
            {project.category}
          </span>
          <div className="flex items-center space-x-3 text-blue-100/70 text-sm">
            <span>{project.likes} likes</span>
            <span>•</span>
            <span>{project.views} views</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-white mb-2
                       drop-shadow-[0_1px_5px_rgba(37,99,235,0.2)]">
          {project.title}
        </h3>
        
        <p className="text-blue-100/80 mb-4 line-clamp-2">
          {project.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-blue-200/90 text-sm">
            By {project.author}
          </span>
          <Button asChild variant="outline" size="sm"
                  className="border-blue-400/30 text-blue-100 
                           hover:bg-blue-500/10 hover:border-blue-400/50
                           backdrop-blur-sm">
            <Link href={`/projects/${project.id}`}>
              View Details
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

