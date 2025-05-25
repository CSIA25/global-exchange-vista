
import React from 'react';
import { motion } from 'framer-motion';
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
      color: "from-[#0A2342] to-[#14B8A6]",
      bgGradient: "from-[#0A2342]/10 to-[#14B8A6]/10"
    },
    {
      icon: GraduationCap,
      title: "Scholarships",
      description: "Access thousands of scholarship opportunities worldwide. Our personalized matching system connects you with funding that aligns with your academic goals and background.",
      features: ["Global Opportunities", "Personalized Matching", "Application Support"],
      color: "from-[#FFB703] to-[#0A2342]",
      bgGradient: "from-[#FFB703]/10 to-[#0A2342]/10"
    },
    {
      icon: BookOpen,
      title: "Specialized Training",
      description: "Advance your career with our certified training programs. From teaching methodologies to leadership development, we offer courses designed by industry experts.",
      features: ["Certified Programs", "Expert Instructors", "Career Advancement"],
      color: "from-[#14B8A6] to-[#FFB703]",
      bgGradient: "from-[#14B8A6]/10 to-[#FFB703]/10"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-[#F9FAFB] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#FFB703] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-[#14B8A6] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A2342] mb-6">
            Our <span className="text-gradient">Global Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to unlock educational opportunities and drive international growth
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                rotateX: 5,
              }}
              style={{ perspective: 1000 }}
            >
              <Card className={`group h-full border-0 bg-gradient-to-br ${service.bgGradient} backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden`}>
                <CardHeader className="text-center pb-6 relative">
                  <motion.div
                    className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <CardTitle className="text-2xl font-bold text-[#0A2342] group-hover:text-[#14B8A6] transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="text-center space-y-6">
                  <CardDescription className="text-gray-600 leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="text-sm text-gray-500 flex items-center justify-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * featureIndex }}
                      >
                        <div className="w-2 h-2 bg-[#FFB703] rounded-full mr-3"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      className="group/btn border-[#14B8A6] text-[#14B8A6] hover:bg-[#14B8A6] hover:text-white rounded-full px-8 py-3 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
