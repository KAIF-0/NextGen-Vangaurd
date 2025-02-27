"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react" // For demo purposes

const links = [
  {
    href: "/discover",
    label: "Discover",
  },
  {
    href: "/top-mentors",
    label: "Top Mentors",
  },
  {
    href: "/events",
    label: "Events",
  },
  {
    href: "/about",
    label: "About",
  },
]

export function MainNav() {
  // TODO: Replace with actual auth state
  const [isLoggedIn] = useState(true) // For demonstration

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="pl-4 font-bold">
          AI Mentorship
        </Link>

        <nav className="flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground/80"
            >
              {link.label}
            </Link>
          ))}
          {isLoggedIn && (
            <Link
              href="/dashboard"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Dashboard
            </Link>
          )}
        </nav>

        <div className="flex items-center justify-end space-x-4 pr-4">
          {isLoggedIn ? (
            <Button asChild variant="outline" 
                    className="border-blue-400/30 text-blue-100 
                             hover:bg-blue-500/10 hover:border-blue-400/50">
              <Link href="/dashboard">View Dashboard</Link>
            </Button>
          ) : (
            <>
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild className="bg-white text-blue-950 hover:bg-blue-50">
                <Link href="/signup">Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

