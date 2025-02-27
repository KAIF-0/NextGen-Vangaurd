"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Bot, Sparkles, Check, Loader2 } from "lucide-react"

interface Mentor {
  id: number
  name: string
  image: string
  title: string
  expertise: string[]
  matchScore: number
  projectsCompleted: number
  industry: string
}

const MATCHING_PHASES = [
  "Analyzing project requirements...",
  "Scanning mentor database...",
  "Calculating compatibility scores...",
  "Finalizing mentor matches..."
]

const RECOMMENDED_MENTORS: Mentor[] = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    image: "/mentor-images/sarah.jpg",
    title: "AI Research Scientist at Google",
    expertise: ["Deep Learning", "Computer Vision", "Neural Networks"],
    matchScore: 95,
    projectsCompleted: 24,
    industry: "Computer Vision"
  },
  {
    id: 2,
    name: "James Wilson",
    image: "/mentor-images/james.jpg",
    title: "Senior ML Engineer",
    expertise: ["Machine Learning", "NLP", "PyTorch"],
    matchScore: 88,
    projectsCompleted: 18,
    industry: "Natural Language Processing"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    image: "/mentor-images/emily.jpg",
    title: "AI Research Lead",
    expertise: ["Reinforcement Learning", "AI Ethics", "TensorFlow"],
    matchScore: 82,
    projectsCompleted: 15,
    industry: "Machine Learning"
  }
]

function MatchingAnimation({ onComplete }: { onComplete: () => void }) {
  const [currentPhase, setCurrentPhase] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhase(prev => {
        if (prev === MATCHING_PHASES.length - 1) {
          clearInterval(timer)
          setTimeout(onComplete, 1000)
          return prev
        }
        return prev + 1
      })
    }, 2000)

    return () => clearInterval(timer)
  }, [onComplete])

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px]
                    bg-black/30 backdrop-blur-md rounded-2xl p-8
                    border border-blue-500/20">
      <Bot className="h-16 w-16 text-blue-400 animate-bounce mb-8" />
      <div className="space-y-4 text-center">
        <h2 className="text-2xl font-bold text-white">AI Matching in Progress</h2>
        <div className="flex items-center gap-2 text-blue-200">
          <Loader2 className="h-4 w-4 animate-spin" />
          <p>{MATCHING_PHASES[currentPhase]}</p>
        </div>
        <div className="w-64 h-2 bg-black/40 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${((currentPhase + 1) / MATCHING_PHASES.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  )
}

function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <div className="bg-black/30 backdrop-blur-md rounded-xl overflow-hidden
                    border border-blue-500/20 hover:border-blue-500/40
                    transform hover:-translate-y-1 transition-all duration-300
                    shadow-glow hover:shadow-[0_0_25px_rgba(37,99,235,0.2)]">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <Image
            src={mentor.image}
            alt={mentor.name}
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">{mentor.name}</h3>
              <div className="flex items-center gap-1 text-green-400">
                <Sparkles className="h-4 w-4" />
                <span className="font-semibold">{mentor.matchScore}%</span>
              </div>
            </div>
            <p className="text-blue-400 text-sm">{mentor.title}</p>
            <p className="text-blue-200/70 text-sm mt-1">
              {mentor.projectsCompleted} projects completed
            </p>
          </div>
        </div>

        <div className="mt-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {mentor.expertise.map((skill, index) => (
              <span key={index}
                    className="bg-blue-500/10 text-blue-300 text-xs px-2 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>

          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white
                     shadow-[0_0_15px_rgba(37,99,235,0.2)]"
          >
            <Check className="mr-2 h-4 w-4" />
            Connect with Mentor
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function AIMatchPage() {
  const [isMatching, setIsMatching] = useState(true)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8
                      border border-blue-500/20 shadow-glow">
        <h1 className="text-3xl font-bold text-white
                       drop-shadow-[0_2px_10px_rgba(37,99,235,0.2)]">
          AI Mentor Matching
        </h1>
        <p className="mt-2 text-blue-200/70">
          Finding the perfect mentors for your project
        </p>
      </div>

      {isMatching ? (
        <MatchingAnimation onComplete={() => setIsMatching(false)} />
      ) : (
        <div className="space-y-8">
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8
                         border border-blue-500/20">
            <h2 className="text-xl font-semibold text-white mb-6">
              Recommended Mentors
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {RECOMMENDED_MENTORS.map((mentor) => (
                <MentorCard key={mentor.id} mentor={mentor} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 