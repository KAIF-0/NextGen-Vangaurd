import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const activities = [
  {
    id: 1,
    user: {
      name: "Olivia Martin",
      avatar: "/avatars/01.png",
      email: "o.martin@email.com",
    },
    action: "Submitted a new project",
    date: "2 hours ago",
  },
  {
    id: 2,
    user: {
      name: "William Kim",
      avatar: "/avatars/02.png",
      email: "will@email.com",
    },
    action: "Connected with a mentor",
    date: "1 day ago",
  },
  {
    id: 3,
    user: {
      name: "Sofia Davis",
      avatar: "/avatars/03.png",
      email: "sofia.davis@email.com",
    },
    action: "Received funding for project",
    date: "3 days ago",
  },
  {
    id: 4,
    user: {
      name: "Alex Johnson",
      avatar: "/avatars/04.png",
      email: "alex.j@email.com",
    },
    action: "Updated project status",
    date: "5 days ago",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activities.map((activity) => (
        <div key={activity.id} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.user.avatar} alt="Avatar" />
            <AvatarFallback>
              {activity.user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">{activity.user.name}</p>
            <p className="text-sm text-muted-foreground">{activity.action}</p>
            <p className="text-xs text-muted-foreground">{activity.date}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

