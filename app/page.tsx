import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 opacity-5">
            <Image 
              src="https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?q=80&w=1000&auto=format&fit=crop"
              alt="Geometric pattern"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  John Doe
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Software Engineer & Designer
                </p>
              </div>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I build exceptional digital experiences with a focus on simplicity and functionality.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild className="group transition-all duration-300 hover:pr-6">
                  <Link href="/contact">
                    Get in touch <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" asChild className="hover:bg-secondary transition-colors duration-300">
                  <Link href="/about">About me</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-12 md:py-16 bg-muted/50 relative">
          <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 rotate-180">
            <Image 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop"
              alt="Abstract pattern"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Featured Projects
                </h2>
                <p className="text-muted-foreground">
                  Some of my recent work
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {[
                {
                  title: "Portfolio Website",
                  description: "A personal portfolio website built with Next.js and Tailwind CSS.",
                  tags: ["Next.js", "React", "Tailwind CSS"],
                  link: "/projects/portfolio",
                  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop"
                },
                {
                  title: "E-commerce Platform",
                  description: "A full-stack e-commerce platform with payment integration.",
                  tags: ["React", "Node.js", "MongoDB"],
                  link: "/projects/ecommerce",
                  image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop"
                },
                {
                  title: "Task Management App",
                  description: "A productivity app for managing tasks and projects.",
                  tags: ["TypeScript", "React", "Firebase"],
                  link: "/projects/task-app",
                  image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop"
                },
              ].map((project, index) => (
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
                      <Link
                        href={project.link}
                        className="text-sm font-medium text-primary mt-4 inline-flex items-center group-hover:underline"
                      >
                        View Project <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild className="hover:bg-secondary transition-colors duration-300">
                <Link href="/projects">View all projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-12 md:py-16 relative">
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-64 h-64 opacity-5">
            <Image 
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
              alt="Dots pattern"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Software engineer with a passion for design
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm a software engineer with over 5 years of experience building products for the web. I specialize in creating clean, efficient, and user-friendly applications.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button variant="outline" className="gap-1 group hover:bg-secondary transition-colors duration-300" asChild>
                    <Link href="/files/resume.pdf">
                      <FileText className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      Resume
                    </Link>
                  </Button>
                  <Button variant="outline" className="gap-1 group hover:bg-secondary transition-colors duration-300" asChild>
                    <Link href="https://github.com">
                      <Github className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      GitHub
                    </Link>
                  </Button>
                  <Button variant="outline" className="gap-1 group hover:bg-secondary transition-colors duration-300" asChild>
                    <Link href="https://linkedin.com">
                      <Linkedin className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium">Frontend</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="hover:text-foreground transition-colors duration-200">React / Next.js</li>
                      <li className="hover:text-foreground transition-colors duration-200">TypeScript</li>
                      <li className="hover:text-foreground transition-colors duration-200">Tailwind CSS</li>
                      <li className="hover:text-foreground transition-colors duration-200">HTML / CSS</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Backend</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="hover:text-foreground transition-colors duration-200">Node.js</li>
                      <li className="hover:text-foreground transition-colors duration-200">Express</li>
                      <li className="hover:text-foreground transition-colors duration-200">MongoDB</li>
                      <li className="hover:text-foreground transition-colors duration-200">PostgreSQL</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Design</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="hover:text-foreground transition-colors duration-200">Figma</li>
                      <li className="hover:text-foreground transition-colors duration-200">UI/UX Design</li>
                      <li className="hover:text-foreground transition-colors duration-200">Responsive Design</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-medium">Other</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="hover:text-foreground transition-colors duration-200">Git / GitHub</li>
                      <li className="hover:text-foreground transition-colors duration-200">CI/CD</li>
                      <li className="hover:text-foreground transition-colors duration-200">AWS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-12 md:py-16 bg-muted/50 relative">
          <div className="absolute bottom-0 right-0 w-64 h-64 opacity-5">
            <Image 
              src="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?q=80&w=1000&auto=format&fit=crop"
              alt="Geometric shapes"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Let's Work Together
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind? Let's discuss how I can help bring your ideas to life.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild className="group transition-all duration-300 hover:pr-6">
                  <Link href="/contact">
                    Contact me <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}