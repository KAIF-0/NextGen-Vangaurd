"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Calendar, MapPin, Users, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type EventStatus = "upcoming" | "ongoing" | "closed" | "completed";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  industry: string;
  image: string;
  status: EventStatus;
  registrationCount: number;
  maxCapacity: number;
}

const DUMMY_EVENTS: Event[] = [
  {
    id: 1,
    title: "AI in Healthcare Summit 2024",
    description:
      "Join leading healthcare professionals and AI experts discussing the future of medical diagnostics.",
    date: "2024-04-15",
    time: "09:00 AM - 05:00 PM",
    venue: "Tech Hub Convention Center, San Francisco",
    industry: "Healthcare",
    image: "/event-images/ai-healthcare.jpg",
    status: "upcoming",
    registrationCount: 180,
    maxCapacity: 250,
  },
  {
    id: 2,
    title: "Machine Learning Workshop Series",
    description:
      "Hands-on workshop covering advanced ML techniques and practical implementations.",
    date: "2024-03-20",
    time: "02:00 PM - 06:00 PM",
    venue: "Virtual Event",
    industry: "Education",
    image: "/event-images/ml-workshop.jpg",
    status: "ongoing",
    registrationCount: 450,
    maxCapacity: 500,
  },
  {
    id: 3,
    title: "AI Ethics Conference 2024",
    description:
      "Exploring ethical considerations in AI development and deployment.",
    date: "2024-05-10",
    time: "10:00 AM - 04:00 PM",
    venue: "Global AI Center, New York",
    industry: "Ethics & Governance",
    image: "/event-images/ai-ethics.jpg",
    status: "upcoming",
    registrationCount: 120,
    maxCapacity: 300,
  },
];

const STATUS_STYLES = {
  upcoming: "bg-green-500/20 text-green-400",
  ongoing: "bg-blue-500/20 text-blue-400",
  closed: "bg-red-500/20 text-red-400",
  completed: "bg-gray-500/20 text-gray-400",
};

const STATUS_LABELS = {
  upcoming: "Registration Open",
  ongoing: "Event in Progress",
  closed: "Registration Closed",
  completed: "Event Completed",
};

function EventCard({ event }: { event: Event }) {
  const isRegistrationOpen = event.status === "upcoming";
  const statusStyle = STATUS_STYLES[event.status];
  const statusLabel = STATUS_LABELS[event.status];

  return (
    <div
      className="bg-black/30 backdrop-blur-md rounded-xl overflow-hidden
                    border border-blue-500/20 hover:border-blue-500/40
                    transform hover:-translate-y-1 transition-all duration-300
                    shadow-glow hover:shadow-[0_0_25px_rgba(37,99,235,0.2)]"
    >
      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyle}`}
        >
          {statusLabel}
        </span>
      </div>

      {/* Image Section */}
      <div className="relative h-48 w-full">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-blue-400 text-sm mb-2">
          <span className="px-2 py-1 rounded-full bg-blue-500/10">
            {event.industry}
          </span>
        </div>

        <h3
          className="text-xl font-semibold text-white mb-2
                       drop-shadow-[0_1px_5px_rgba(37,99,235,0.2)]"
        >
          {event.title}
        </h3>

        <p className="text-blue-100/80 text-sm mb-4 line-clamp-2">
          {event.description}
        </p>

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-blue-200/90 text-sm">
            <Calendar className="h-4 w-4" />
            <span>
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="flex items-center gap-2 text-blue-200/90 text-sm">
            <Clock className="h-4 w-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center gap-2 text-blue-200/90 text-sm">
            <MapPin className="h-4 w-4" />
            <span>{event.venue}</span>
          </div>
          <div className="flex items-center gap-2 text-blue-200/90 text-sm">
            <Users className="h-4 w-4" />
            <span>
              {event.registrationCount}/{event.maxCapacity} Registered
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="flex-1 border-blue-400/30 text-blue-100 
                           hover:bg-blue-500/10 hover:border-blue-400/50"
          >
            <Link href={`/events/${event.id}`}>View Details</Link>
          </Button>
          {isRegistrationOpen && (
            <Button
              size="sm"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white
                             shadow-[0_0_15px_rgba(37,99,235,0.2)]"
            >
              Register Now
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = DUMMY_EVENTS.filter(
    (event) =>
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.industry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gradient-radial-complex bg-fixed min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div
          className="bg-black/30 backdrop-blur-md rounded-2xl p-8 mb-12
                      border border-blue-500/20 shadow-glow"
        >
          <h1
            className="text-4xl font-bold text-white 
                         drop-shadow-[0_2px_10px_rgba(37,99,235,0.2)]"
          >
            Upcoming Events
          </h1>

          {/* Search Bar */}
          <div className="mt-6 relative max-w-2xl">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-blue-400/60" />
            </div>
            <input
              type="text"
              placeholder="Search events by title, description, or industry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-black/20 border border-blue-500/20 
                         rounded-xl text-white placeholder:text-blue-200/50
                         focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20
                         transition-all duration-300"
            />
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* No Results Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center text-blue-200/70 py-12">
            No events found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  );
}
