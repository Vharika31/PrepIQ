import type { Metadata } from "next"
import { MainNav } from "@/components/layout/main-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Search, ThumbsDown, ThumbsUp } from "lucide-react"

export const metadata: Metadata = {
  title: "Mentorship - PrepIQ",
  description: "Connect with mentors and get guidance for your placement journey",
}

export default function MentorshipPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mentorship Forum</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Connect with seniors and alumni who can guide you through your placement journey
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search questions..."
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
                  <TabsTrigger value="all">All Questions</TabsTrigger>
                  <TabsTrigger value="popular">Popular</TabsTrigger>
                  <TabsTrigger value="unanswered">Unanswered</TabsTrigger>
                </TabsList>
              </Tabs>

              <Button>
                <MessageSquare className="mr-2 h-4 w-4" />
                Ask a Question
              </Button>
            </div>

            <div className="grid gap-6">
              {[
                {
                  title: "How to prepare for Google's technical interview?",
                  description:
                    "I have an upcoming interview with Google for a Software Engineer role. What topics should I focus on and how should I structure my preparation?",
                  author: "Rahul S.",
                  tags: ["Google", "Interview", "DSA"],
                  upvotes: 24,
                  comments: 8,
                  time: "2 days ago",
                },
                {
                  title: "Resume review for Amazon application",
                  description:
                    "I'm applying for an SDE role at Amazon. Could someone review my resume and provide feedback on how to improve it?",
                  author: "Ananya P.",
                  tags: ["Amazon", "Resume", "SDE"],
                  upvotes: 18,
                  comments: 6,
                  time: "3 days ago",
                },
                {
                  title: "System design resources for interviews",
                  description:
                    "What are the best resources to learn system design concepts for technical interviews? Looking for books, courses, or websites.",
                  author: "Vikram K.",
                  tags: ["System Design", "Resources", "Interview"],
                  upvotes: 32,
                  comments: 12,
                  time: "1 week ago",
                },
                {
                  title: "How to negotiate salary offers?",
                  description:
                    "I received an offer from a tech company but the salary is lower than expected. How should I negotiate without risking the offer?",
                  author: "Priya S.",
                  tags: ["Negotiation", "Salary", "Offer"],
                  upvotes: 29,
                  comments: 15,
                  time: "1 week ago",
                },
                {
                  title: "Balancing final semester and placement preparation",
                  description:
                    "How do I effectively manage my time between final semester projects and placement preparation? Need advice on creating a schedule.",
                  author: "Arjun R.",
                  tags: ["Time Management", "Preparation", "Final Year"],
                  upvotes: 15,
                  comments: 7,
                  time: "2 weeks ago",
                },
              ].map((question, i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl">{question.title}</CardTitle>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ThumbsUp className="h-4 w-4" />
                        </Button>
                        <span className="text-sm font-medium">{question.upvotes}</span>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <ThumbsDown className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <CardDescription className="text-base mt-2">{question.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {question.tags.map((tag, j) => (
                        <Badge key={j} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {i === 0 && (
                      <div className="mt-4 space-y-4">
                        <div className="flex items-start gap-4 rounded-lg border p-4">
                          <Avatar>
                            <AvatarFallback>MS</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium">Manish Singh</span>
                              <Badge className="bg-primary">Alumni</Badge>
                              <span className="text-xs text-muted-foreground">1 day ago</span>
                            </div>
                            <p className="text-sm">
                              For Google interviews, focus heavily on data structures and algorithms. Practice problems
                              on LeetCode, especially medium to hard difficulty. Also, understand system design concepts
                              and be prepared for behavioral questions based on their leadership principles. I'd
                              recommend "Cracking the Coding Interview" book and AlgoExpert platform.
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <Button variant="ghost" size="sm" className="h-7 px-2">
                                <ThumbsUp className="mr-1 h-3 w-3" />
                                <span className="text-xs">12</span>
                              </Button>
                              <Button variant="ghost" size="sm" className="h-7 px-2">
                                <MessageSquare className="mr-1 h-3 w-3" />
                                <span className="text-xs">Reply</span>
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start gap-4 rounded-lg border p-4 ml-12">
                          <Avatar>
                            <AvatarFallback>RS</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium">Rahul S.</span>
                              <span className="text-xs text-muted-foreground">1 day ago</span>
                            </div>
                            <p className="text-sm">
                              Thank you for the detailed response! Do you have any specific LeetCode problem sets you'd
                              recommend focusing on?
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <Button variant="ghost" size="sm" className="h-7 px-2">
                                <ThumbsUp className="mr-1 h-3 w-3" />
                                <span className="text-xs">3</span>
                              </Button>
                              <Button variant="ghost" size="sm" className="h-7 px-2">
                                <MessageSquare className="mr-1 h-3 w-3" />
                                <span className="text-xs">Reply</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarFallback>{question.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm">{question.author}</span>
                      <span className="text-xs text-muted-foreground">• {question.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{question.comments} comments</span>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button variant="outline">Load More</Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Top Mentors</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Learn from experienced professionals and alumni
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                {[
                  {
                    name: "Manish Singh",
                    role: "Software Engineer at Google",
                    batch: "2020",
                    contributions: 48,
                  },
                  {
                    name: "Priya Sharma",
                    role: "Product Manager at Amazon",
                    batch: "2019",
                    contributions: 36,
                  },
                  {
                    name: "Vikram Reddy",
                    role: "Data Scientist at Microsoft",
                    batch: "2021",
                    contributions: 29,
                  },
                  {
                    name: "Neha Gupta",
                    role: "SDE-2 at Flipkart",
                    batch: "2018",
                    contributions: 42,
                  },
                ].map((mentor, i) => (
                  <Card key={i} className="flex flex-col items-center text-center p-6">
                    <Avatar className="h-20 w-20 mb-4">
                      <AvatarFallback className="text-lg">
                        {mentor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-lg">{mentor.name}</CardTitle>
                    <CardDescription className="mt-1">{mentor.role}</CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge>Alumni</Badge>
                      <Badge variant="outline">Batch {mentor.batch}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">{mentor.contributions} contributions</p>
                    <Button variant="outline" className="mt-4 w-full">
                      View Profile
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 md:py-12 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold">PrepIQ Mentorship</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2023 PrepIQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
