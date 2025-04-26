import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  demoUrl: string;
  sourceUrl: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  demoUrl,
  sourceUrl,
}: ProjectCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden p-4 bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-lg hover:bg-white/15 transition-all duration-300 group z-10">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`Screenshot of ${title}`}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <CardHeader>
        <CardTitle className=" text-xl font-bold">{title}</CardTitle>
        <CardDescription className=" text-slate-50">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {demoUrl && (
          <Button variant="outline" asChild>
            <a href={demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Website
            </a>
          </Button>
        )}
        {sourceUrl && (
          <Button variant="outline" asChild>
            <a href={sourceUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Source Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
