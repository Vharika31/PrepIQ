"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import {
  BookOpen,
  BriefcaseIcon,
  Building2,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  MessageSquare,
  Settings,
  Users,
} from "lucide-react"
import { createClient } from "@/lib/supabase/client"
import { useRouter } from "next/navigation"

interface SidebarNavProps {
  role: "student" | "faculty" | "tnp"
}

export function DashboardSidebar({ role }: SidebarNavProps) {
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  // Define navigation items based on role
  const getNavItems = () => {
    const baseItems = [
      {
        name: "Dashboard",
        href: `/dashboard/${role}`,
        icon: LayoutDashboard,
      },
    ]

    const studentItems = [
      {
        name: "Roadmaps",
        href: "/roadmaps",
        icon: BookOpen,
      },
      {
        name: "AI Tools",
        href: "/ai-tools",
        icon: GraduationCap,
      },
      {
        name: "Mentorship",
        href: "/mentorship",
        icon: MessageSquare,
      },
      {
        name: "Companies",
        href: "/companies",
        icon: Building2,
      },
    ]

    const facultyItems = [
      {
        name: "Student Achievements",
        href: "/dashboard/faculty/achievements",
        icon: Users,
      },
      {
        name: "Roadmap Approvals",
        href: "/dashboard/faculty/roadmaps",
        icon: BookOpen,
      },
      {
        name: "Post Event",
        href: "/dashboard/faculty/events",
        icon: BriefcaseIcon,
      },
    ]

    const tnpItems = [
      {
        name: "Job Updates",
        href: "/dashboard/tnp/jobs",
        icon: BriefcaseIcon,
      },
      {
        name: "Placement Stats",
        href: "/dashboard/tnp/stats",
        icon: GraduationCap,
      },
      {
        name: "Company Guides",
        href: "/dashboard/tnp/guides",
        icon: Building2,
      },
    ]

    const roleSpecificItems = {
      student: studentItems,
      faculty: facultyItems,
      tnp: tnpItems,
    }

    const settingsItem = [
      {
        name: "Settings",
        href: `/dashboard/${role}/settings`,
        icon: Settings,
      },
    ]

    return [...baseItems, ...roleSpecificItems[role], ...settingsItem]
  }

  const navItems = getNavItems()

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-between p-4">
        <Logo />
        <SidebarTrigger />
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-[calc(100vh-8rem)]">
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.name}>
                  <Link href={item.href}>
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <Button variant="outline" className="w-full justify-start" onClick={handleSignOut}>
          <LogOut className="mr-2 h-4 w-4" />
          Sign out
        </Button>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
