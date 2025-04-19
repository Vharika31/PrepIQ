import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { UserBadge } from "@/components/ui/user-badge"
import { cn } from "@/lib/utils"

interface BannerCardProps {
  title: string
  description: string
  type: "achievement" | "event" | "announcement"
  date: string
  user?: {
    name: string
    role: string
    avatarUrl?: string
  }
  className?: string
}

export function BannerCard({ title, description, type, date, user, className }: BannerCardProps) {
  const typeColors = {
    achievement: "bg-green-500",
    event: "bg-blue-500",
    announcement: "bg-amber-500",
  }

  const typeLabels = {
    achievement: "Achievement",
    event: "Event",
    announcement: "Announcement",
  }

  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className={`h-2 ${typeColors[type]}`} />
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
          <Badge variant="outline">{typeLabels[type]}</Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex justify-between items-center">
        <span className="text-xs text-muted-foreground">{date}</span>
        {user && <UserBadge name={user.name} role={user.role} avatarUrl={user.avatarUrl} />}
      </CardContent>
    </Card>
  )
}
