
import { Suspense, lazy, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { preloadCriticalImages } from "./hooks/useImagePreloader";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Service pages
const Telecom = lazy(() => import("./pages/services/Telecom"));
const DigitalTechnology = lazy(() => import("./pages/services/DigitalTechnology"));
const Accounting = lazy(() => import("./pages/services/Accounting"));

// Telecom sub-pages
const NetworkEngineeringPage = lazy(() => import("./pages/services/telecom/pages/NetworkEngineeringPage"));
const FiberOpticPage = lazy(() => import("./pages/services/telecom/pages/FiberOpticPage"));
const P25SolutionsPage = lazy(() => import("./pages/services/telecom/pages/P25SolutionsPage"));
const SafetyCode6Page = lazy(() => import("./pages/services/telecom/pages/SafetyCode6Page"));
const PrivateNetworksPage = lazy(() => import("./pages/services/telecom/pages/PrivateNetworksPage"));
const SiteMaintenancePage = lazy(() => import("./pages/services/telecom/pages/SiteMaintenancePage"));
const ProjectManagementPage = lazy(() => import("./pages/services/telecom/pages/ProjectManagementPage"));

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    // Preload critical images on app initialization
    preloadCriticalImages();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
              <Suspense fallback={
                <div className="min-h-screen flex items-center justify-center">
                  <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
                </div>
              }>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/telecom" element={<Telecom />} />
                  <Route path="/services/telecom/network-engineering" element={<NetworkEngineeringPage />} />
                  <Route path="/services/telecom/fiber-optic" element={<FiberOpticPage />} />
                  <Route path="/services/telecom/p25-solutions" element={<P25SolutionsPage />} />
                  <Route path="/services/telecom/safety-code-6" element={<SafetyCode6Page />} />
                  <Route path="/services/telecom/private-networks" element={<PrivateNetworksPage />} />
                  <Route path="/services/telecom/site-maintenance" element={<SiteMaintenancePage />} />
                  <Route path="/services/telecom/project-management" element={<ProjectManagementPage />} />
                  <Route path="/services/digital-technology" element={<DigitalTechnology />} />
                  <Route path="/services/accounting" element={<Accounting />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
          <Toaster />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
