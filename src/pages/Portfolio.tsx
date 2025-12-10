import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function Portfolio() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-[oklch(0.40_0.10_320_/_0.3)] bg-[oklch(0.08_0.015_280_/_0.8)] backdrop-blur-xl shadow-[0_4px_30px_oklch(0_0_0_/_0.3),0_0_40px_oklch(0.65_0.20_330_/_0.05)]">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="text-xl font-bold uppercase tracking-wider text-glow-primary">
              <span className="text-primary">CYBER</span>
              <span className="text-secondary">DEV</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#hero" className="text-sm font-bold uppercase tracking-wider hover:text-primary transition-all duration-300 hover:[text-shadow:0_0_8px_oklch(0.65_0.20_330_/_0.6)]">Home</a>
            <a href="#about" className="text-sm font-bold uppercase tracking-wider hover:text-primary transition-all duration-300 hover:[text-shadow:0_0_8px_oklch(0.65_0.20_330_/_0.6)]">About</a>
            <a href="#projects" className="text-sm font-bold uppercase tracking-wider hover:text-primary transition-all duration-300 hover:[text-shadow:0_0_8px_oklch(0.65_0.20_330_/_0.6)]">Projects</a>
            <a href="#contact" className="text-sm font-bold uppercase tracking-wider hover:text-primary transition-all duration-300 hover:[text-shadow:0_0_8px_oklch(0.65_0.20_330_/_0.6)]">Contact</a>
          </nav>
          <Button size="sm" variant="hologram">Hire Me</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative py-20 md:py-32 cyber-fog">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <Badge variant="hologram" className="mb-4">Full Stack Developer</Badge>
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wider mb-6 text-glow-primary">
              Building The <span className="text-primary">Future</span> With{" "}
              <span className="text-secondary">Code</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Crafting cutting-edge web experiences with modern technologies. 
              Specialized in React, TypeScript, and cyberpunk aesthetics.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">View Projects</Button>
              <Button size="lg" variant="metal">Download CV</Button>
              <Button size="lg" variant="hologram">Contact</Button>
            </div>
          </div>
        </div>
        
        {/* Decorative atmospheric overlay */}
        <div className="absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(circle_at_30%_20%,oklch(0.65_0.20_330_/_0.1)_0%,transparent_40%),radial-gradient(circle_at_70%_80%,oklch(0.62_0.14_200_/_0.08)_0%,transparent_35%)]" />
      </section>

      <Separator className="my-8" />

      {/* About/Skills Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-12 text-center [text-shadow:0_0_15px_var(--secondary)]">
            About <span className="text-secondary">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Who I Am</CardTitle>
                <CardDescription>Innovation-driven developer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Passionate developer with 5+ years of experience creating 
                  exceptional digital experiences. I specialize in building 
                  scalable applications with modern tech stacks.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Core Skills</CardTitle>
                <CardDescription>Technologies I master</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="default">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="default">Node.js</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="default">Tailwind CSS</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="default">GraphQL</Badge>
                  <Badge variant="secondary">Docker</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-12 text-center [text-shadow:0_0_15px_var(--accent)]">
            Featured <span className="text-accent">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="default">Live</Badge>
                  <Badge variant="outline">Open Source</Badge>
                </div>
                <CardTitle>Cyberpunk UI</CardTitle>
                <CardDescription>Next-gen component library</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  A complete UI library with neon aesthetics and modern components.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Demo</Button>
                  <Button size="sm" variant="ghost">GitHub</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">Production</Badge>
                  <Badge variant="outline">Client</Badge>
                </div>
                <CardTitle>NeoCommerce</CardTitle>
                <CardDescription>E-commerce platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Modern e-commerce solution with real-time inventory and AI recommendations.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Visit</Button>
                  <Button size="sm" variant="ghost">Case Study</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="destructive">Beta</Badge>
                  <Badge variant="outline">SaaS</Badge>
                </div>
                <CardTitle>DataNexus</CardTitle>
                <CardDescription>Analytics dashboard</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Real-time analytics platform with customizable widgets and AI insights.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">Preview</Button>
                  <Button size="sm" variant="ghost">Learn More</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider mb-12 text-center [text-shadow:0_0_15px_var(--primary)]">
            Get In <span className="text-primary">Touch</span>
          </h2>
          
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Let's Work Together</CardTitle>
              <CardDescription>Drop me a message and I'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Project Inquiry" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell me about your project..." rows={5} />
                </div>
                <Button className="w-full" size="lg">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-dashed border-border mt-20 [box-shadow:0_0_10px_var(--border)]">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold uppercase tracking-wider mb-4 [text-shadow:0_0_5px_var(--primary)]">
                <span className="text-primary">CYBER</span>
                <span className="text-secondary">DEV</span>
              </h3>
              <p className="text-sm text-muted-foreground">
                Building the future, one line of code at a time.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#hero" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm mb-4">Social</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-secondary transition-colors">GitHub</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Discord</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>contact@cyberdev.io</li>
                <li>+1 (555) 123-4567</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 CyberDev. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
