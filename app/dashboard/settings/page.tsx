"use client"

import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Camera, Loader2 } from "lucide-react"

interface UserProfile {
  name: string
  email: string
  phone: string
  bio: string
  university: string
  field: string
  github: string
  linkedin: string
  image: string
}

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [profile, setProfile] = useState<UserProfile>({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    bio: "AI enthusiast and machine learning practitioner. Currently working on deep learning projects.",
    university: "Stanford University",
    field: "Computer Science",
    github: "github.com/johndoe",
    linkedin: "linkedin.com/in/johndoe",
    image: "/profile-images/default-avatar.jpg"
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8
                      border border-blue-500/20 shadow-glow">
        <h1 className="text-3xl font-bold text-white
                       drop-shadow-[0_2px_10px_rgba(37,99,235,0.2)]">
          Settings
        </h1>
        <p className="mt-2 text-blue-200/70">
          Manage your profile and account settings
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Profile Image Section */}
        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8
                       border border-blue-500/20">
          <h2 className="text-xl font-semibold text-white mb-6">Profile Image</h2>
          <div className="flex items-center gap-8">
            <div className="relative">
              <Image
                src={profile.image}
                alt="Profile"
                width={100}
                height={100}
                className="rounded-full"
              />
              <button
                type="button"
                className="absolute bottom-0 right-0 p-2 rounded-full
                           bg-blue-600 text-white hover:bg-blue-700
                           shadow-[0_0_15px_rgba(37,99,235,0.2)]"
              >
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <div className="text-sm text-blue-200/70">
              Recommended: Square image, at least 400x400px
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8
                       border border-blue-500/20">
          <h2 className="text-xl font-semibold text-white mb-6">Personal Information</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                value={profile.name}
                onChange={e => setProfile({...profile, name: e.target.value})}
                className="bg-black/20 border-blue-500/20 text-white
                          focus:border-blue-500/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={e => setProfile({...profile, email: e.target.value})}
                className="bg-black/20 border-blue-500/20 text-white
                          focus:border-blue-500/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={profile.phone}
                onChange={e => setProfile({...profile, phone: e.target.value})}
                className="bg-black/20 border-blue-500/20 text-white
                          focus:border-blue-500/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="field">Field of Study</Label>
              <Input
                id="field"
                value={profile.field}
                onChange={e => setProfile({...profile, field: e.target.value})}
                className="bg-black/20 border-blue-500/20 text-white
                          focus:border-blue-500/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="university">University</Label>
              <Input
                id="university"
                value={profile.university}
                onChange={e => setProfile({...profile, university: e.target.value})}
                className="bg-black/20 border-blue-500/20 text-white
                          focus:border-blue-500/50"
              />
            </div>
          </div>
        </div>

        {/* Bio Section */}
        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8
                       border border-blue-500/20">
          <h2 className="text-xl font-semibold text-white mb-6">Bio</h2>
          <div className="space-y-2">
            <Label htmlFor="bio">About You</Label>
            <Textarea
              id="bio"
              value={profile.bio}
              onChange={e => setProfile({...profile, bio: e.target.value})}
              className="min-h-[100px] bg-black/20 border-blue-500/20 text-white
                        focus:border-blue-500/50"
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8
                       border border-blue-500/20">
          <h2 className="text-xl font-semibold text-white mb-6">Social Links</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="github">GitHub Profile</Label>
              <Input
                id="github"
                value={profile.github}
                onChange={e => setProfile({...profile, github: e.target.value})}
                className="bg-black/20 border-blue-500/20 text-white
                          focus:border-blue-500/50"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="linkedin">LinkedIn Profile</Label>
              <Input
                id="linkedin"
                value={profile.linkedin}
                onChange={e => setProfile({...profile, linkedin: e.target.value})}
                className="bg-black/20 border-blue-500/20 text-white
                          focus:border-blue-500/50"
              />
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-blue-600 hover:bg-blue-700 text-white
                     shadow-[0_0_15px_rgba(37,99,235,0.2)]"
          >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Save Changes
          </Button>
        </div>
      </form>
    </div>
  )
} 