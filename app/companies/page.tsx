import type { Metadata } from "next"
import { MainNav } from "@/components/layout/main-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Building2, ExternalLink, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Companies - PrepIQ",
  description: "Explore company trends and placement opportunities",
}

export default function CompaniesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Company Trends & Insights
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Stay updated with the latest hiring trends and company information
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="hiring" className="space-y-8">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-3">
                <TabsTrigger value="hiring">Hiring Companies</TabsTrigger>
                <TabsTrigger value="roles">Trending Roles</TabsTrigger>
                <TabsTrigger value="news">Industry News</TabsTrigger>
              </TabsList>

              <TabsContent value="hiring" className="space-y-4">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      name: "Google",
                      logo: "G",
                      openings: 12,
                      roles: ["Software Engineer", "Product Manager", "UX Designer"],
                      deadline: "June 15, 2023",
                    },
                    {
                      name: "Amazon",
                      logo: "A",
                      openings: 18,
                      roles: ["SDE-1", "Data Engineer", "Business Analyst"],
                      deadline: "June 20, 2023",
                    },
                    {
                      name: "Microsoft",
                      logo: "M",
                      openings: 8,
                      roles: ["Software Developer", "Cloud Engineer", "Program Manager"],
                      deadline: "June 25, 2023",
                    },
                    {
                      name: "Adobe",
                      logo: "A",
                      openings: 6,
                      roles: ["Frontend Developer", "UI Engineer", "Product Designer"],
                      deadline: "June 30, 2023",
                    },
                    {
                      name: "Flipkart",
                      logo: "F",
                      openings: 10,
                      roles: ["SDE", "Data Scientist", "Business Analyst"],
                      deadline: "July 5, 2023",
                    },
                    {
                      name: "IBM",
                      logo: "I",
                      openings: 15,
                      roles: ["Software Engineer", "Cloud Architect", "Technical Consultant"],
                      deadline: "July 10, 2023",
                    },
                  ].map((company, i) => (
                    <Card key={i}>
                      <CardHeader className="flex flex-row items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                          <span className="text-xl font-bold text-primary">{company.logo}</span>
                        </div>
                        <div>
                          <CardTitle>{company.name}</CardTitle>
                          <CardDescription>{company.openings} open positions</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium">Available Roles:</h4>
                          <ul className="space-y-1">
                            {company.roles.map((role, j) => (
                              <li key={j} className="text-sm flex items-center gap-2">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                {role}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-4 text-sm">
                          <span className="font-medium">Application Deadline:</span> {company.deadline}
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full">View Openings</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="roles" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Trending Job Roles</CardTitle>
                    <CardDescription>Most in-demand positions in the tech industry</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        {
                          role: "Full Stack Developer",
                          growth: "+24%",
                          skills: ["JavaScript", "React", "Node.js", "MongoDB"],
                          avgSalary: "₹12-18L",
                          companies: ["Google", "Amazon", "Microsoft", "Flipkart"],
                        },
                        {
                          role: "Data Scientist",
                          growth: "+32%",
                          skills: ["Python", "Machine Learning", "SQL", "Statistics"],
                          avgSalary: "₹14-22L",
                          companies: ["Amazon", "Microsoft", "IBM", "Walmart"],
                        },
                        {
                          role: "Cloud Engineer",
                          growth: "+28%",
                          skills: ["AWS", "Azure", "Docker", "Kubernetes"],
                          avgSalary: "₹10-16L",
                          companies: ["Amazon", "Microsoft", "Google", "IBM"],
                        },
                        {
                          role: "DevOps Engineer",
                          growth: "+20%",
                          skills: ["CI/CD", "Docker", "Kubernetes", "Terraform"],
                          avgSalary: "₹12-18L",
                          companies: ["Google", "Amazon", "Microsoft", "Adobe"],
                        },
                        {
                          role: "Machine Learning Engineer",
                          growth: "+35%",
                          skills: ["Python", "TensorFlow", "PyTorch", "Computer Vision"],
                          avgSalary: "₹16-25L",
                          companies: ["Google", "Microsoft", "Amazon", "NVIDIA"],
                        },
                      ].map((role, i) => (
                        <div key={i} className="rounded-lg border p-4">
                          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <h3 className="text-lg font-medium">{role.role}</h3>
                                <Badge className="bg-green-500">{role.growth}</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">Average Salary: {role.avgSalary}</p>
                            </div>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div>
                              <h4 className="text-sm font-medium mb-2">Required Skills:</h4>
                              <div className="flex flex-wrap gap-2">
                                {role.skills.map((skill, j) => (
                                  <Badge key={j} variant="outline">
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium mb-2">Top Hiring Companies:</h4>
                              <div className="flex flex-wrap gap-2">
                                {role.companies.map((company, j) => (
                                  <Badge key={j} variant="secondary">
                                    {company}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="news" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Industry News & Updates</CardTitle>
                    <CardDescription>Latest trends and news from the tech industry</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {[
                        {
                          title: "Google Announces Expansion of India Engineering Center",
                          summary:
                            "Google plans to hire 1000+ engineers in India over the next two years, focusing on AI and cloud technologies.",
                          source: "Tech Times",
                          date: "May 15, 2023",
                        },
                        {
                          title: "Amazon Launches New Graduate Hiring Program",
                          summary:
                            "Amazon's new program aims to recruit fresh graduates from tier 2 and tier 3 colleges across India.",
                          source: "Business Insider",
                          date: "May 12, 2023",
                        },
                        {
                          title: "Tech Salaries in India See 20% Growth in 2023",
                          summary:
                            "A recent survey shows that tech salaries in India have increased by an average of 20% compared to last year.",
                          source: "Economic Times",
                          date: "May 10, 2023",
                        },
                        {
                          title: "Microsoft Expands Azure Skills Training Initiative",
                          summary:
                            "Microsoft's program will offer free cloud computing training to 100,000 students across India.",
                          source: "Tech Crunch",
                          date: "May 8, 2023",
                        },
                        {
                          title: "AI and ML Skills Most In-Demand for 2023 Graduates",
                          summary:
                            "Industry report highlights artificial intelligence and machine learning as the most sought-after skills for new graduates.",
                          source: "Education Times",
                          date: "May 5, 2023",
                        },
                      ].map((news, i) => (
                        <div key={i} className="rounded-lg border p-4">
                          <h3 className="text-lg font-medium">{news.title}</h3>
                          <p className="text-sm text-muted-foreground mt-2">{news.summary}</p>
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{news.source}</span>
                              <span>•</span>
                              <span>{news.date}</span>
                            </div>
                            <Button variant="ghost" size="sm" className="gap-1">
                              <span>Read More</span>
                              <ExternalLink className="h-3 w-3" />
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
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Placement Statistics</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Overview of placement trends and statistics
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-4xl">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Placement Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary">65%</div>
                    <p className="text-sm text-muted-foreground mt-1">+5% from last year</p>
                    <div className="mt-4 h-2 w-full rounded-full bg-muted">
                      <div className="h-full rounded-full bg-primary" style={{ width: "65%" }}></div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Average Package</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary">₹8.5L</div>
                    <p className="text-sm text-muted-foreground mt-1">+12% from last year</p>
                    <div className="flex items-center gap-1 mt-4">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-green-500">Increasing trend</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Top Recruiters</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-primary">24</div>
                    <p className="text-sm text-muted-foreground mt-1">Companies visited campus</p>
                    <div className="flex items-center gap-1 mt-4">
                      <Building2 className="h-4 w-4 text-primary" />
                      <span className="text-sm">Including 8 Fortune 500</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 md:py-12 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold">PrepIQ Companies</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2023 PrepIQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
