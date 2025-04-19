import type { Metadata } from "next"
import { MainNav } from "@/components/layout/main-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, MessageSquare, Upload } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Tools - PrepIQ",
  description: "AI-powered tools for placement preparation",
}

export default function AIToolsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  AI-Powered Placement Tools
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Leverage artificial intelligence to enhance your placement preparation
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="resume" className="space-y-8">
              <TabsList className="w-full max-w-md mx-auto grid grid-cols-2">
                <TabsTrigger value="resume">Resume Analyzer</TabsTrigger>
                <TabsTrigger value="career">Career Bot</TabsTrigger>
              </TabsList>

              <TabsContent value="resume" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Resume Analyzer</CardTitle>
                    <CardDescription>
                      Get AI-powered feedback on your resume to improve your chances of landing interviews
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-8">
                      <div className="rounded-full bg-primary/10 p-3">
                        <FileText className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2 text-center">
                        <h3 className="text-lg font-medium">Upload your resume</h3>
                        <p className="text-sm text-muted-foreground">
                          Drag and drop your resume PDF or click to browse
                        </p>
                      </div>
                      <Button>
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Resume
                      </Button>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="text-lg font-medium mb-2">How it works</h3>
                      <ol className="space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                        <li>Upload your resume in PDF format</li>
                        <li>Our AI analyzes your resume against industry standards</li>
                        <li>Receive detailed feedback on strengths and areas for improvement</li>
                        <li>Get specific suggestions to enhance your resume</li>
                      </ol>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <p className="text-sm text-muted-foreground">Supported format: PDF</p>
                    <Button disabled>Analyze Resume</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Sample Analysis</CardTitle>
                    <CardDescription>Example of AI-generated resume feedback</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-4 rounded-lg border p-4">
                      <div>
                        <h4 className="text-sm font-medium">Strengths</h4>
                        <ul className="mt-2 space-y-2 text-sm">
                          <li className="flex items-start">
                            <div className="mr-2 mt-0.5 h-2 w-2 rounded-full bg-green-500"></div>
                            <span>Strong technical skills section with relevant technologies</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-0.5 h-2 w-2 rounded-full bg-green-500"></div>
                            <span>Well-structured project descriptions with clear outcomes</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-0.5 h-2 w-2 rounded-full bg-green-500"></div>
                            <span>Good use of action verbs to describe accomplishments</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium">Areas for Improvement</h4>
                        <ul className="mt-2 space-y-2 text-sm">
                          <li className="flex items-start">
                            <div className="mr-2 mt-0.5 h-2 w-2 rounded-full bg-red-500"></div>
                            <span>Quantify achievements with specific metrics and results</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-0.5 h-2 w-2 rounded-full bg-red-500"></div>
                            <span>Add more relevant keywords for ATS optimization</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-0.5 h-2 w-2 rounded-full bg-red-500"></div>
                            <span>Improve formatting consistency throughout the document</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium">Suggestions</h4>
                        <ul className="mt-2 space-y-2 text-sm">
                          <li className="flex items-start">
                            <div className="mr-2 mt-0.5 h-2 w-2 rounded-full bg-blue-500"></div>
                            <span>Add a brief professional summary highlighting your key strengths</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-0.5 h-2 w-2 rounded-full bg-blue-500"></div>
                            <span>Include relevant certifications and online courses</span>
                          </li>
                          <li className="flex items-start">
                            <div className="mr-2 mt-0.5 h-2 w-2 rounded-full bg-blue-500"></div>
                            <span>Tailor your resume for specific job descriptions</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="career" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Career Bot</CardTitle>
                    <CardDescription>
                      Chat with our AI assistant for personalized career guidance and advice
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="rounded-lg border h-[400px] overflow-hidden flex flex-col">
                      <div className="flex-1 p-4 overflow-y-auto space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="rounded-full bg-primary/10 p-2 h-8 w-8 flex items-center justify-center">
                            <MessageSquare className="h-4 w-4 text-primary" />
                          </div>
                          <div className="rounded-lg bg-muted p-3 text-sm max-w-[80%]">
                            <p>
                              Hello! I'm the PrepIQ Career Bot. How can I help with your placement preparation today?
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 justify-end">
                          <div className="rounded-lg bg-primary p-3 text-sm text-primary-foreground max-w-[80%]">
                            <p>What skills should I focus on for a software engineering role?</p>
                          </div>
                          <div className="rounded-full bg-accent p-2 h-8 w-8 flex items-center justify-center">
                            <span className="text-xs font-medium text-accent-foreground">You</span>
                          </div>
                        </div>

                        <div className="flex items-start gap-3">
                          <div className="rounded-full bg-primary/10 p-2 h-8 w-8 flex items-center justify-center">
                            <MessageSquare className="h-4 w-4 text-primary" />
                          </div>
                          <div className="rounded-lg bg-muted p-3 text-sm max-w-[80%]">
                            <p>For software engineering roles, I recommend focusing on these key areas:</p>
                            <ol className="list-decimal list-inside mt-2 space-y-1">
                              <li>Data Structures & Algorithms</li>
                              <li>System Design fundamentals</li>
                              <li>At least one programming language (Python, Java, C++)</li>
                              <li>Web development basics (HTML, CSS, JavaScript)</li>
                              <li>Database concepts (SQL, NoSQL)</li>
                              <li>Version control (Git)</li>
                            </ol>
                            <p className="mt-2">Would you like me to suggest resources for any of these areas?</p>
                          </div>
                        </div>
                      </div>

                      <div className="border-t p-3 flex gap-2">
                        <input
                          type="text"
                          placeholder="Type your question here..."
                          className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                        <Button>Send</Button>
                      </div>
                    </div>

                    <div className="rounded-lg border p-4">
                      <h3 className="text-lg font-medium mb-2">Suggested Topics</h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {[
                          "Resume tips",
                          "Interview preparation",
                          "Technical skills",
                          "Trending job roles",
                          "Company insights",
                          "Salary negotiation",
                        ].map((topic, i) => (
                          <Button key={i} variant="outline" size="sm">
                            {topic}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <footer className="w-full py-6 md:py-12 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold">PrepIQ AI Tools</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2023 PrepIQ. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
