import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const posts = [
  {
    title: "Building a Modern Web Application with Next.js",
    excerpt: "Learn how to build a modern web application using Next.js, React, and Tailwind CSS. This guide covers everything from setup to deployment.",
    date: "April 15, 2025",
    readTime: "8 min read",
    slug: "building-modern-web-app-nextjs",
    categories: ["Next.js", "React", "Web Development"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "The Power of TypeScript in Frontend Development",
    excerpt: "Discover how TypeScript can improve your frontend development workflow, catch errors early, and make your codebase more maintainable.",
    date: "March 22, 2025",
    readTime: "6 min read",
    slug: "power-of-typescript-frontend",
    categories: ["TypeScript", "JavaScript", "Frontend"],
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Responsive Design Principles for Modern Websites",
    excerpt: "Explore the key principles of responsive design and learn how to create websites that look great on any device, from mobile to desktop.",
    date: "February 10, 2025",
    readTime: "5 min read",
    slug: "responsive-design-principles",
    categories: ["CSS", "Design", "Responsive"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Optimizing Performance in React Applications",
    excerpt: "Learn techniques for optimizing the performance of your React applications, including code splitting, memoization, and efficient rendering.",
    date: "January 28, 2025",
    readTime: "7 min read",
    slug: "optimizing-performance-react",
    categories: ["React", "Performance", "JavaScript"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Introduction to State Management with Redux",
    excerpt: "Get started with Redux for state management in your React applications. This guide covers the core concepts and implementation details.",
    date: "December 15, 2024",
    readTime: "9 min read",
    slug: "introduction-state-management-redux",
    categories: ["Redux", "React", "State Management"],
    image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1000&auto=format&fit=crop"
  },
];

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="py-12 md:py-16 relative">
          <div className="absolute top-0 right-0 w-64 h-64 opacity-5">
            <Image 
              src="https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?q=80&w=1000&auto=format&fit=crop"
              alt="Geometric pattern"
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <div className="container px-4 md:px-6 max-w-4xl relative">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Blog
              </h1>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Thoughts, ideas, and insights on web development and design
              </p>
            </div>
            
            <div className="mt-8 space-y-8">
              {posts.map((post, index) => (
                <div key={index} className="group">
                  <Card className="border-none shadow-none hover:bg-muted/20 transition-colors duration-300">
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-[2fr_1fr] gap-6 items-start">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <time dateTime={post.date}>{post.date}</time>
                            <span>•</span>
                            <span>{post.readTime}</span>
                          </div>
                          <Link href={`/blog/${post.slug}`}>
                            <h2 className="text-2xl font-bold hover:text-primary transition-colors">
                              {post.title}
                            </h2>
                          </Link>
                          <p className="text-muted-foreground">
                            {post.excerpt}
                          </p>
                          <div className="flex flex-wrap gap-2 pt-2">
                            {post.categories.map((category) => (
                              <Badge key={category} variant="secondary">
                                {category}
                              </Badge>
                            ))}
                          </div>
                          <div className="pt-2">
                            <Link
                              href={`/blog/${post.slug}`}
                              className="text-sm font-medium text-primary inline-flex items-center group-hover:underline"
                            >
                              Read more <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                        <div className="hidden md:block h-32 overflow-hidden rounded-md">
                          <Image 
                            src={post.image}
                            alt={post.title}
                            width={300}
                            height={200}
                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  {index < posts.length - 1 && <Separator className="my-8" />}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}