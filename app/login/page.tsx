import { AuthForm } from "@/components/auth/auth-form"
import { Logo } from "@/components/ui/logo"
import { ModeToggle } from "@/components/theme-toggle"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex items-center justify-between p-4 md:p-6">
        <Link href="/">
          <Logo />
        </Link>
        <ModeToggle />
      </header>
      <main className="flex-1 flex items-center justify-center p-4 md:p-6">
        <AuthForm />
      </main>
      <footer className="p-4 md:p-6 text-center text-sm text-muted-foreground">
        © 2023 PrepIQ. All rights reserved.
      </footer>
    </div>
  )
}
