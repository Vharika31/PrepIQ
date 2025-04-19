import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Eye } from "lucide-react"

interface RoadmapCardProps {
  title: string
  author: string
  company: string
  tags: string[]
  views: number
  avatarUrl?: string
}

export function RoadmapCard({ title, author, company, tags, views, avatarUrl }: RoadmapCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="p-4">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>
          By {author} • {company}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center p-4 pt-0">
        <div className="flex items-center text-sm text-muted-foreground">
          <Eye className="mr-1 h-4 w-4" />
          {views} views
        </div>
        <Button variant="outline" size="sm">
          <BookOpen className="mr-2 h-4 w-4" />
          View Roadmap
        </Button>
      </CardFooter>
    </Card>
  )
}
