import type { Metadata } from "next"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BookOpen, Building2, CheckCircle, Plus, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "T&P Dashboard - PrepIQ",
  description: "Manage placement activities and company updates",
}

export default async function TNPDashboard() {
  const supabase = createClient()

  // Get user profile
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const { data: profile } = await supabase.from("profiles").select("full_name").eq("id", user?.id).single()

  const userName = profile?.full_name || "T&P Officer"

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome, {userName}!</h1>
        <p className="text-muted-foreground">Manage placement activities and company updates.</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="jobs">Job Updates</TabsTrigger>
          <TabsTrigger value="companies">Companies</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Students</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">120</div>
                <p className="text-xs text-muted-foreground">Final year students</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Placed Students</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">78</div>
                <p className="text-xs text-muted-foreground">65% placement rate</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Companies</CardTitle>
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">Recruiting this season</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Package</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹8.5L</div>
                <p className="text-xs text-muted-foreground">+12% from last year</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle>Recent Placements</CardTitle>
                  <CardDescription>Latest student placements</CardDescription>
                </div>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Placement
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Rahul Sharma",
                      company: "Google",
                      role: "Software Engineer",
                      package: "₹24L",
                      date: "May 10, 2023",
                    },
                    {
                      name: "Ananya Patel",
                      company: "Amazon",
                      role: "SDE-1",
                      package: "₹21L",
                      date: "May 5, 2023",
                    },
                    {
                      name: "Vikram Kumar",
                      company: "Microsoft",
                      role: "Software Developer",
                      package: "₹18L",
                      date: "April 28, 2023",
                    },
                  ].map((placement, i) => (
                    <div key={i} className="flex items-center gap-4 rounded-lg border p-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <Building2 className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{placement.name}</p>
                        <p className="text-xs">
                          {placement.role} at {placement.company} • {placement.package}
                        </p>
                        <p className="text-xs text-muted-foreground">{placement.date}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Share
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Placement Statistics</CardTitle>
                <CardDescription>Current academic year</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { company: "Google", count: 5 },
                    { company: "Amazon", count: 8 },
                    { company: "Microsoft", count: 6 },
                    { company: "Other Tech", count: 59 },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="rounded-full bg-primary/10 p-1.5">
                          <div className="h-2 w-2 rounded-full bg-primary"></div>
                        </div>
                        <span className="text-sm font-medium">{stat.company}</span>
                      </div>
                      <span className="text-sm">{stat.count} students</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6">
                  <div className="flex justify-between text-sm">
                    <span>Overall Placement</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <div className="mt-2 h-2 w-full rounded-full bg-muted">
                    <div className="h-full rounded-full bg-primary" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="jobs" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Job Openings</CardTitle>
                <CardDescription>Manage current job opportunities</CardDescription>
              </div>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Job
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    company: "Google",
                    role: "Software Engineer",
                    location: "Bangalore",
                    package: "₹18-24L",
                    deadline: "May 20, 2023",
                  },
                  {
                    company: "Amazon",
                    role: "SDE-1",
                    location: "Hyderabad",
                    package: "₹16-22L",
                    deadline: "May 25, 2023",
                  },
                  {
                    company: "Microsoft",
                    role: "Software Developer",
                    location: "Bangalore",
                    package: "₹15-20L",
                    deadline: "May 30, 2023",
                  },
                ].map((job, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Building2 className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {job.role} at {job.company}
                      </p>
                      <p className="text-xs">
                        {job.location} • {job.package}
                      </p>
                      <p className="text-xs text-muted-foreground">Application Deadline: {job.deadline}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="companies" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Company Guides</CardTitle>
                <CardDescription>Preparation guides for top companies</CardDescription>
              </div>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Guide
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    company: "Google",
                    topics: "DSA, System Design, Behavioral",
                    updated: "May 1, 2023",
                  },
                  {
                    company: "Amazon",
                    topics: "Leadership Principles, DSA, System Design",
                    updated: "April 28, 2023",
                  },
                  {
                    company: "Microsoft",
                    topics: "DSA, Problem Solving, Coding",
                    updated: "April 25, 2023",
                  },
                ].map((guide, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <BookOpen className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">{guide.company} Interview Preparation Guide</p>
                      <p className="text-xs">Topics: {guide.topics}</p>
                      <p className="text-xs text-muted-foreground">Last Updated: {guide.updated}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
