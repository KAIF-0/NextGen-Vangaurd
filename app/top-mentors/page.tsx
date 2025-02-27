'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Search, Star, Mail } from "lucide-react"
import Image from 'next/image'

const DUMMY_MENTORS = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    image: "/mentor-images/sarah.jpg",
    title: "AI Research Scientist",
    domain: "Computer Vision & Deep Learning",
    email: "sarah.chen@aimentor.com",
    rating: 4.9,
    isFeatured: true,
    expertise: ["Neural Networks", "Computer Vision", "PyTorch"]
  },
  {
    id: 2,
    name: "James Wilson",
    image: "/mentor-images/james.jpg",
    title: "Senior ML Engineer",
    domain: "Natural Language Processing",
    email: "james.wilson@aimentor.com",
    rating: 4.8,
    isFeatured: true,
    expertise: ["NLP", "BERT", "Transformers"]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    image: "/mentor-images/emily.jpg",
    title: "Data Science Lead",
    domain: "Machine Learning & Statistics",
    email: "emily.r@aimentor.com",
    rating: 4.7,
    isFeatured: false,
    expertise: ["Statistical Analysis", "Python", "Scikit-learn"]
  }
]

function MentorCard({ mentor }: { mentor: typeof DUMMY_MENTORS[0] }) {
  return (
    <div className="bg-black/30 backdrop-blur-md rounded-xl overflow-hidden
                    border border-blue-500/20 hover:border-blue-500/40
                    transform hover:-translate-y-1 transition-all duration-300
                    shadow-glow hover:shadow-[0_0_25px_rgba(37,99,235,0.2)]">
      <div className="relative">
        {/* Mentor Image */}
        <div className="relative h-48 w-full">
          <Image
            src={mentor.image}
            alt={mentor.name}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Featured Badge */}
        {mentor.isFeatured && (
          <div className="absolute top-4 right-4 bg-blue-500/90 text-white px-3 py-1 rounded-full
                         flex items-center gap-1 text-sm font-medium backdrop-blur-sm">
            <Star className="h-4 w-4 fill-current" />
            Top Mentor
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-white mb-1
                       drop-shadow-[0_1px_5px_rgba(37,99,235,0.2)]">
          {mentor.name}
        </h3>
        <p className="text-blue-400 font-medium mb-2">{mentor.title}</p>
        <p className="text-blue-100/80 text-sm mb-4">{mentor.domain}</p>

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {mentor.expertise.map((skill, index) => (
            <span key={index} 
                  className="bg-blue-500/10 text-blue-300 text-xs px-2 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>

        {/* Contact Section */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-blue-500/20">
          <div className="flex items-center text-blue-200/90 text-sm">
            <Mail className="h-4 w-4 mr-2" />
            {mentor.email}
          </div>
          <Button size="sm" 
                  className="bg-blue-600 hover:bg-blue-700 text-white
                           shadow-[0_0_15px_rgba(37,99,235,0.2)]">
            Contact
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function TopMentorsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredMentors = DUMMY_MENTORS.filter(mentor => 
    mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mentor.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mentor.expertise.some(skill => 
      skill.toLowerCase().includes(searchQuery.toLowerCase())
    )
  )

  return (
    <div className="bg-gradient-radial-complex bg-fixed min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 mb-12
                      border border-blue-500/20 shadow-glow">
          <h1 className="text-4xl font-bold text-white 
                         drop-shadow-[0_2px_10px_rgba(37,99,235,0.2)]">
            Top AI Mentors
          </h1>
          
          {/* Search Bar */}
          <div className="mt-6 relative max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-blue-400/60" />
            </div>
            <input
              type="text"
              placeholder="Search mentors by name, domain, or expertise..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-black/20 border border-blue-500/20 
                         rounded-xl text-white placeholder:text-blue-200/50
                         focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20
                         transition-all duration-300"
            />
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredMentors.length === 0 && (
          <div className="text-center text-blue-200/70 py-12">
            No mentors found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  )
} 