"use client"

import { useState } from "react"
import { ArrowRight, Check, Globe, MapPin, MessageSquare, Plane, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ResponsiveContainer } from "@/components/responsive-container"
import { AffiliateLink } from "@/components/affiliate-link"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Mock data for travel agents
const travelAgents = [
  {
    id: "global-med-tours",
    name: "Global Med Tours",
    logo: "/travel-agency-logo.png",
    description: "Specializing in cardiac and orthopedic treatments in Thailand and India.",
    destinations: ["Thailand", "India", "Singapore"],
    specialties: ["Cardiac Surgery", "Orthopedics", "Dental"],
    rating: 4.9,
    reviewCount: 124,
    website: "https://globalmedtours.com",
    featured: true,
    services: ["Airport Transfers", "Accommodation", "Translation", "Local Transportation", "Visa Assistance"],
    languages: ["English", "Thai", "Hindi"],
  },
  {
    id: "med-journey",
    name: "Med Journey",
    logo: "/placeholder.svg?key=59xbj",
    description: "Full-service medical tourism agency with luxury recovery accommodations.",
    destinations: ["Turkey", "Mexico", "Costa Rica"],
    specialties: ["Cosmetic Surgery", "Dental Work", "Weight Loss Surgery"],
    rating: 4.8,
    reviewCount: 98,
    website: "https://medjourney.com",
    featured: true,
    services: ["Airport Transfers", "Luxury Accommodation", "Translation", "Sightseeing", "Visa Assistance"],
    languages: ["English", "Spanish", "Turkish"],
  },
  {
    id: "health-voyage",
    name: "Health Voyage",
    logo: "/placeholder.svg?key=bzxww",
    description: "Budget-friendly packages with comprehensive care coordination.",
    destinations: ["Malaysia", "Philippines", "Vietnam"],
    specialties: ["General Surgery", "Fertility Treatments", "Cancer Care"],
    rating: 4.7,
    reviewCount: 87,
    website: "https://healthvoyage.com",
    featured: false,
    services: ["Airport Transfers", "Budget Accommodation", "Translation", "Medical Record Management"],
    languages: ["English", "Malay", "Vietnamese"],
  },
  {
    id: "asia-health-travel",
    name: "Asia Health Travel",
    logo: "/placeholder.svg?key=asiahealthtravel",
    description: "Specialists in Southeast Asian medical destinations with personalized care.",
    destinations: ["Thailand", "Singapore", "Malaysia"],
    specialties: ["Orthopedics", "Cardiology", "Oncology"],
    rating: 4.6,
    reviewCount: 112,
    website: "https://asiahealthtravel.com",
    featured: false,
    services: ["Airport Transfers", "Accommodation", "Translation", "24/7 Support", "Family Accommodation"],
    languages: ["English", "Thai", "Chinese", "Malay"],
  },
  {
    id: "euro-med-travel",
    name: "Euro Med Travel",
    logo: "/placeholder.svg?key=euromedtravel",
    description: "European medical tourism specialists with premium service packages.",
    destinations: ["Germany", "Spain", "Turkey"],
    specialties: ["Orthopedics", "Neurology", "Rehabilitation"],
    rating: 4.8,
    reviewCount: 76,
    website: "https://euromedtravel.com",
    featured: false,
    services: [
      "Airport Transfers",
      "Premium Accommodation",
      "Translation",
      "Concierge Service",
      "Post-treatment Vacation",
    ],
    languages: ["English", "German", "Spanish", "Turkish"],
  },
]

// Mock data for destinations
const destinations = [
  "Thailand",
  "India",
  "Singapore",
  "Turkey",
  "Mexico",
  "Costa Rica",
  "Malaysia",
  "Philippines",
  "Vietnam",
  "Germany",
  "Spain",
  "South Korea",
]

// Mock data for specialties
const specialties = [
  "Cardiac Surgery",
  "Orthopedics",
  "Dental",
  "Cosmetic Surgery",
  "Weight Loss Surgery",
  "Fertility Treatments",
  "Cancer Care",
  "Neurology",
  "Ophthalmology",
  "Rehabilitation",
]

