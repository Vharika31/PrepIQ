import type { Metadata } from "next"
import { createClient } from "@/lib/supabase/server"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { BookOpen, CheckCircle, FileText, GraduationCap, Plus, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Faculty Dashboard - PrepIQ",
  description: "Manage student achievements and roadmaps",
}

export default async function FacultyDashboard() {
  const supabase = createClient()

  // Get user profile
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const { data: profile } = await supabase.from("profiles").select("full_name").eq("id", user?.id).single()

  const userName = profile?.full_name || "Faculty"

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Welcome, Prof. {userName}!</h1>
        <p className="text-muted-foreground">Manage student achievements and roadmap approvals.</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="approvals">Roadmap Approvals</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
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
                <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">Roadmaps awaiting review</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">In the next 30 days</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader className="flex flex-row items-center justify-between space-y-0">
                <div>
                  <CardTitle>Student Achievements</CardTitle>
                  <CardDescription>Recent placements and certifications</CardDescription>
                </div>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Achievement
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Rahul Sharma",
                      achievement: "Placed at Google as Software Engineer",
                      date: "May 10, 2023",
                    },
                    {
                      name: "Ananya Patel",
                      achievement: "Placed at Amazon as SDE-1",
                      date: "May 5, 2023",
                    },
                    {
                      name: "Vikram Kumar",
                      achievement: "AWS Solutions Architect Certification",
                      date: "April 28, 2023",
                    },
                  ].map((achievement, i) => (
                    <div key={i} className="flex items-center gap-4 rounded-lg border p-3">
                      <div className="rounded-full bg-primary/10 p-2">
                        <GraduationCap className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">{achievement.name}</p>
                        <p className="text-xs">{achievement.achievement}</p>
                        <p className="text-xs text-muted-foreground">{achievement.date}</p>
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

        <TabsContent value="approvals" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Pending Roadmap Approvals</CardTitle>
              <CardDescription>Review and approve student roadmap submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <FileText className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {i === 1
                          ? "Full Stack Developer at FAANG"
                          : i === 2
                            ? "Data Scientist Career Path"
                            : "Cloud Engineer Roadmap"}
                      </p>
                      <p className="text-xs">
                        Submitted by: {i === 1 ? "Rahul Sharma" : i === 2 ? "Ananya Patel" : "Vikram Kumar"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Submitted on: {i === 1 ? "May 10, 2023" : i === 2 ? "May 8, 2023" : "May 5, 2023"}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        View
                      </Button>
                      <Button size="sm">Approve</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Manage placement events and workshops</CardDescription>
              </div>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Event
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Amazon Recruitment Drive",
                    date: "May 15, 2023",
                    time: "10:00 AM - 4:00 PM",
                    location: "Main Auditorium",
                  },
                  {
                    title: "Resume Building Workshop",
                    date: "May 20, 2023",
                    time: "2:00 PM - 4:00 PM",
                    location: "Seminar Hall",
                  },
                  {
                    title: "Mock Interview Session",
                    date: "May 25, 2023",
                    time: "11:00 AM - 3:00 PM",
                    location: "Conference Room",
                  },
                ].map((event, i) => (
                  <div key={i} className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <GraduationCap className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">{event.title}</p>
                      <p className="text-xs">
                        {event.date} • {event.time}
                      </p>
                      <p className="text-xs text-muted-foreground">Location: {event.location}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Edit
                      </Button>
                      <Button variant="outline" size="sm">
                        Cancel
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
