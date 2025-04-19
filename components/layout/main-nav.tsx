"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Logo } from "@/components/ui/logo"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme-toggle"

export function MainNav() {
  const pathname = usePathname()

  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Roadmaps",
      href: "/roadmaps",
    },
    {
      name: "AI Tools",
      href: "/ai-tools",
    },
    {
      name: "Mentorship",
      href: "/mentorship",
    },
    {
      name: "Companies",
      href: "/companies",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="hidden md:block">
            <Logo />
          </Link>
          <Link href="/" className="md:hidden">
            <Logo size="sm" />
          </Link>
          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <Link href="/login">
            <Button variant="outline" size="sm" className="hidden md:inline-flex">
              Login
            </Button>
          </Link>
          <Link href="/login">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
