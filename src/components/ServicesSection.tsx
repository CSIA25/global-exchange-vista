
import React from 'react';
import { GraduationCap, Users, BookOpen, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "School Consulting",
      description: "Transform your institution with our comprehensive consulting services. We help schools develop international partnerships, curriculum enhancement, and global accreditation programs.",
      features: ["International Partnerships", "Curriculum Development", "Accreditation Support"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Scholarships",
      description: "Access thousands of scholarship opportunities worldwide. Our personalized matching system connects you with funding that aligns with your academic goals and background.",
      features: ["Global Opportunities", "Personalized Matching", "Application Support"],
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: BookOpen,
      title: "Specialized Training",
      description: "Advance your career with our certified training programs. From teaching methodologies to leadership development, we offer courses designed by industry experts.",
      features: ["Certified Programs", "Expert Instructors", "Career Advancement"],
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-blue-600">Global Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to unlock educational opportunities and drive international growth
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="group/btn border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-6">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
