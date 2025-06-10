
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import PageHead from "@/components/PageHead";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you within 24 hours.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <PageHead 
        title="Contact Us"
        description="Get in touch with Zaytrix Management and Technology Group. Contact us for telecommunications, digital technology, and accounting services across Canada."
        keywords="contact Zaytrix, Canadian technology services, telecommunications consultation, digital transformation, accounting services"
        canonicalUrl="https://zaytrix.com/contact"
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <HeroSection
          title="Get in Touch"
          subtitle="with Zaytrix"
          description="Ready to transform your business? Let's discuss how our comprehensive solutions can help you achieve your goals."
          image={{
            src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop",
            alt: "Professional business consultation meeting"
          }}
        />

        {/* Contact Section */}
        <main className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-gray-200">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-gray-900">
                        Send us a message
                      </h2>
                      <p className="text-gray-600">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="border-gray-300 focus:border-primary"
                            aria-describedby="name-error"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="border-gray-300 focus:border-primary"
                            aria-describedby="email-error"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="border-gray-300 focus:border-primary"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="border-gray-300 focus:border-primary"
                          placeholder="Tell us about your project or how we can help..."
                        />
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full cta-primary"
                      >
                        Send Message
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Contact Information
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    We're here to help with all your telecommunications, digital technology, and accounting needs.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="icon-standard bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold text-gray-900">
                            Email
                          </h3>
                          <p className="text-gray-600">
                            <a href="mailto:info@zaytrix.com" className="hover:text-primary transition-colors">
                              info@zaytrix.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="icon-standard bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold text-gray-900">
                            Phone
                          </h3>
                          <p className="text-gray-600">
                            <a href="tel:+14169999000" className="hover:text-primary transition-colors">
                              +1 (416) 999-9000
                            </a>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="icon-standard bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-6 h-6 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold text-gray-900">
                            Location
                          </h3>
                          <p className="text-gray-600">
                            Greater Toronto Area, Ontario, Canada
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Business Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="text-gray-900 font-medium">9:00 AM - 6:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="text-gray-900 font-medium">10:00 AM - 2:00 PM EST</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="text-gray-900 font-medium">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Services CTA */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-gray-900">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explore our comprehensive range of business solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="Telecommunications"
                description="Advanced telecommunications infrastructure and solutions."
                icon={<div className="w-6 h-6 bg-primary rounded"></div>}
              />

              <ServiceCard
                title="Digital Technology"
                description="Cutting-edge digital solutions and technology services."
                icon={<div className="w-6 h-6 bg-primary rounded"></div>}
              />

              <ServiceCard
                title="Accounting"
                description="Professional accounting services and financial management."
                icon={<div className="w-6 h-6 bg-primary rounded"></div>}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
