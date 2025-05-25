
import React from 'react';
import { Shield, Award, Users, Clock, Heart, Target } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Globally Connected",
      description: "Access to an extensive network of partner institutions, schools, and organizations across 25+ countries worldwide.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Award,
      title: "Certified Trainers",
      description: "Learn from industry-leading experts with international certifications and years of global education experience.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Target,
      title: "High Success Rate",
      description: "95% of our participants achieve their educational goals through our proven methodologies and personalized support.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Clock,
      title: "Timely Support",
      description: "Fast-track your applications with our 48-hour response guarantee and dedicated support throughout your journey.",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Every journey is unique. We provide tailored guidance that matches your specific needs, goals, and circumstances.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a thriving global community of learners, educators, and institutions committed to educational excellence.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M40 40c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm20 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-yellow-400">Knowledge Exchange</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We're more than just a consultancy – we're your partners in educational transformation and global success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-full">
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-blue-100 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold text-black mb-4">
              Ready to Transform Your Educational Journey?
            </h3>
            <p className="text-black/80 mb-6">
              Join thousands of successful students, teachers, and institutions worldwide.
            </p>
            <button className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
