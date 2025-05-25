
import React from 'react';
import { MapPin, Users, Building, Trophy } from 'lucide-react';

const GlobalPresenceSection = () => {
  const stats = [
    { icon: MapPin, number: "25+", label: "Countries Served", color: "text-blue-600" },
    { icon: Users, number: "15,000+", label: "Students Supported", color: "text-green-600" },
    { icon: Building, number: "500+", label: "Partner Institutions", color: "text-purple-600" },
    { icon: Trophy, number: "95%", label: "Success Rate", color: "text-yellow-600" }
  ];

  const regions = [
    { name: "North America", count: "120+ Partners", position: "top-24 left-24" },
    { name: "Europe", count: "180+ Partners", position: "top-20 left-1/2" },
    { name: "Asia Pacific", count: "200+ Partners", position: "top-32 right-24" },
    { name: "Middle East", count: "80+ Partners", position: "top-40 left-2/3" },
    { name: "Africa", count: "60+ Partners", position: "top-48 left-1/2" },
    { name: "South America", count: "90+ Partners", position: "bottom-32 left-32" }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Trusted Globally, <span className="text-blue-600">Locally Connected</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our worldwide network spans continents, connecting opportunities across cultures and borders.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* World Map Visualization */}
        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 md:p-16 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>

          <div className="text-center mb-12 relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Global Network
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From bustling metropolitan universities to innovative rural schools, we connect with institutions worldwide.
            </p>
          </div>

          {/* Simplified World Map with Regions */}
          <div className="relative h-96 bg-white/50 rounded-2xl border-2 border-blue-200 overflow-hidden">
            {/* Central Globe Icon */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center animate-pulse">
                <MapPin className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Regional Indicators */}
            {regions.map((region, index) => (
              <div key={index} className={`absolute ${region.position} group cursor-pointer`}>
                <div className="relative">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute"></div>
                  <div className="w-4 h-4 bg-blue-600 rounded-full relative z-10"></div>
                  
                  {/* Tooltip */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-black text-white px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap text-sm z-20">
                    <div className="font-semibold">{region.name}</div>
                    <div className="text-gray-300">{region.count}</div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black"></div>
                  </div>
                </div>
              </div>
            ))}

            {/* Connection Lines (decorative) */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
              <defs>
                <pattern id="dots" patternUnits="userSpaceOnUse" width="20" height="20">
                  <circle cx="10" cy="10" r="1" fill="#3B82F6"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#dots)"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresenceSection;
