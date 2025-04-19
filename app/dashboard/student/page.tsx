import type { Metadata } from "next"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BookOpen, BriefcaseIcon, FileText, GraduationCap, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Student Dashboard - PrepIQ",
  description: "Manage your placement preparation journey",
}

export default async function StudentDashboard() {
  const supabase = createClient()

  // Get user profile
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const { data: profile } = await supabase.from("profiles").select("full_name").eq("id", user?.id).single()

  const userName = profile?.full_name || "Student"

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome back, {userName}!</h1>
        <p className="text-muted-foreground">Track your placement preparation progress and explore resources.</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="roadmaps">My Roadmaps</TabsTrigger>
          <TabsTrigger value="activities">Recent Activities</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Roadmaps Followed</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">+1 from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Resume Score</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">85%</div>
                <p className="text-xs text-muted-foreground">+5% from last review</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Skills Acquired</CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+3 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Job Matches</CardTitle>
                <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7</div>
                <p className="text-xs text-muted-foreground">Based on your profile</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recommended Roadmaps</CardTitle>
                <CardDescription>Based on your skills and interests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 rounded-lg border p-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <TrendingUp className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {i === 1
                            ? "Full Stack Developer at FAANG"
                            : i === 2
                              ? "Data Scientist Career Path"
                              : "Cloud Engineer Roadmap"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {i === 1
                            ? "React, Node.js, AWS"
                            : i === 2
                              ? "Python, ML, Statistics"
                              : "AWS, Docker, Kubernetes"}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Placement drives and workshops</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="flex items-center gap-4 rounded-lg border p-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <BriefcaseIcon className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {i === 1 ? "Amazon Recruitment Drive" : "Resume Building Workshop"}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {i === 1 ? "May 15, 2023 • 10:00 AM" : "May 20, 2023 • 2:00 PM"}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        RSVP
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="roadmaps" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>
                    {i === 1
                      ? "My Web Development Journey"
                      : i === 2
                        ? "Data Science Preparation"
                        : "Cloud Engineering Path"}
                  </CardTitle>
                  <CardDescription>
                    {i === 1
                      ? "Started on April 10, 2023"
                      : i === 2
                        ? "Started on March 5, 2023"
                        : "Started on May 1, 2023"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span className="font-medium">{i === 1 ? "65%" : i === 2 ? "40%" : "20%"}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{
                          width: i === 1 ? "65%" : i === 2 ? "40%" : "20%",
                        }}
                      ></div>
                    </div>
                    <div className="flex gap-2 flex-wrap mt-4">
                      {(i === 1
                        ? ["React", "Node.js", "MongoDB"]
                        : i === 2
                          ? ["Python", "ML", "Statistics"]
                          : ["AWS", "Docker", "Kubernetes"]
                      ).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="activities" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activities</CardTitle>
              <CardDescription>Your latest actions and achievements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    action: "Completed React module in Web Development Roadmap",
                    date: "2 days ago",
                    icon: GraduationCap,
                  },
                  {
                    action: "Updated resume with new project experience",
                    date: "5 days ago",
                    icon: FileText,
                  },
                  {
                    action: "Started following Amazon SDE Roadmap",
                    date: "1 week ago",
                    icon: BookOpen,
                  },
                  {
                    action: "Attended Mock Interview Session",
                    date: "2 weeks ago",
                    icon: BriefcaseIcon,
                  },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start gap-4 rounded-lg border p-3">
                    <div className="rounded-full bg-primary/10 p-2 mt-0.5">
                      <activity.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.date}</p>
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
