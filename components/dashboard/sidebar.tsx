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
  const isStudent = true;
  const sidebarItems = isStudent ? studentItems : mentorItems;

  return (
    <div className="hidden min-h-screen border-r bg-card/50 lg:block dark:bg-card/50">
      <div className="flex-col h-full gap-2">
        <div className="flex h-[60px] items-center border-b px-6">
          <Link
            className="flex items-center justify-start gap-2 font-semibold"
            href="/"
          >
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
      </div>
      <div className="p-4 absolute min-w-[43vh] bottom-3">
        <Button variant="outline" className="w-full justify-start" asChild>
          <Link href="/">
            <LogOut className="mr-2 h-4 w-4 " />
            Log out
          </Link>
        </Button>
      </div>
    </div>
  );
}
