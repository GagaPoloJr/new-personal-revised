import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with Next.js and Tailwind CSS. Features a clean, minimalist design with dark mode support.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    link: "/projects/portfolio",
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with payment integration. Includes product catalog, shopping cart, user authentication, and order management.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "/projects/ecommerce",
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects. Features include task creation, due dates, priority levels, and project organization.",
    tags: ["TypeScript", "React", "Firebase"],
    link: "/projects/task-app",
    github: "https://github.com",
    demo: "https://example.com",
    featured: true,
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current weather conditions and forecasts for multiple locations. Uses a weather API for real-time data.",
    tags: ["JavaScript", "API Integration", "CSS"],
    link: "/projects/weather",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
    image: "https://images.unsplash.com/photo-1530908295418-a12e326966ba?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Recipe Finder",
    description: "A web application that allows users to search for recipes based on ingredients they have. Includes filtering options and save functionality.",
    tags: ["React", "API Integration", "Styled Components"],
    link: "/projects/recipe-finder",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Budget Tracker",
    description: "A personal finance application for tracking income and expenses. Features include budget categories, reports, and data visualization.",
    tags: ["Vue.js", "Chart.js", "Firebase"],
    link: "/projects/budget-tracker",
    github: "https://github.com",
    demo: "https://example.com",
    featured: false,
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1000&auto=format&fit=crop"
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-12 md:py-16 relative">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
            <Image 
              src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=1000&auto=format&fit=crop"
              alt="Geometric pattern"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <div className="container px-4 md:px-6 relative">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Projects
              </h1>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A collection of my work and personal projects
              </p>
            </div>
            
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Featured Projects</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter(project => project.featured)
                  .map((project, index) => (
                    <Card key={index} className="overflow-hidden group hover:shadow-md transition-all duration-300 border border-border/50">
                      <div className="h-40 w-full overflow-hidden bg-muted/30">
                        <Image 
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={200}
                          className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-2">
                          <h3 className="font-semibold text-lg">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-4 mt-4">
                            <Link
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-medium text-muted-foreground hover:text-foreground inline-flex items-center transition-colors duration-200"
                            >
                              <Github className="mr-1 h-4 w-4" />
                              Code
                            </Link>
                            <Link
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-medium text-muted-foreground hover:text-foreground inline-flex items-center transition-colors duration-200"
                            >
                              <ExternalLink className="mr-1 h-4 w-4" />
                              Demo
                            </Link>
                            <Link
                              href={project.link}
                              className="text-sm font-medium text-primary inline-flex items-center ml-auto group"
                            >
                              Details <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
            
            <div className="mt-12 relative">
              <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 rotate-180">
                <Image 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
                  alt="Dots pattern"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
              <h2 className="text-xl font-semibold mb-4">Other Projects</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter(project => !project.featured)
                  .map((project, index) => (
                    <Card key={index} className="overflow-hidden group hover:shadow-md transition-all duration-300 border border-border/50">
                      <div className="h-40 w-full overflow-hidden bg-muted/30">
                        <Image 
                          src={project.image}
                          alt={project.title}
                          width={400}
                          height={200}
                          className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-2">
                          <h3 className="font-semibold text-lg">{project.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.tags.map((tag) => (
                              <Badge key={tag} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-4 mt-4">
                            <Link
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-medium text-muted-foreground hover:text-foreground inline-flex items-center transition-colors duration-200"
                            >
                              <Github className="mr-1 h-4 w-4" />
                              Code
                            </Link>
                            <Link
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm font-medium text-muted-foreground hover:text-foreground inline-flex items-center transition-colors duration-200"
                            >
                              <ExternalLink className="mr-1 h-4 w-4" />
                              Demo
                            </Link>
                            <Link
                              href={project.link}
                              className="text-sm font-medium text-primary inline-flex items-center ml-auto group"
                            >
                              Details <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}