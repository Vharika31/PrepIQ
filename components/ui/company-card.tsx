import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Building2 } from "lucide-react"

interface CompanyCardProps {
  name: string
  logo?: string
  description: string
  openPositions: number
  location: string
  tags: string[]
}

export function CompanyCard({ name, logo, description, openPositions, location, tags }: CompanyCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          {logo ? (
            <span className="text-xl font-bold text-primary">{logo}</span>
          ) : (
            <Building2 className="h-6 w-6 text-primary" />
          )}
        </div>
        <div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{openPositions} open positions</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm">{description}</p>
        <div>
          <p className="text-sm font-medium mb-2">Location: {location}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">View Details</Button>
        <Button>Apply Now</Button>
      </CardFooter>
    </Card>
  )
}
