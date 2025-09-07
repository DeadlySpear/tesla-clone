"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, Menu, X, Play, ArrowRight, Star } from "lucide-react"

export default function NexusMotorsHome() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50 ? "bg-background/95 backdrop-blur-md border-b border-border" : "bg-black/20 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1
                className={`text-2xl font-bold transition-colors duration-300 ${
                  scrollY > 50 ? "text-primary" : "text-white"
                }`}
              >
                Nexus Motors
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant={scrollY > 50 ? "ghost" : "ghost"}
                size="sm"
                className={
                  scrollY > 50
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-white/80 hover:bg-white/10 bg-transparent border-0"
                }
              >
                Support
              </Button>
              <Button
                variant={scrollY > 50 ? "ghost" : "ghost"}
                size="sm"
                className={
                  scrollY > 50
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-white/80 hover:bg-white/10 bg-transparent border-0"
                }
              >
                Account
              </Button>
              <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Menu
              </Button>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={scrollY > 50 ? "" : "text-white hover:text-white/80 hover:bg-white/10"}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-b border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#models" className="block px-3 py-2 text-foreground hover:text-primary">
                Models
              </a>
              <a href="#energy" className="block px-3 py-2 text-foreground hover:text-primary">
                Energy
              </a>
              <a href="#charging" className="block px-3 py-2 text-foreground hover:text-primary">
                Charging
              </a>
              <a href="#discover" className="block px-3 py-2 text-foreground hover:text-primary">
                Discover
              </a>
              <a href="#shop" className="block px-3 py-2 text-foreground hover:text-primary">
                Shop
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/sleek-modern-electric-car-on-highway-at-sunset.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Model X Elite</h1>
          <p className="text-xl md:text-2xl mb-8 text-pretty">
            Experience unparalleled luxury and performance in our flagship electric SUV
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Custom Order
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black bg-transparent"
            >
              Existing Inventory
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* Model Showcase */}
      <section id="models" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Models</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our complete lineup of premium electric vehicles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Model S Pro",
                type: "Sedan",
                range: "405 mi",
                acceleration: "1.99s",
                topSpeed: "200 mph",
                price: "From $89,990",
                image: "/luxury-electric-sedan-side-view.jpg",
              },
              {
                name: "Model X Elite",
                type: "SUV",
                range: "348 mi",
                acceleration: "2.5s",
                topSpeed: "163 mph",
                price: "From $109,990",
                image: "/electric-suv-with-falcon-wing-doors.jpg",
              },
              {
                name: "Model Y Sport",
                type: "Crossover",
                range: "330 mi",
                acceleration: "3.5s",
                topSpeed: "155 mph",
                price: "From $65,990",
                image: "/compact-electric-crossover-suv.jpg",
              },
            ].map((model, index) => (
              <Card
                key={index}
                className="group cursor-pointer overflow-hidden border-border hover:shadow-lg transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={model.image || "/placeholder.svg"}
                    alt={model.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {model.type}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{model.name}</h3>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-muted-foreground">
                    <div>
                      Range: <span className="text-foreground font-medium">{model.range}</span>
                    </div>
                    <div>
                      0-60 mph: <span className="text-foreground font-medium">{model.acceleration}</span>
                    </div>
                    <div>
                      Top Speed: <span className="text-foreground font-medium">{model.topSpeed}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-primary">{model.price}</span>
                    <Button variant="ghost" size="sm" className="group-hover:text-primary">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Autopilot Advanced</h2>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Navigate on autopilot from highway on-ramp to off-ramp, including interchanges and overtaking slower
                cars.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Full Self-Driving Capability",
                  "Navigate on Autopilot",
                  "Auto Lane Change",
                  "Autopark",
                  "Summon",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Learn About Autopilot
              </Button>
            </div>
            <div className="relative">
              <img
                src="/car-dashboard-with-autopilot-interface.jpg"
                alt="Autopilot Interface"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="lg" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charging Network */}
      <section id="charging" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Supercharger Network</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The world's fastest charging network with 50,000+ Superchargers globally
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { number: "50,000+", label: "Superchargers Worldwide" },
              { number: "15 min", label: "Average Charging Time" },
              { number: "99.9%", label: "Uptime Reliability" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="relative rounded-lg overflow-hidden">
            <img
              src="/electric-car-charging-station-network-map.jpg"
              alt="Supercharger Network"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="text-2xl font-bold mb-2 drop-shadow-lg">Find a Supercharger</h3>
              <Button variant="secondary">View Map</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Owners Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Model S Owner",
                content:
                  "The acceleration is absolutely incredible. Going from 0-60 in under 2 seconds never gets old.",
                rating: 5,
              },
              {
                name: "Michael Rodriguez",
                role: "Model X Owner",
                content:
                  "The falcon wing doors are not just cool, they're incredibly practical for loading kids and cargo.",
                rating: 5,
              },
              {
                name: "Emily Johnson",
                role: "Model Y Owner",
                content: "Best car I've ever owned. The over-the-air updates keep making it better every month.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 text-pretty">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-4">Nexus Motors</h3>
              <p className="text-muted-foreground text-sm">
                Accelerating the world's transition to sustainable transport.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Vehicles</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Model S
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Model X
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Model Y
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Cybertruck
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Energy</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Solar Panels
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Solar Roof
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Powerwall
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Megapack
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Find Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary">
                    Investor Relations
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Nexus Motors, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
