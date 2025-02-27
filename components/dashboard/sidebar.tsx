"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Home,
  FileText,
  Users,
  MessageSquare,
  Calendar,
  Settings,
  LogOut,
} from "lucide-react";

const studentItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "My Projects", href: "/dashboard/projects", icon: FileText },
  { name: "Mentors", href: "/dashboard/mentors", icon: Users },
  { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
  { name: "Events", href: "/dashboard/events", icon: Calendar },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

const mentorItems = [
  { name: "Dashboard", href: "/dashboard", icon: Home },
  { name: "My Students", href: "/dashboard/students", icon: Users },
  { name: "Projects", href: "/dashboard/projects", icon: FileText },
  { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
  { name: "Events", href: "/dashboard/events", icon: Calendar },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const isStudent = true; // This should be determined based on the user's role

  const sidebarItems = isStudent ? studentItems : mentorItems;

  return (
    <div className="hidden border-r bg-card/50 lg:block dark:bg-card/50">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/">
            <span className="text-lg font-bold">NextGen-Vanguard</span>
          </Link>
        </div>
        <ScrollArea className="flex-1 px-4">
          <div className="space-y-2 py-4">
            {sidebarItems.map((item) => (
              <Button
                key={item.href}
                variant={pathname === item.href ? "secondary" : "ghost"}
                className="w-full justify-start"
                asChild
              >
                <Link href={item.href}>
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            ))}
          </div>
        </ScrollArea>
        <div className="mt-auto p-4">
          <Button variant="outline" className="w-full justify-start" asChild>
            <Link href="/logout">
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