export default function TravelAgentsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDestination, setSelectedDestination] = useState("")
  const [selectedSpecialty, setSelectedSpecialty] = useState("")
  const [viewMode, setViewMode] = useState("grid")

  // Filter agents based on search and filters
  const filteredAgents = travelAgents.filter((agent) => {
    const matchesSearch =
      searchTerm === "" ||
      agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesDestination = selectedDestination === "" || agent.destinations.includes(selectedDestination)

    const matchesSpecialty = selectedSpecialty === "" || agent.specialties.includes(selectedSpecialty)

    return matchesSearch && matchesDestination && matchesSpecialty
  })

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        {/* All Travel Agents */}
        <section className="py-12 md:py-16 bg-gray-50">
          <ResponsiveContainer>
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">All Travel Agents</h2>
              <p className="text-gray-500 mt-1">Find the perfect travel partner for your medical journey</p>
            </div>

            {viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAgents.map((agent) => (
                  <Card key={agent.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="p-4 border-b flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gray-100 p-1 flex items-center justify-center">
                          <img
                            src={agent.logo || "/placeholder.svg"}
                            alt={`${agent.name} logo`}
                            className="w-10 h-10 object-contain rounded-full"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">{agent.name}</h3>
                          <div className="flex items-center text-sm">
                            <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400 mr-1" />
                            <span className="font-medium">{agent.rating}</span>
                            <span className="text-gray-500 ml-1">({agent.reviewCount})</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-5">
                        <p className="text-gray-600 text-sm mb-4">{agent.description}</p>

                        <div className="mb-4">
                          <h4 className="text-xs font-medium text-gray-500 mb-2">DESTINATIONS</h4>
                          <div className="flex flex-wrap gap-1">
                            {agent.destinations.map((destination) => (
                              <Badge
                                key={destination}
                                variant="outline"
                                className="text-xs bg-blue-50 text-blue-700 border-blue-200"
                              >
                                {destination}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mb-5">
                          <h4 className="text-xs font-medium text-gray-500 mb-2">SPECIALTIES</h4>
                          <div className="flex flex-wrap gap-1">
                            {agent.specialties.map((specialty) => (
                              <Badge
                                key={specialty}
                                variant="outline"
                                className="text-xs bg-green-50 text-green-700 border-green-200"
                              >
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <AffiliateLink
                            href={agent.website}
                            vendorId={agent.id}
                            trackingId="agent-profile"
                            campaign="agent-listing"
                            className="flex-1"
                          >
                            <Button className="w-full text-white">View Profile</Button>
                          </AffiliateLink>
                          <Button variant="outline" className="flex-1">
                            Contact
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredAgents.map((agent) => (
                  <Card key={agent.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="p-5 flex flex-col md:flex-row gap-5">
                        <div className="md:w-1/4 flex flex-col items-center text-center md:border-r md:pr-5">
                          <div className="w-20 h-20 rounded-full bg-gray-100 p-1 flex items-center justify-center mb-3">
                            <img
                              src={agent.logo || "/placeholder.svg"}
                              alt={`${agent.name} logo`}
                              className="w-16 h-16 object-contain rounded-full"
                            />
                          </div>
                          <h3 className="font-semibold text-lg">{agent.name}</h3>
                          <div className="flex items-center justify-center text-sm mt-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                            <span className="font-medium">{agent.rating}</span>
                            <span className="text-gray-500 ml-1">({agent.reviewCount})</span>
                          </div>

                          <div className="mt-4 flex flex-col gap-2">
                            <AffiliateLink
                              href={agent.website}
                              vendorId={agent.id}
                              trackingId="agent-profile"
                              campaign="agent-listing"
                              className="w-full"
                            >
                              <Button className="w-full">View Profile</Button>
                            </AffiliateLink>
                            <Button variant="outline" className="w-full">
                              Contact
                            </Button>
                          </div>
                        </div>

                        <div className="md:w-3/4">
                          <p className="text-gray-600 mb-4">{agent.description}</p>

                          <Tabs defaultValue="details" className="w-full">
                            <TabsList className="mb-4">
                              <TabsTrigger value="details">Details</TabsTrigger>
                              <TabsTrigger value="services">Services</TabsTrigger>
                              <TabsTrigger value="languages">Languages</TabsTrigger>
                            </TabsList>

                            <TabsContent value="details" className="space-y-4">
                              <div>
                                <h4 className="text-xs font-medium text-gray-500 mb-2">DESTINATIONS</h4>
                                <div className="flex flex-wrap gap-1">
                                  {agent.destinations.map((destination) => (
                                    <Badge
                                      key={destination}
                                      variant="outline"
                                      className="text-xs bg-blue-50 text-blue-700 border-blue-200"
                                    >
                                      <MapPin className="h-3 w-3 mr-1" />
                                      {destination}
                                    </Badge>
                                  ))}
                                </div>
                              </div>

                              <div>
                                <h4 className="text-xs font-medium text-gray-500 mb-2">SPECIALTIES</h4>
                                <div className="flex flex-wrap gap-1">
                                  {agent.specialties.map((specialty) => (
                                    <Badge
                                      key={specialty}
                                      variant="outline"
                                      className="text-xs bg-green-50 text-green-700 border-green-200"
                                    >
                                      {specialty}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </TabsContent>

                            <TabsContent value="services">
                              <h4 className="text-xs font-medium text-gray-500 mb-2">SERVICES PROVIDED</h4>
                              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {agent.services.map((service) => (
                                  <li key={service} className="flex items-center text-sm">
                                    <Check className="h-4 w-4 text-green-500 mr-2" />
                                    {service}
                                  </li>
                                ))}
                              </ul>
                            </TabsContent>

                            <TabsContent value="languages">
                              <h4 className="text-xs font-medium text-gray-500 mb-2">LANGUAGES SPOKEN</h4>
                              <div className="flex flex-wrap gap-1">
                                {agent.languages.map((language) => (
                                  <Badge key={language} variant="outline" className="text-xs">
                                    <Globe className="h-3 w-3 mr-1" />
                                    {language}
                                  </Badge>
                                ))}
                              </div>
                            </TabsContent>
                          </Tabs>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </ResponsiveContainer>
        </section>

        {/* How It Works */}
        <section className="py-12 md:py-16">
          <ResponsiveContainer>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4 bg-primary hover:bg-primary">How It Works</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Travel Support System</h2>
                <p className="text-gray-600 mb-8">
                  Our travel agents work alongside your chosen hospital to ensure your medical journey is as smooth and
                  stress-free as possible.
                </p>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary font-bold">
                          1
                        </div>
                        <span>Select Your Hospital First</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-11">
                      Begin by choosing your hospital and treatment. Our platform helps you find the best medical
                      facilities for your needs.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary font-bold">
                          2
                        </div>
                        <span>Find a Compatible Travel Agent</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-11">
                      Search for travel agents who specialize in your destination and can coordinate with your chosen
                      hospital.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary font-bold">
                          3
                        </div>
                        <span>Review Travel Packages</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-11">
                      Compare packages from different agents that include transportation, accommodation, and local
                      support services.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary font-bold">
                          4
                        </div>
                        <span>Enjoy Seamless Coordination</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-11">
                      Your travel agent will coordinate with your hospital to ensure all logistics align with your
                      treatment schedule.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-primary-100 rounded-3xl transform rotate-3 scale-105 opacity-50"></div>
                <img
                  src="/placeholder.svg?key=travelagentcoordination"
                  alt="Travel agent coordinating with hospital"
                  className="relative rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Services Provided */}
        <section className="py-12 md:py-16 bg-primary-50">
          <ResponsiveContainer>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge className="mb-4 bg-primary hover:bg-primary">Travel Services</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Travel Agents Provide</h2>
              <p className="text-gray-600">
                Our travel agents handle all non-medical aspects of your journey, allowing you to focus entirely on your
                health and recovery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                    <Plane className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Transportation</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>International flight bookings and coordination</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Airport pickup and drop-off services</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Local transportation to and from medical facilities</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Emergency transportation arrangements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Accommodation</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Medical-friendly hotel or apartment arrangements</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Options for accompanying family members</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Extended stay coordination for recovery periods</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Special dietary needs and room requirements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Local Support</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Translation and interpreter services</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>24/7 emergency assistance and support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Coordination with hospital staff and appointments</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Cultural guidance and local recommendations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section - Modified to invite travel agents to join the platform */}
        <section className="py-16 md:py-24 bg-primary text-white">
          <ResponsiveContainer>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Are You a Travel Agent?</h2>
              <p className="text-white/80 text-lg mb-8">
                Join our platform to connect with patients seeking medical care abroad and grow your medical tourism
                business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Apply to Become a Partner
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
