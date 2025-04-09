import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden border-0 shadow-xl transition-all duration-300 hover:shadow-2xl bg-background/80">
      {/* Image container with hover effect */}
      <div className="h-48 bg-muted relative overflow-hidden group">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-fill transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#364573]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>

        {/* Technology tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-[#EEF1F9] text-[#364573] hover:bg-[#DCE3F5] dark:bg-[#2A3F7F]/30 dark:text-[#A0B1E9] dark:hover:bg-[#2A3F7F]/50 text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>

        {/* Project link */}
        <Link
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#364573] dark:text-[#6A81C9] font-medium flex items-center gap-1 hover:underline text-sm"
        >
          View Project <ArrowRight className="h-3 w-3" />
        </Link>
      </CardContent>
    </Card>
  )
}
