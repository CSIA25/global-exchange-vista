
import React from 'react';
import { Calendar, FileText, Video, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ResourcesSection = () => {
  const resources = [
    {
      type: "Guide",
      icon: FileText,
      title: "Complete Guide to International Scholarships",
      description: "Everything you need to know about finding, applying for, and securing scholarships worldwide.",
      date: "December 15, 2024",
      readTime: "8 min read",
      category: "Scholarships"
    },
    {
      type: "Webinar",
      icon: Video,
      title: "Building Global Partnerships for Educational Institutions",
      description: "Learn strategies for establishing meaningful international collaborations and exchange programs.",
      date: "December 10, 2024",
      readTime: "45 min watch",
      category: "Consulting"
    },
    {
      type: "Article",
      icon: Calendar,
      title: "2025 Trends in International Education",
      description: "Discover the latest trends shaping the future of global education and training opportunities.",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Insights"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Latest <span className="text-blue-600">Resources & Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest guides, articles, and educational content designed to help you succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {resources.map((resource, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
              <div className="relative">
                {/* Resource Type Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {resource.type}
                  </span>
                </div>
                
                {/* Header with gradient background */}
                <div className="h-32 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span>{resource.date}</span>
                  <span>{resource.readTime}</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {resource.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {resource.description}
                </CardDescription>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                    {resource.category}
                  </span>
                  
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 group/btn p-0">
                    Read More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Resources CTA */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full px-8 py-3">
            View All Resources
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
