
import { Book } from "lucide-react";

const ELearning = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" 
            alt="E-learning and training" 
            className="rounded-lg shadow-xl w-full h-[400px] object-cover"
          />
        </div>
        {/* Right: Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
              E-Learning Platforms
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Empower your workforce with tailored online education systems.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Book size={32} className="text-orange-500 flex-shrink-0 mt-1" aria-label="Engaging Training Solutions icon" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                  Engaging Training Solutions
                </h3>
                <p className="text-gray-600 mt-1">
                  Interactive and effective training solutions that improve employee skills.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Book size={32} className="text-blue-600 flex-shrink-0 mt-1" aria-label="Knowledge Sharing icon" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                  Knowledge Sharing
                </h3>
                <p className="text-gray-600 mt-1">
                  Enhanced knowledge sharing capabilities across your organization.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Book size={32} className="text-green-600 flex-shrink-0 mt-1" aria-label="Productivity Boost icon" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
                  Productivity Boost
                </h3>
                <p className="text-gray-600 mt-1">
                  Boost productivity through comprehensive online education systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ELearning;
