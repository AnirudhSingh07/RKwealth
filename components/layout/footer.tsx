import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Financial Articles", href: "/articles" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ]

  const services = [
    { name: "Financial Planning", href: "/services" },
    { name: "Mutual Fund Advisory", href: "/services" },
    { name: "Insurance Planning", href: "/services" },
    { name: "Retirement Planning", href: "/services" },
    { name: "Tax Advisory", href: "/services" },
  ]

  const legal = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Disclaimer", href: "#" }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
               <img src="/rklogo.png" alt="" className="h-10 w-10 rounded-xl" />
              <div>
                <div className="font-bold text-white text-lg">RK Wealth</div>
              </div>
            </Link>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner for comprehensive financial planning, investments, and wealth management services
              across India.
            </p>
            <div className="space-y-3">
              {/* <div className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-3" />
                +91 9685545543
              </div> */}
              {/* <div className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-3" />
                care.rkwealth@gmail.com
              </div> */}
              <div className="flex items-start text-gray-400">
                <MapPin className="h-4 w-4 mr-3 mt-1" />
                <span className="text-sm">
                  203-B, Silver Sanchora,
                  <br />
                  RNT Marg Indore (M.P) 452001
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="text-gray-400 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            
            {/* <div className="space-y-3">
              <Input
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Subscribe</Button>
            </div> */}

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <Link
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">© 2024 RK Wealth Pvt. Ltd. All rights reserved.</div>
            <div className="flex flex-wrap gap-6">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-xs text-center">
              Disclaimer: Mutual Fund investments are subject to market risks. Please read all scheme
              related documents carefully.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
