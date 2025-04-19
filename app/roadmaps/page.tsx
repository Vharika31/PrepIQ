import type { Metadata } from "next"
import Link from "next/link"
import { MainNav } from "@/components/layout/main-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Eye, Filter, Search, Upload } from "lucide-react"

export const metadata: Metadata = {
  title: "Roadmaps - PrepIQ",
  description: "Explore preparation roadmaps from successful students",
}

export default function RoadmapsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Learn How They Got There
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore roadmaps from students who secured placements at top companies
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search roadmaps..."
                    className="w-full bg-background pl-8 shadow-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
              <Tabs defaultValue="all" className="w-full md:w-auto">
                <TabsList>
                  <TabsTrigger value="all">All Roadmaps</TabsTrigger>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="recent">Recent</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" className="h-9">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Link href="/roadmaps/upload">
                  <Button className="h-9">
                    <Upload className="mr-2 h-4 w-4" />
                    Upload Roadmap
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: "Rahul Sharma",
                  company: "Google",
                  role: "Software Engineer",
                  tags: ["React", "Node.js", "DSA"],
                  views: 1245,
                },
                {
                  name: "Ananya Patel",
                  company: "Amazon",
                  role: "SDE-1",
                  tags: ["Java", "System Design", "AWS"],
                  views: 987,
                },
                {
                  name: "Vikram Kumar",
                  company: "Microsoft",
                  role: "Software Developer",
                  tags: ["C#", ".NET", "Azure"],
                  views: 756,
                },
                {
                  name: "Priya Singh",
                  company: "Adobe",
                  role: "Frontend Developer",
                  tags: ["JavaScript", "React", "UI/UX"],
                  views: 632,
                },
                {
                  name: "Arjun Reddy",
                  company: "Flipkart",
                  role: "Backend Developer",
                  tags: ["Java", "Spring Boot", "Microservices"],
                  views: 589,
                },
                {
                  name: "Neha Gupta",
                  company: "IBM",
                  role: "Data Scientist",
                  tags: ["Python", "ML", "Statistics"],
                  views: 478,
                },
              ].map((roadmap, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">
                      {roadmap.role} at {roadmap.company}
                    </CardTitle>
                    <CardDescription>By {roadmap.name}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {roadmap.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center p-4 pt-0">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Eye className="mr-1 h-4 w-4" />
                      {roadmap.views} views
                    </div>
                    <Button variant="outline" size="sm">
                      <BookOpen className="mr-2 h-4 w-4" />
                      View Roadmap
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline">Load More</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 md:py-12 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold">PrepIQ Roadmaps</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2023 PrepIQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
