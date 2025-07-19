
import OptimizedImage from "../OptimizedImage";

const ServicesSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-gray-900">
            Our Core Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end solutions across three key areas to support your business growth and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Telecommunications */}
          <div className="bg-white rounded-lg shadow group transition-all duration-300 border-gray-200 h-full">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1518770660439-4636190af475"
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
                Advanced telecommunications infrastructure and solutions to keep your business connected and competitive.
              </p>
            </div>
          </div>

          {/* Digital Technology */}
          <div className="bg-white rounded-lg shadow group transition-all duration-300 border-gray-200 h-full">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
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
                Cutting-edge digital solutions and technology services to transform your business operations and customer experience.
              </p>
            </div>
          </div>

          {/* Management */}
          <div className="bg-white rounded-lg shadow group transition-all duration-300 border-gray-200 h-full">
            <div className="relative h-48 overflow-hidden rounded-t-lg">
              <OptimizedImage
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
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
                Professional accounting services and financial management solutions to ensure compliance and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
