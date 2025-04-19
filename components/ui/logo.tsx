import { LightbulbIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "light"
}

export function Logo({ className, size = "md", variant = "default" }: LogoProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  const variantClasses = {
    default: "text-primary",
    light: "text-white",
  }

  return (
    <div className={cn("flex items-center font-bold", sizeClasses[size], variantClasses[variant], className)}>
      <LightbulbIcon className="mr-1.5 h-5 w-5 text-accent" />
      <span>Prep</span>
      <span className="italic text-accent">IQ</span>
    </div>
  )
}
