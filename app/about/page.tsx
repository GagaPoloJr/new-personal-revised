import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { FileText, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function AboutPage() {
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
          <div className="container px-4 md:px-6 max-w-3xl relative">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                About Me
              </h1>
              <p className="text-muted-foreground">
                Software engineer, designer, and problem solver
              </p>
            </div>
            
            <div className="mt-8 space-y-8">
              <div className="prose prose-neutral dark:prose-invert">
                <p>
                  Hello! I'm John, a software engineer with a passion for creating beautiful, functional, and user-friendly applications. I've been working in the tech industry for over 5 years, specializing in web development and UI/UX design.
                </p>
                <p>
                  My journey in software development began during my college years when I built my first website. Since then, I've worked with various technologies and frameworks, always striving to stay at the forefront of the industry.
                </p>
                <p>
                  I believe in the power of clean, maintainable code and thoughtful design. My approach combines technical expertise with a deep understanding of user needs to create solutions that not only work well but also provide an exceptional user experience.
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold tracking-tighter">Experience</h2>
                <div className="mt-6 space-y-8">
                  {[
                    {
                      role: "Senior Frontend Developer",
                      company: "Tech Solutions Inc.",
                      period: "2021 - Present",
                      description: "Lead the frontend development team in building responsive web applications. Implemented modern frontend architecture using React and Next.js.",
                    },
                    {
                      role: "Web Developer",
                      company: "Digital Creations",
                      period: "2018 - 2021",
                      description: "Developed and maintained client websites. Collaborated with designers to implement responsive designs and interactive features.",
                    },
                    {
                      role: "Junior Developer",
                      company: "StartUp Innovations",
                      period: "2016 - 2018",
                      description: "Assisted in the development of web applications. Gained experience in frontend and backend technologies.",
                    },
                  ].map((job, index) => (
                    <div key={index} className="space-y-2 group hover:bg-muted/20 p-4 rounded-md transition-colors duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="font-semibold">{job.role}</h3>
                          <p className="text-sm text-muted-foreground">{job.company}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{job.period}</p>
                      </div>
                      <p className="text-sm text-muted-foreground">{job.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="relative">
                <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 rotate-180">
                  <Image 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
                    alt="Dots pattern"
                    width={500}
                    height={500}
                    className="object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold tracking-tighter">Education</h2>
                <div className="mt-6 space-y-4">
                  <div className="space-y-2 hover:bg-muted/20 p-4 rounded-md transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                        <p className="text-sm text-muted-foreground">University of Technology</p>
                      </div>
                      <p className="text-sm text-muted-foreground">2012 - 2016</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-2xl font-bold tracking-tighter">Skills</h2>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 hover:bg-muted/20 p-4 rounded-md transition-colors duration-300">
                    <h3 className="font-semibold">Languages</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="hover:text-foreground transition-colors duration-200">JavaScript (ES6+)</li>
                      <li className="hover:text-foreground transition-colors duration-200">TypeScript</li>
                      <li className="hover:text-foreground transition-colors duration-200">HTML5</li>
                      <li className="hover:text-foreground transition-colors duration-200">CSS3/SCSS</li>
                      <li className="hover:text-foreground transition-colors duration-200">Python</li>
                    </ul>
                  </div>
                  <div className="space-y-2 hover:bg-muted/20 p-4 rounded-md transition-colors duration-300">
                    <h3 className="font-semibold">Frameworks & Libraries</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="hover:text-foreground transition-colors duration-200">React</li>
                      <li className="hover:text-foreground transition-colors duration-200">Next.js</li>
                      <li className="hover:text-foreground transition-colors duration-200">Node.js</li>
                      <li className="hover:text-foreground transition-colors duration-200">Express</li>
                      <li className="hover:text-foreground transition-colors duration-200">Tailwind CSS</li>
                    </ul>
                  </div>
                  <div className="space-y-2 hover:bg-muted/20 p-4 rounded-md transition-colors duration-300">
                    <h3 className="font-semibold">Tools & Platforms</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="hover:text-foreground transition-colors duration-200">Git/GitHub</li>
                      <li className="hover:text-foreground transition-colors duration-200">VS Code</li>
                      <li className="hover:text-foreground transition-colors duration-200">Figma</li>
                      <li className="hover:text-foreground transition-colors duration-200">AWS</li>
                      <li className="hover:text-foreground transition-colors duration-200">Vercel</li>
                    </ul>
                  </div>
                  <div className="space-y-2 hover:bg-muted/20 p-4 rounded-md transition-colors duration-300">
                    <h3 className="font-semibold">Databases</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li className="hover:text-foreground transition-colors duration-200">MongoDB</li>
                      <li className="hover:text-foreground transition-colors duration-200">PostgreSQL</li>
                      <li className="hover:text-foreground transition-colors duration-200">MySQL</li>
                      <li className="hover:text-foreground transition-colors duration-200">Firebase</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="outline" className="gap-1 group hover:bg-secondary transition-colors duration-300" asChild>
                  <Link href="/files/resume.pdf">
                    <FileText className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    Download Resume
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
                <Button variant="outline" className="gap-1 group hover:bg-secondary transition-colors duration-300" asChild>
                  <Link href="mailto:hello@example.com">
                    <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    Email Me
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