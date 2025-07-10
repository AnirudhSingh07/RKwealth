import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Shield, TrendingUp, Heart } from "lucide-react"
import Image from "next/image"
import { Description } from "@radix-ui/react-dialog"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our dealings, ensuring transparency and trust.",
    },
    {
      icon: Target,
      title: "Client-Centric",
      description: "Your financial success is our primary goal. We tailor solutions to meet your unique needs.",
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "We strive for excellence in service delivery and investment performance.",
    },
    {
      icon: Heart,
      title: "Empathy",
      description: "We understand that financial decisions are personal and approach each client with care.",
    },
  ]

  const whyChooseUs = [
   
    {
      title: "Experienced Team",
      description: "Our team has over 15 years of combined experience in financial markets.",
    },
    {
      title: "Personalized Approach",
      description: "Every client receives a customized financial plan based on their unique situation.",
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees. Our pricing structure is clear and transparent.",
    },
    {
      title: "Ongoing Support",
      description: "We provide continuous monitoring and support for your investment journey.",
    },
    {
      title: "Technology Driven",
      description: "We leverage technology to provide efficient and accessible financial services.",
    },
  ]

  const team = [
    {
      name: "Mr. Jatin Sahijwani",
      // experience: "2+ years experience in Technical Field",
      image: "/jatinbhai.png?height=300&width=300",
      
    }
    ,
    // {
    //   name: "Ranaditya Singh Shekhawat",
    //   experience: "7+ years experience in Financial Market",
    //   image: "/shanidada2.png?height=300&width=300",
    // },
    {
      name: "Mr. Anirudh Singh Chouhan",
      // experience: "2+ years experience in FinTech",
      image: "/anirudh.png?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gold-500/20 text-gold-300 border-gold-400/30">About Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Building Wealth,
              <span className="text-gold-400"> Building Trust</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Learn about our journey, values, and the experienced team dedicated to your financial success.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                 At RK Wealth, we simplify wealth creation.
Born from the need for clarity in a complex financial world, we offer a one-stop solution for all your investment, insurance, and financial planning needs.

With a perfect blend of expert advice and smart technology, we help individuals, families, and businesses make informed financial decisions — and grow with confidence.

Inspired by the legacy of the Indus Valley, we stand for trust, transparency, and long-term prosperity. Whether you're starting your journey or planning your legacy — we're your financial partners for life.

Smart Planning. Secure Future. RK Wealth.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                 
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  
                </p>
                {/* <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">2008</div>
                    <div className="text-gray-600">Founded</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">2000+</div>
                    <div className="text-gray-600">Happy Clients</div>
                  </div>
                </div> */}
              </div>
              <div className="relative">
                <Image
                  src="/iwm-logo.png?height=500&width=600"
                  alt="Our Story"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our relationships with clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Indus Wealth Management?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Here's what sets us apart from other financial advisory firms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">{reason.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{reason.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      {/* <section className="py-20 bg-gray-50 items-center align-center">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals are dedicated to helping you achieve your financial goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl items-center mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="mx-auto mb-4">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto"
                    />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{member.name}</CardTitle>
                  {/* <Badge variant="secondary" className="mt-2">
                    {member.experience}
                  </Badge> */}
                {/* </CardHeader>
                <CardContent>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */} 

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner With Us?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust us with their financial future.
          </p>
          <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8">
            Get Started Today
          </Button>
        </div>
      </section> */}
    </div>
  )
}
