import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Shield, PiggyBank, Calculator, BarChart3, FileText, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      icon: TrendingUp,
      title: "Financial Planning",
      description: "Comprehensive financial planning to help you achieve your life goals.",
      features: [
        "Goal-based financial planning",
        "Risk assessment",
        "Investment strategy development",
        "Regular portfolio reviews",
      ],
      image: "/finplan.jpg?height=300&width=400",
    },
    {
      icon: BarChart3,
      title: "Mutual Fund Advisory",
      description: "Expert guidance on mutual fund selection and portfolio optimization.",
      features: [
        "Fund selection and research",
        "SIP planning and management",
        "Portfolio diversification",
        "Performance monitoring",
        "Tax-efficient investing",
      ],
      image: "/mf.jpg?height=300&width=400",
    },
    {
      icon: Shield,
      title: "Insurance Planning",
      description: "Comprehensive insurance solutions to protect your wealth and family.",
      features: [
        "Life insurance planning",
        "Health insurance advisory",
        "Claims assistance",
        "Insurance portfolio review",
      ],
      image: "/insu.jpg?height=300&width=400",
    },
    {
      icon: PiggyBank,
      title: "Retirement Planning",
      description: "Strategic retirement planning to ensure financial security in your golden years.",
      features: [
        "Retirement corpus calculation",
        "Pension planning",
        "Post-retirement income planning",
        "Social security optimization",
        "Estate planning basics",
      ],
      image: "/ret.jpg?height=300&width=400",
    },
    {
      icon: FileText,
      title: "Portfolio Review",
      description: "Regular portfolio analysis and rebalancing for optimal performance.",
      features: [
        "Portfolio performance analysis",
        "Asset allocation review",
        "Risk-return optimization",
        "Rebalancing recommendations",
        "Quarterly review meetings",
      ],
      image: "/port.jpg?height=300&width=400",
    },
  ]

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We understand your financial goals, risk tolerance, and current situation.",
    },
    {
      step: "02",
      title: "Financial Analysis",
      description: "Comprehensive analysis of your finances and identification of opportunities.",
    },
    {
      step: "03",
      title: "Strategy Development",
      description: "Creation of a personalized financial plan tailored to your needs.",
    },
    {
      step: "04",
      title: "Implementation",
      description: "Execution of the financial plan with ongoing support and guidance.",
    },
    {
      step: "05",
      title: "Monitoring & Review",
      description: "Regular monitoring and adjustments to keep you on track.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gold-500/20 text-gold-300 border-gold-400/30">Our Services</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Financial
              <span className="text-gold-400"> Solutions</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              From financial planning to investment management, we offer a complete suite of services to help you build
              and preserve wealth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className="max-w-6xl mx-auto">
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "md:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <service.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                    </div>

                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">{service.description}</p>

                    <div className="space-y-4 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="bg-blue-600 hover:bg-blue-700">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>

                  <div className={index % 2 === 1 ? "md:col-start-1" : ""}>
                    <Card className="border-0 shadow-xl overflow-hidden">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover"
                      />
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
   <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Unlock Unlimited Opportunities With Multiple Products</h2>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-1 gap-8">
              <h3 className="text-2xl md:text-4xl font-bold text-center text-blue-900 mb-4">Mutual Funds</h3>
              <img src="/mu1.png" alt=""  />
              <img src="/mu2.png" alt="" />
            </div>
          </div>

          <div className="max-w-6xl mt-9 mx-auto items-center">
            <div className="grid md:grid-cols-1 gap-8">
              <h3 className="text-2xl md:text-4xl mt-3 font-bold text-center text-blue-900 mb-4">Life Insurance</h3>
              <img src="/li2.png" alt=""  />
            </div>
          </div>
          <div className="max-w-6xl mt-9 mx-auto">
            <div className="grid md:grid-cols-1 gap-8">
              <h3 className="text-2xl md:text-4xl mt-3 font-bold text-center text-blue-900 mb-4">Health & General Insurance</h3>
              <img src="/hi2.png" alt=""  />
            </div>
          </div>
          <div className="max-w-6xl mt-9 mx-auto">
            <div className="grid md:grid-cols-1 gap-8">
              <h3 className="text-2xl md:text-4xl mt-3 font-bold text-center text-blue-900 mb-4">PMS</h3>
              <img src="/itus1.png" alt=""  />
              <img src="/itus2.png" alt=""  />
            </div>
          </div>


           <div className="max-w-6xl mt-9 mx-auto">
            <div className="grid md:grid-cols-1 gap-8">
              <h3 className="text-2xl md:text-4xl mt-3 font-bold text-center text-blue-900 mb-4">AIF</h3>
              <img src="/aif1.png" alt=""  />
              <img src="/aif2.png" alt="" />
            </div>
          </div>
           
          
          <div className="max-w-6xl mt-9 mx-auto">
            <div className="grid md:grid-cols-1 gap-8">
              <h3 className="text-2xl md:text-4xl mt-3 font-bold text-center text-blue-900 mb-4">Smallcase</h3>
              <img src="/sc2.png" alt=""  />
            </div>
          </div>
          <div className="max-w-6xl mt-9 mx-auto">
            <div className="grid md:grid-cols-1 gap-8">
              <h3 className="text-2xl md:text-4xl mt-3 font-bold text-center text-blue-900 mb-4">Fixed Deposit</h3>
              <img src="/fd2.png" alt=""  />
            </div>
          </div>
        </div>
      </section> 

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your financial goals and how we can help you achieve them.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8">
                Schedule Consultation
              </Button>
            </Link>
            <Link href="/articles">
              {/* <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 bg-transparent"
              >
                Read Our Articles
              </Button> */}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
