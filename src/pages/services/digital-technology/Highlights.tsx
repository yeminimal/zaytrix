
import { Card, CardContent } from "@/components/ui/card";
import { Code2, RefreshCcw, Cloud, GanttChartSquare } from "lucide-react";

const Highlights = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight">
          Digital Innovation for Canadian Business
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Next-generation technology solutions built for growth and agility.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card className="border-gray-200 text-center">
          <CardContent className="p-8 flex flex-col items-center">
            <Code2 size={48} className="text-blue-600 mb-6" aria-label="Software Development" />
            <h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">
              Software Development
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              End-to-end, custom applications engineered for your business goals.
            </p>
          </CardContent>
        </Card>
        <Card className="border-gray-200 text-center">
          <CardContent className="p-8 flex flex-col items-center">
            <RefreshCcw size={48} className="text-orange-500 mb-6" aria-label="Digital Transformation" />
            <h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">
              Digital Transformation
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Drive productivity and new value with automation and smart technologies.
            </p>
          </CardContent>
        </Card>
        <Card className="border-gray-200 text-center">
          <CardContent className="p-8 flex flex-col items-center">
            <Cloud size={48} className="text-green-600 mb-6" aria-label="Cloud Solutions" />
            <h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">
              Cloud Solutions
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Secure, scalable cloud infrastructure and services for any workload.
            </p>
          </CardContent>
        </Card>
        <Card className="border-gray-200 text-center">
          <CardContent className="p-8 flex flex-col items-center">
            <GanttChartSquare size={48} className="text-purple-600 mb-6" aria-label="IT Consulting" />
            <h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">
              IT Consulting
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Expert strategy and project leadership to help achieve your digital goals.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

export default Highlights;
