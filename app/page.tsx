"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Shield,
  TrendingUp,
  Users,
  Award,
  Star,
  CheckCircle,
  Play,
  Sparkles,
  Target,
  Zap,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Animated Counter Component
function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const services = [
    {
      icon: TrendingUp,
      title: "Financial Planning",
      description: "Comprehensive financial strategies tailored to your goals and risk profile.",
      color: "from-blue-500 to-cyan-500",
      features: ["Goal Setting", "Risk Assessment", "Strategy Development"],
    },
    {
      icon: Shield,
      title: "Mutual Fund Advisory",
      description: "Expert guidance on mutual fund selection and portfolio optimization.",
      color: "from-purple-500 to-pink-500",
      features: ["Fund Selection", "SIP Planning", "Performance Tracking"],
    },
    {
      icon: Users,
      title: "Insurance Planning",
      description: "Protect your wealth with comprehensive insurance solutions.",
      color: "from-green-500 to-emerald-500",
      features: ["Life Insurance", "Health Coverage", "Claims Support"],
    },
    {
      icon: Award,
      title: "Retirement Planning",
      description: "Secure your future with strategic retirement planning services.",
      color: "from-orange-500 to-red-500",
      features: ["Corpus Planning", "Pension Advisory", "Tax Optimization"],
    },
  ]

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Owner",
      content:
        "RK Wealth Management transformed my financial outlook. Their personalized approach helped me achieve my investment goals faster than I ever imagined.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      company: "Kumar Enterprises",
    },
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      content:
        "Professional service and excellent returns on my mutual fund investments. The team's expertise in tax planning saved me lakhs!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      company: "Tech Solutions Inc",
    },
    {
      name: "Amit Patel",
      role: "Doctor",
      content:
        "Their retirement planning strategy gave me complete peace of mind about my future financial security. Highly recommended!",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
      company: "City Hospital",
    },
  ]

  const stats = [
    { value: 500, label: "Crores AUM", suffix: "+" },
    { value: 2000, label: "Happy Clients", suffix: "+" },
    { value: 15, label: "Years Experience", suffix: "+" },
    { value: 98, label: "Client Satisfaction", suffix: "%" },
  ]

  const features = [
    {
      icon: Target,
      title: "Goal-Based Planning",
      description: "Achieve your dreams with structured financial planning",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Protect your wealth with comprehensive insurance solutions",
    },
    {
      icon: Zap,
      title: "Quick Execution",
      description: "Fast and efficient investment execution and portfolio management",
    },
    {
      icon: Sparkles,
      title: "Premium Service",
      description: "White-glove service with dedicated relationship managers",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className="container mt-28 mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-8 animate-fade-in-up">
              <Badge className="mb-6 bg-gradient-to-r from-gold-400 to-gold-600 text-black border-0 px-6 py-2 text-sm font-semibold shadow-lg">
                <Sparkles className="w-4 h-4 mr-2" />
                Trusted Financial Partner
              </Badge>
            </div>

            <h1 className="text-3xl md:text-5xl font-light mb-8 leading-tight animate-fade-in-up delay-200">
              Building
              <span className="bg-gradient-to-r italic  from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">
                {" "}
                Wealth
              </span>
              <br />
              Earning
              <span className="bg-gradient-to-r from-blue-400 italic via-cyan-500 to-blue-600 bg-clip-text text-transparent">
                {" "}
                Growth
              </span>
            </h1>

            <p className="text-lg md:text-xl mb-12 text-slate-300 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-400">
              Transform your financial future with India's most innovative wealth management platform. Experience
              personalized strategies, cutting-edge technology, and unmatched expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in-up delay-600">
              <Link href="https://calendly.com/care-rkwealth/30min">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gold-500 to-gold-600 font-extralight hover:from-gold-600 hover:to-gold-700 text-white  px-8 py-4 text-lg shadow-2xl hover:shadow-gold-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </Link>
              
            </div>

            {/* Animated Stats */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in-up delay-800">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2 group-hover:scale-110 transition-transform duration-300">
                    ₹<AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-300 text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </section>

      {/* Enhanced About Section */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <Badge className="mb-6 bg-blue-100 text-blue-800 border-0">About Indus Wealth</Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Redefining Wealth Management
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}
                  Excellence
                </span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                We combine cutting-edge technology with human expertise to deliver personalized wealth management
                solutions that grow with you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-8">
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    Our Mission
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    To democratize wealth creation by providing accessible, transparent, and personalized financial
                    services that empower every Indian to build lasting prosperity through innovative technology and
                    expert guidance.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-gold-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    Our Vision
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    To become India's most trusted and innovative wealth management partner, known for our integrity,
                    cutting-edge solutions, and unwavering commitment to client success in the digital age.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-1 shadow-2xl">
                  <div className="bg-white rounded-3xl p-8 h-full">
                    <div className="grid grid-cols-2 gap-6">
                      {features.map((feature, index) => (
                        <div key={index} className="text-center group">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                            <feature.icon className="h-8 w-8 text-blue-600" />
                          </div>
                          <h4 className="font-semibold text-slate-900 mb-2">{feature.title}</h4>
                          <p className="text-sm text-slate-600">{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-0">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Comprehensive Financial
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Solutions
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From planning to execution, we provide end-to-end financial services designed to maximize your wealth
              potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 bg-white"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <CardHeader className="relative z-10 text-center pb-4">
                  <div
                    className={`mx-auto w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                  >
                    <service.icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-slate-800 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 text-center">
                  <CardDescription className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center text-sm text-slate-500">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 bg-transparent"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/services">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-12 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Interactive Testimonials Section */}
     

            {/* Testimonial Navigation */}
            

      {/* Enhanced CTA Section */}
       

        <div className="py-24 bg-gradient-to-br text-center from-slate-900 to-blue-900 text-white relative overflow-hidden">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your
            <span className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              {" "}
              Financial Future?
            </span>
          </h2>
          <p className="text-xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful investors who trust us with their wealth. Get personalized financial advice
            from our expert team and start your journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white font-light px-12 py-4 text-lg shadow-2xl hover:shadow-gold-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Button>
            </Link>
            {/* <Link href="/articles">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 px-12 py-4 text-lg bg-white/10 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                Explore Insights
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link> */}
          </div>
        </div>
    </div>
  )
}
