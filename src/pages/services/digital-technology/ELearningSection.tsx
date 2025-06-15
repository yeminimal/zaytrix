import { Link } from "react-router-dom";
import { BookOpen, TrendingUp, Users } from "lucide-react";

const ELearningSection = () => {
  return (
    <section className="py-20">
      <div 
        className="brand-overlay min-h-[600px] flex items-center"
        style={{ 
          backgroundImage: `url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container-custom py-10 sm:py-20">
          <div className="text-center space-y-10 sm:space-y-12 text-white max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              <h2>
                E-learning Platforms
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Create engaging educational experiences with our custom e-learning platform development services.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-y-12 gap-x-6 md:gap-x-12 px-3 sm:px-0">
              <div className="space-y-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">
                    Interactive Learning
                  </h3>
                  <p className="text-white/90">
                    Engaging multimedia content and interactive learning modules.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">
                    Progress Tracking
                  </h3>
                  <p className="text-white/90">
                    Comprehensive analytics and progress tracking for learners and administrators.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-white">
                    Scalable Infrastructure
                  </h3>
                  <p className="text-white/90">
                    Robust platforms that scale with your educational needs.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/contact" className="cta-primary bg-white text-primary hover:bg-gray-50 inline-block">
              Start Your E-learning Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ELearningSection;
