import { Card, CardContent } from "@/components/ui/card";

const TelecomServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
            Our Telecommunications Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions for all your connectivity needs.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-8">
            {/* VoIP Solutions */}
            <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 h-full lg:row-start-1 lg:col-start-1">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="/VoIP.webp"
                    alt="VoIP Solutions"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-blue-600/20"></div>
                </div>
                <div className="p-8 space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                    VoIP Solutions
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Modern voice communication systems with crystal-clear quality, advanced features, and cost-effective pricing.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• HD voice quality</li>
                    <li>• Conference calling</li>
                    <li>• Mobile integration</li>
                    <li>• Call analytics</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Network Infrastructure */}
            <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 h-full lg:row-start-1 lg:col-start-2">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="/Network.webp"
                    alt="Network Infrastructure"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-orange-500/20"></div>
                </div>
                <div className="p-8 space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                    Network Infrastructure
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Design and implementation of robust network infrastructure tailored to your business requirements.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Custom network design</li>
                    <li>• Fiber optic solutions</li>
                    <li>• Wireless networks</li>
                    <li>• Network optimization</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Unified Communications */}
            <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 h-full lg:row-start-2 lg:col-start-1">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="/UniComn.webp"
                    alt="Unified Communications"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-green-600/20"></div>
                </div>
                <div className="p-8 space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                    Unified Communications
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Integrate voice, video, messaging, and collaboration tools into a unified platform for seamless communication.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Video conferencing</li>
                    <li>• Instant messaging</li>
                    <li>• Screen sharing</li>
                    <li>• Mobile apps</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Network Security */}
            <Card className="hover:shadow-xl transition-all duration-300 border-gray-200 h-full lg:row-start-2 lg:col-start-2">
              <CardContent className="p-0">
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src="/NetSec.webp"
                    alt="Network Security"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-purple-600/20"></div>
                </div>
                <div className="p-8 space-y-6">
                  <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                    Network Security
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive security solutions to protect your network infrastructure and communications from threats.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Firewall management</li>
                    <li>• Intrusion detection</li>
                    <li>• VPN solutions</li>
                    <li>• Security monitoring</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelecomServices;
