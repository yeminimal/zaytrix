
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
import { Mail, Phone, MapPin, Radio, Monitor, Calculator } from "lucide-react";

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
        description="Get in touch with Zaytrix Management and Technology Group. Contact us for telecommunications, digital technology, and management services across Canada."
        keywords="contact Zaytrix, Canadian technology services, telecommunications consultation, digital transformation, management services"
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
                    We're here to help with all your telecommunications, digital technology, and management needs.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card className="border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
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
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold text-gray-900">
                            Phone
                          </h3>
                          <div className="text-gray-600 space-y-1">
                            <p>
                              <a href="tel:+14167793502" className="hover:text-primary transition-colors">
                                +1 (416) 779-3502
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-gray-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
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

            {/* Nigerian Subsidiary Information */}
            <div className="mt-16 pt-12 border-t border-gray-200">
              <div className="text-center space-y-4 mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  Subsidiary Information
                </h2>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <Card className="border-gray-200">
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      <div className="text-center space-y-2">
                        <h3 className="text-xl font-semibold text-gray-900">
                          Nigeria Office
                        </h3>
                        <p className="text-lg font-medium text-primary">
                          Surge Network Nigeria Limited
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Location */}
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-6 h-6 text-primary" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-semibold text-gray-900">Location</h4>
                            <p className="text-gray-600 leading-relaxed">
                              Plot 12 Muyi Adekola Avenue<br />
                              Adegbose Phase 2 Estate<br />
                              Ikorodu, Lagos
                            </p>
                          </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Phone className="w-6 h-6 text-primary" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-semibold text-gray-900">Phone</h4>
                            <p className="text-gray-600">
                              <a href="tel:+2349018128924" className="hover:text-primary transition-colors">
                                +234 901 812 8924
                              </a>
                            </p>
                          </div>
                        </div>

                        {/* Primary Email */}
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mail className="w-6 h-6 text-primary" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-semibold text-gray-900">Primary Email</h4>
                            <p className="text-gray-600">
                              <a href="mailto:surgenet20@gmail.com" className="hover:text-primary transition-colors">
                                surgenet20@gmail.com
                              </a>
                            </p>
                          </div>
                        </div>

                        {/* Secondary Email */}
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Mail className="w-6 h-6 text-primary" />
                          </div>
                          <div className="space-y-1">
                            <h4 className="font-semibold text-gray-900">Secondary Email</h4>
                            <p className="text-gray-600">
                              <a href="mailto:Joseph.ola@surgenetng.com" className="hover:text-primary transition-colors">
                                Joseph.ola@surgenetng.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
  {/* Telecommunications */}
  <div className="bg-white rounded-lg shadow group transition-all duration-300 border-gray-200 h-full">
    <div className="relative h-48 overflow-hidden rounded-t-lg">
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
        alt="Telecommunications infrastructure"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
        width="800"
        height="400"
      />
      <div className="absolute inset-0 bg-blue-600/20"></div>
    </div>
    <div className="p-8 space-y-3">
      <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
        Telecommunications
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Advanced telecommunications infrastructure and solutions.
      </p>
    </div>
  </div>

  {/* Digital Technology */}
  <div className="bg-white rounded-lg shadow group transition-all duration-300 border-gray-200 h-full">
    <div className="relative h-48 overflow-hidden rounded-t-lg">
      <img
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop"
        alt="Digital technology solutions"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
        width="800"
        height="400"
      />
      <div className="absolute inset-0 bg-orange-500/20"></div>
    </div>
    <div className="p-8 space-y-3">
      <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
        Digital Technology
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Cutting-edge digital solutions and technology services.
      </p>
    </div>
  </div>

  {/* Management */}
  <div className="bg-white rounded-lg shadow group transition-all duration-300 border-gray-200 h-full">
    <div className="relative h-48 overflow-hidden rounded-t-lg">
      <img
        src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=800&auto=format&fit=crop"
        alt="Professional management services"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
        width="800"
        height="400"
      />
      <div className="absolute inset-0 bg-green-600/20"></div>
    </div>
    <div className="p-8 space-y-3">
      <h3 className="text-2xl font-bold text-gray-900 tracking-tight">
        Management
      </h3>
      <p className="text-gray-600 leading-relaxed">
        Professional management services and financial solutions.
      </p>
    </div>
  </div>
</div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <Button 
                asChild
                size="lg"
                className="cta-primary"
              >
                <a href="/contact">Start Your Project</a>
              </Button>
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="cta-outline"
              >
                <a href="/services">View All Services</a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
