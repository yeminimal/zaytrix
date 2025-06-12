
import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  features?: string[];
  icon?: ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, features, icon, className = "" }: ServiceCardProps) => {
  return (
    <Card className={`border-gray-200 hover:shadow-lg transition-all duration-300 ${className}`}>
      <CardContent className="p-8">
        <div className="space-y-6">
          {icon && (
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
              {icon}
            </div>
          )}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
              {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
              {description}
            </p>
            {features && features.length > 0 && (
              <ul className="space-y-2 text-sm text-gray-600">
                {features.map((feature, index) => (
                  <li key={index}>• {feature}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
