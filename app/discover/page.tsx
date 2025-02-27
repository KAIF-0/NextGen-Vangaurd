'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { Search } from "lucide-react"

type TimeFilter = 'today' | 'weekly' | 'monthly' | 'yearly'

const DUMMY_PROJECTS = [
  {
    id: 1,
    title: "AI-Powered Image Recognition",
    description: "A deep learning system that can identify objects in real-time",
    image: "/project-images/ai-vision.jpg",
    author: "Sarah Chen",
    likes: 234,
    views: 1200,
    category: "Computer Vision"
  },
  {
    id: 2,
    title: "Natural Language Processing Bot",
    description: "Chatbot using advanced NLP techniques for human-like conversations",
    image: "/project-images/nlp-bot.jpg",
    author: "James Wilson",
    likes: 189,
    views: 890,
    category: "NLP"
  },
  // Add more dummy projects as needed
]

export default function DiscoverPage() {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>('today')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter projects based on search query
  const filteredProjects = DUMMY_PROJECTS.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.category.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="bg-gradient-radial-complex bg-fixed min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 mb-12
                      border border-blue-500/20 shadow-glow">
          <h1 className="text-4xl font-bold text-white 
                         drop-shadow-[0_2px_10px_rgba(37,99,235,0.2)]">
            Discover Top Projects
          </h1>
          
          {/* Search Bar */}
          <div className="mt-6 relative max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-blue-400/60" />
            </div>
            <input
              type="text"
              placeholder="Search projects by title, description, or category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-black/20 border border-blue-500/20 
                         rounded-xl text-white placeholder:text-blue-200/50
                         focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20
                         transition-all duration-300"
            />
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-black/20 backdrop-blur-sm rounded-xl p-6 mb-8
                      border border-blue-500/10">
          <div className="flex flex-wrap gap-4">
            {(['today', 'weekly', 'monthly', 'yearly'] as TimeFilter[]).map((filter) => (
              <Button
                key={filter}
                onClick={() => setTimeFilter(filter)}
                className={`
                  ${timeFilter === filter
                    ? 'bg-blue-600 text-white shadow-[0_0_15px_rgba(37,99,235,0.3)]'
                    : 'bg-black/30 text-blue-100 hover:bg-blue-600/20'
                  }
                  capitalize transition-all duration-300
                `}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center text-blue-200/70 py-12">
            No projects found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  )
} 