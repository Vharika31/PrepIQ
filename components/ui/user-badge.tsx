import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface UserBadgeProps {
  name: string
  role: string
  avatarUrl?: string
  badge?: string
  className?: string
}

export function UserBadge({ name, role, avatarUrl, badge, className }: UserBadgeProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Avatar className="h-8 w-8">
        <AvatarImage src={avatarUrl || "/placeholder.svg"} alt={name} />
        <AvatarFallback>
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium">{name}</span>
          {badge && (
            <Badge variant="outline" className="text-xs py-0 h-5">
              {badge}
            </Badge>
          )}
        </div>
        <span className="text-xs text-muted-foreground">{role}</span>
      </div>
    </div>
  )
}
