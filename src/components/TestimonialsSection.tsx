
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Maria Santos",
      role: "Scholarship Recipient",
      country: "Brazil",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      content: "Knowledge Exchange transformed my dreams into reality. Their scholarship program helped me secure funding for my Master's in Environmental Science at Oxford. The support was incredible from start to finish.",
      rating: 5
    },
    {
      name: "James Thompson",
      role: "Fellowship Teacher",
      country: "United Kingdom",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      content: "The international teaching fellowship program opened doors I never knew existed. Now I'm teaching in Singapore with full institutional support. It's been a life-changing experience.",
      rating: 5
    },
    {
      name: "Dr. Priya Patel",
      role: "School Director",
      country: "India",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      content: "Our school's transformation through Knowledge Exchange's consulting services has been remarkable. We've established partnerships with 5 international schools and achieved global accreditation.",
      rating: 5
    },
    {
      name: "Ahmed Hassan",
      role: "Training Graduate",
      country: "Egypt",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      content: "The specialized training in educational leadership was exactly what I needed. The certification helped me secure a principal position at an international school in Dubai.",
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Success Stories from Around the <span className="text-yellow-400">World</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Real people, real results. Discover how Knowledge Exchange has transformed lives globally.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/20">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-yellow-400">
                  <img 
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="text-center md:text-left flex-1">
                {/* Stars */}
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-white mb-6 leading-relaxed italic">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Attribution */}
                <div>
                  <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                  <p className="text-blue-200">{testimonials[currentIndex].role}</p>
                  <p className="text-yellow-400 text-sm">{testimonials[currentIndex].country}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={prevTestimonial}
              className="border-white/30 text-white hover:bg-white hover:text-blue-900 rounded-full w-12 h-12 p-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-yellow-400 scale-110' : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="sm" 
              onClick={nextTestimonial}
              className="border-white/30 text-white hover:bg-white hover:text-blue-900 rounded-full w-12 h-12 p-0"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
