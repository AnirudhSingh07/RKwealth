import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MapPin, Clock, Users, TrendingUp, Heart, Coffee, Briefcase, GraduationCap, Upload } from "lucide-react"

export default function CareersPage() {
  const jobListings = [
    {
      title: "Senior Financial Advisor",
      department: "Advisory",
      location: "Mumbai",
      type: "Full-time",
      experience: "5-8 years",
      description:
        "We are looking for an experienced financial advisor to join our growing team and help clients achieve their financial goals.",
      requirements: [
        "Bachelor's degree in Finance, Economics, or related field",
        "5+ years of experience in financial advisory",
        "Strong knowledge of mutual funds and insurance products",
        "Excellent communication and interpersonal skills",
        "Professional certifications (CFP, CFA) preferred",
      ],
    },
    {
      title: "Investment Research Analyst",
      department: "Research",
      location: "Delhi",
      type: "Full-time",
      experience: "2-4 years",
      description:
        "Join our research team to analyze market trends, evaluate investment opportunities, and provide insights to our advisory team.",
      requirements: [
        "Master's degree in Finance or MBA",
        "2+ years of experience in investment research",
        "Strong analytical and quantitative skills",
        "Proficiency in financial modeling",
        "CFA Level 1 or higher preferred",
      ],
    },
    {
      title: "Client Relationship Manager",
      department: "Client Services",
      location: "Bangalore",
      type: "Full-time",
      experience: "3-5 years",
      description:
        "Manage client relationships, ensure excellent service delivery, and help expand our client base through referrals.",
      requirements: [
        "Bachelor's degree in any field",
        "3+ years of experience in client relationship management",
        "Strong communication and problem-solving skills",
        "Experience in financial services industry",
        "Ability to work in a fast-paced environment",
      ],
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "2-3 years",
      description:
        "Drive our digital marketing initiatives, manage social media presence, and create engaging content for our audience.",
      requirements: [
        "Bachelor's degree in Marketing or related field",
        "2+ years of digital marketing experience",
        "Experience with SEO, SEM, and social media marketing",
        "Content creation and copywriting skills",
        "Knowledge of financial services industry preferred",
      ],
    },
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear career progression paths with regular performance reviews and promotions.",
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous learning opportunities, certifications, and skill development programs.",
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, wellness programs, and mental health support.",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and generous leave policies.",
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative work environment with team building activities and celebrations.",
    },
    {
      icon: Briefcase,
      title: "Competitive Package",
      description: "Attractive salary, performance bonuses, and employee stock options.",
    },
  ]

  const values = [
    "Integrity and transparency in all our dealings",
    "Client-first approach in everything we do",
    "Continuous learning and professional development",
    "Innovation and embracing new technologies",
    "Teamwork and collaborative problem-solving",
    "Work-life balance and employee well-being",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-gold-500/20 text-gold-300 border-gold-400/30">Join Our Team</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Build Your Career in
              <span className="text-gold-400"> Wealth Management</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join a dynamic team of financial professionals and help shape the future of wealth management in India.
            </p>
          </div>
        </div>
      </section>

      {/* Life at Indus Wealth */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Life at Indus Wealth Management</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe in creating an environment where our team members can thrive, grow, and make a meaningful
                impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <benefit.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 leading-relaxed">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Values</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Current Openings</h2>
            <p className="text-xl text-gray-600">Explore exciting career opportunities with us.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {jobListings.map((job, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{job.title}</CardTitle>
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="secondary">{job.department}</Badge>
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="h-4 w-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Briefcase className="h-4 w-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700 md:flex-shrink-0">Apply Now</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 leading-relaxed">{job.description}</p>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Submit Resume Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Don't See a Perfect Match?</h2>
              <p className="text-xl text-gray-600">
                Submit your resume and we'll keep you in mind for future opportunities.
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 text-center">Submit Your Resume</CardTitle>
                <CardDescription className="text-center">
                  We're always looking for talented individuals to join our team.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position">Position of Interest</Label>
                  <Input id="position" placeholder="Which position are you interested in?" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input id="experience" placeholder="Enter your years of experience" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resume">Upload Resume</Label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer">
                    <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600">Click to upload or drag and drop</p>
                    <p className="text-sm text-gray-500">PDF, DOC, DOCX (max 5MB)</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                  <Textarea id="coverLetter" placeholder="Tell us why you'd like to join our team..." rows={4} />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3">Submit Application</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Team?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Be part of a company that's transforming the wealth management industry in India.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gold-500 hover:bg-gold-600 text-black font-semibold px-8">
              View Open Positions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-900 px-8 bg-transparent"
            >
              Submit Resume
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
