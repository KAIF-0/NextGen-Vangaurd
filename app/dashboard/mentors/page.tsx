import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { MessageSquare, Star } from "lucide-react"

const MENTORS = [
  {
    id: 1,
    name: "Dr. Sarah Chen",
    image: "/mentor-images/sarah.jpg",
    qualification: "Ph.D. in Computer Science",
    expertise: "Computer Vision & Deep Learning",
    industry: "Research Scientist at Google AI",
    rating: 4.9,
    isActive: true,
    specializations: ["Neural Networks", "Computer Vision", "PyTorch"]
  },
  {
    id: 2,
    name: "James Wilson",
    image: "/mentor-images/james.jpg",
    qualification: "M.S. in AI & Machine Learning",
    expertise: "Natural Language Processing",
    industry: "Lead AI Engineer at OpenAI",
    rating: 4.8,
    isActive: true,
    specializations: ["NLP", "BERT", "Transformers"]
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    image: "/mentor-images/emily.jpg",
    qualification: "Ph.D. in Data Science",
    expertise: "Machine Learning & Statistics",
    industry: "Principal Data Scientist at Microsoft",
    rating: 4.7,
    isActive: false,
    specializations: ["Statistical Analysis", "Python", "Scikit-learn"]
  }
]

function MentorCard({ mentor }: { mentor: typeof MENTORS[0] }) {
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
        
        {/* Active Status Badge */}
        {mentor.isActive && (
          <div className="absolute top-4 right-4 bg-green-500/90 text-white px-3 py-1 rounded-full
                         flex items-center gap-1 text-sm font-medium backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-green-200 animate-pulse" />
            Active Now
          </div>
        )}
      </div>

      <div className="p-6">
        {/* Mentor Info */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-semibold text-white
                         drop-shadow-[0_1px_5px_rgba(37,99,235,0.2)]">
            {mentor.name}
          </h3>
          <div className="flex items-center text-yellow-400">
            <Star className="h-4 w-4 fill-current" />
            <span className="ml-1 text-sm">{mentor.rating}</span>
          </div>
        </div>

        <p className="text-blue-400 text-sm font-medium mb-1">
          {mentor.qualification}
        </p>
        <p className="text-blue-200/70 text-sm mb-4">
          {mentor.industry}
        </p>

        {/* Specializations */}
        <div className="flex flex-wrap gap-2 mb-6">
          {mentor.specializations.map((spec, index) => (
            <span key={index}
                  className="bg-blue-500/10 text-blue-300 text-xs px-2 py-1 rounded-full">
              {spec}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex gap-3">
          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white
                           shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                  size="sm">
            <MessageSquare className="h-4 w-4 mr-2" />
            Message
          </Button>
        </div>
      </div>
    </div>
  )
}

export default function MentorsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8
                      border border-blue-500/20 shadow-glow">
        <h1 className="text-3xl font-bold text-white
                       drop-shadow-[0_2px_10px_rgba(37,99,235,0.2)]">
          My Mentors
        </h1>
        <p className="mt-2 text-blue-200/70">
          Connect with your assigned mentors and track your learning progress
        </p>
      </div>

      {/* Mentors Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {MENTORS.map((mentor) => (
          <MentorCard key={mentor.id} mentor={mentor} />
        ))}
      </div>
    </div>
  )
} 