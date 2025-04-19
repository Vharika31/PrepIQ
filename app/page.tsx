import Link from "next/link"
import { MainNav } from "@/components/layout/main-nav"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/ui/logo"
import { BookOpen, Building2, FileText, GraduationCap, LightbulbIcon, MessageSquare, TrendingUp } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Crack Your Dream Placement with AI-powered PrepIQ
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Personalized career guidance, roadmap sharing, mentorship, and industry insights — all in one
                  platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/login">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Get Started
                  </Button>
                </Link>
                <Link href="/roadmaps">
                  <Button size="lg" variant="outline">
                    Explore Roadmaps
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[500px] aspect-video rounded-xl overflow-hidden bg-muted/50 flex items-center justify-center">
                <LightbulbIcon className="h-24 w-24 text-accent opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Features that Empower Your Placement Journey
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                PrepIQ combines AI-powered tools with community knowledge to help you land your dream job.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">AI Resume Review</h3>
              <p className="text-center text-muted-foreground">
                Get instant feedback on your resume with AI-powered analysis and improvement suggestions.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Roadmap Library</h3>
              <p className="text-center text-muted-foreground">
                Access proven preparation roadmaps from students who secured placements at top companies.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Company Insights</h3>
              <p className="text-center text-muted-foreground">
                Stay updated with the latest hiring trends, job openings, and company-specific preparation guides.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Mentorship</h3>
              <p className="text-center text-muted-foreground">
                Connect with seniors and alumni who can guide you through your placement journey.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Personalized Guidance</h3>
              <p className="text-center text-muted-foreground">
                Get AI-powered recommendations tailored to your skills, interests, and career goals.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="rounded-full bg-primary/10 p-3">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Placement Statistics</h3>
              <p className="text-center text-muted-foreground">
                Track placement trends and success rates to make informed career decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Success Stories</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from students who achieved their dream placements with PrepIQ.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
            <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  "PrepIQ's roadmap library and AI tools helped me secure a position at Google. The personalized
                  guidance was invaluable."
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <div className="rounded-full bg-primary/10 p-1 h-10 w-10 flex items-center justify-center">
                  <span className="text-primary font-semibold">RS</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Rahul Sharma</p>
                  <p className="text-xs text-muted-foreground">Google, 2023 Batch</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  "The mentorship program connected me with alumni who guided me through the entire interview process at
                  Amazon."
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <div className="rounded-full bg-primary/10 p-1 h-10 w-10 flex items-center justify-center">
                  <span className="text-primary font-semibold">AP</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Ananya Patel</p>
                  <p className="text-xs text-muted-foreground">Amazon, 2023 Batch</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  "PrepIQ's company insights and AI resume review gave me the edge I needed to stand out at Microsoft."
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-4">
                <div className="rounded-full bg-primary/10 p-1 h-10 w-10 flex items-center justify-center">
                  <span className="text-primary font-semibold">VK</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Vikram Kumar</p>
                  <p className="text-xs text-muted-foreground">Microsoft, 2022 Batch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Placement Journey?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join PrepIQ today and take the first step towards your dream career.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/login">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 md:py-12 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
            <Logo />
            <p className="text-sm text-muted-foreground">© 2023 PrepIQ. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Terms
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
