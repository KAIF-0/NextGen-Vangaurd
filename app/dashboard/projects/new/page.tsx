"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  FileUp, 
  Loader2, 
  DollarSign, 
  Bot,
  Link as LinkIcon
} from "lucide-react"
import { useRouter } from 'next/navigation'

const INDUSTRIES = [
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Vision",
  "Natural Language Processing",
  "Robotics",
  "Healthcare AI",
  "Financial AI",
  "Educational AI"
]

export default function NewProjectPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [enableCrowdfunding, setEnableCrowdfunding] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  const router = useRouter()
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8
                      border border-blue-500/20 shadow-glow">
        <h1 className="text-3xl font-bold text-white
                       drop-shadow-[0_2px_10px_rgba(37,99,235,0.2)]">
          Submit New Project
        </h1>
        <p className="mt-2 text-blue-200/70">
          Share your project details to get matched with the perfect mentor
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Details */}
        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8
                       border border-blue-500/20">
          <h2 className="text-xl font-semibold text-white mb-6">Project Details</h2>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Project Title</Label>
              <Input
                id="title"
                placeholder="Enter your project title"
                className="bg-black/20 border-blue-500/20 text-white
                          focus:border-blue-500/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <select
                id="industry"
                className="w-full rounded-md bg-black/20 border-blue-500/20 text-white
                          focus:border-blue-500/50 p-2"
              >
                <option value="">Select Industry</option>
                {INDUSTRIES.map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="proposal">Project Proposal</Label>
              <Textarea
                id="proposal"
                placeholder="Describe your project in detail..."
                className="min-h-[150px] bg-black/20 border-blue-500/20 text-white
                          focus:border-blue-500/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="github">GitHub Repository (Optional)</Label>
              <div className="flex gap-2">
                <LinkIcon className="h-5 w-5 text-blue-400 mt-2" />
                <Input
                  id="github"
                  placeholder="https://github.com/username/project"
                  className="bg-black/20 border-blue-500/20 text-white
                            focus:border-blue-500/50"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Upload */}
        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8
                       border border-blue-500/20">
          <h2 className="text-xl font-semibold text-white mb-6">Documentation</h2>
          <div className="space-y-4">
            <div className="border-2 border-dashed border-blue-500/20 rounded-xl
                          p-8 text-center hover:border-blue-500/40 transition-colors">
              <FileUp className="h-8 w-8 text-blue-400 mx-auto mb-4" />
              <p className="text-blue-200/70 mb-2">
                Drag & drop your documentation files or
              </p>
              <Button
                type="button"
                variant="outline"
                className="border-blue-400/30 text-blue-100 
                         hover:bg-blue-500/10 hover:border-blue-400/50"
              >
                Browse Files
              </Button>
            </div>
            <p className="text-sm text-blue-200/50">
              Supported formats: PDF, DOC, DOCX, MD (Max size: 10MB)
            </p>
          </div>
        </div>

        {/* Crowdfunding Option */}
        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8
                       border border-blue-500/20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-semibold text-white">Enable Crowdfunding</h2>
              <p className="text-blue-200/70 text-sm mt-1">
                Allow the community to fund your project
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={enableCrowdfunding}
                onChange={(e) => setEnableCrowdfunding(e.target.checked)}
              />
              <div className="w-11 h-6 bg-black/40 peer-focus:outline-none rounded-full peer 
                            peer-checked:after:translate-x-full peer-checked:after:border-white 
                            after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
                            after:bg-white after:rounded-full after:h-5 after:w-5 
                            after:transition-all peer-checked:bg-blue-600"></div>
            </label>
          </div>
          {enableCrowdfunding && (
            <div className="space-y-4 animate-fadeIn">
              <div className="space-y-2">
                <Label htmlFor="fundingGoal">Funding Goal</Label>
                <div className="flex gap-2">
                  <DollarSign className="h-5 w-5 text-blue-400 mt-2" />
                  <Input
                    id="fundingGoal"
                    type="number"
                    placeholder="Enter amount"
                    className="bg-black/20 border-blue-500/20 text-white
                              focus:border-blue-500/50"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="fundingPitch">Funding Pitch</Label>
                <Textarea
                  id="fundingPitch"
                  placeholder="Why should people fund your project?"
                  className="bg-black/20 border-blue-500/20 text-white
                            focus:border-blue-500/50"
                />
              </div>
            </div>
          )}
        </div>

        {/* Submit Buttons */}
        <div className="flex justify-end gap-4">
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 text-white
                     shadow-[0_0_15px_rgba(37,99,235,0.2)]"
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit Project
          </Button>
          <Button
           // type="button"
            onClick={() => router.push('/dashboard/projects/match')}
            disabled={isLoading}
            className="bg-purple-600 hover:bg-purple-700 text-white
                     shadow-[0_0_15px_rgba(147,51,234,0.2)]"
          >
            <Bot className="mr-2 h-4 w-4" />
            AI Match
          </Button>
        </div>
      </form>
    </div>
  )
} 