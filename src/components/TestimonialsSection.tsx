
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#0A2342] via-[#0D2951] to-[#14B8A6] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-[#FFB703]/20 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />
      
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Success Stories from Around the <span className="text-[#FFB703]">World</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Real people, real results. Discover how Knowledge Exchange has transformed lives globally.
          </p>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="glass-morphism rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                {/* Avatar */}
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-[#FFB703] shadow-xl">
                    <img 
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="text-center md:text-left flex-1">
                  {/* Stars */}
                  <motion.div
                    className="flex justify-center md:justify-start mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <Star className="w-5 h-5 text-[#FFB703] fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Quote */}
                  <motion.blockquote
                    className="text-lg md:text-xl text-white mb-6 leading-relaxed italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    "{testimonials[currentIndex].content}"
                  </motion.blockquote>

                  {/* Attribution */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-xl font-bold text-white">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-300">{testimonials[currentIndex].role}</p>
                    <p className="text-[#FFB703] text-sm font-medium">{testimonials[currentIndex].country}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={prevTestimonial}
                className="border-white/30 text-white hover:bg-white hover:text-[#0A2342] rounded-full w-12 h-12 p-0 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
            </motion.div>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-[#FFB703] scale-110' : 'bg-white/30 hover:bg-white/50'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={nextTestimonial}
                className="border-white/30 text-white hover:bg-white hover:text-[#0A2342] rounded-full w-12 h-12 p-0 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
