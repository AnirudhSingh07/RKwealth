import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      details: [
        "RK Wealth Pvt. Ltd.",
        "203-B, Silver Sanchora",
        "RNT Marg Indore (M.P) 452001",
      ],
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 9315900933 (Main)"],
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "care.rkwealth@gmail.com",
      ],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Everyday : 9:00 AM - 9:00 PM",
        "Emergency Support: 24/7",
      ],
    },
  ]

  const offices = [
    {
      city: "Indore",
      address: "203-B, Silver Sanchora ,RNT Marg Indore (M.P) 452001",
      phone: "+91 9303312930",
      email: "care.rkwealth@gmail.com",
    },
  ]

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gold-500/20 text-gold-300 border-gold-400/30">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in Touch with
              <span className="text-gold-400"> Our Experts</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to start your wealth management journey? Our team of financial experts is here to help you achieve
              your financial goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-16 lg:py-20">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      {/* Grid container with responsive columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        
        {/* Contact Form Section */}
        <div>
          <Card className="border-0 shadow-xl transition-all duration-300 hover:shadow-2xl">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl font-bold text-gray-900 flex items-center">
                <MessageSquare className="h-5 md:h-6 w-5 md:w-6 mr-2 text-blue-600" />
                Send us a Message
              </CardTitle>
              <CardDescription className="text-sm md:text-base">
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            
            {/* Responsive iframe container */}
            <CardContent className="space-y-6">
              <div className="relative aspect-[1/3] w-full overflow-hidden rounded-lg bg-gray-100">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdcRGQ595AkFwaCQjnK6qH2HBx_wJZUYV3_C66IQgixVP1vSA/viewform?embedded=true"
                  className="absolute inset-0 w-full h-full border-none bg-white"
                  
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Information Section */}
        <div className="space-y-6 md:space-y-8">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
              Contact Information
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We're here to help you with all your financial planning needs. Reach out to us through any of the
              following channels.
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="border-l-4 border-l-blue-500 shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-start">
                    <div className="w-10 md:w-12 h-10 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="h-5 md:h-6 w-5 md:w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                      <div className="space-y-2 md:space-y-3">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm md:text-base text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Office Locations */}
      {/* <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Office Locations</h2>
            <p className="text-xl text-gray-600">Visit us at any of our offices across major cities in India.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offices.map((office, index) => (
              <Card
                key={index}
                className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">{office.city}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600 text-sm text-left">{office.address}</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-2" />
                    <p className="text-gray-600 text-sm">{office.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-2" />
                    <p className="text-gray-600 text-sm">{office.email}</p>
                  </div>
                  <Button variant="outline" className="w-full mt-4 bg-transparent">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Map Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us on Map</h2>
            <p className="text-gray-600">Our Mumbai headquarters location</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-xl overflow-hidden">
              <div className="h-96 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Interactive Map Integration</p>
                  <p className="text-sm text-gray-500">Google Maps would be embedded here</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Financial Journey?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Schedule a free consultation with our financial experts and take the first step towards achieving your
            financial goals.
          </p>
          <Link href="https://calendly.com/induswealthmanagement/30min">
          <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8">
            Schedule Free Consultation
          </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
