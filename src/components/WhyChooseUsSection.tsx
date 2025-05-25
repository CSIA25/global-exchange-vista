
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Clock, Heart, Target } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Globally Connected",
      description: "Access to an extensive network of partner institutions, schools, and organizations across 25+ countries worldwide.",
      color: "from-[#0A2342] to-[#14B8A6]"
    },
    {
      icon: Award,
      title: "Certified Trainers",
      description: "Learn from industry-leading experts with international certifications and years of global education experience.",
      color: "from-[#14B8A6] to-[#FFB703]"
    },
    {
      icon: Target,
      title: "High Success Rate",
      description: "95% of our participants achieve their educational goals through our proven methodologies and personalized support.",
      color: "from-[#FFB703] to-[#0A2342]"
    },
    {
      icon: Clock,
      title: "Timely Support",
      description: "Fast-track your applications with our 48-hour response guarantee and dedicated support throughout your journey.",
      color: "from-[#0A2342] to-[#FFB703]"
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "Every journey is unique. We provide tailored guidance that matches your specific needs, goals, and circumstances.",
      color: "from-[#FFB703] to-[#14B8A6]"
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Join a thriving global community of learners, educators, and institutions committed to educational excellence.",
      color: "from-[#14B8A6] to-[#0A2342]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
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
    <section className="py-24 bg-gradient-to-br from-[#0A2342] to-[#14B8A6] relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 right-10 w-64 h-64 bg-[#FFB703]/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />
      
      <motion.div
        className="absolute bottom-10 left-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Why Choose <span className="text-[#FFB703]">Knowledge Exchange</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We're more than just a consultancy – we're your partners in educational transformation and global success.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                rotateY: 5,
              }}
              style={{ perspective: 1000 }}
            >
              <div className="glass-morphism rounded-3xl p-8 border border-white/20 hover:border-[#FFB703]/50 transition-all duration-500 h-full group-hover:shadow-2xl">
                <motion.div
                  className={`w-20 h-20 mb-8 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-lg`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 360,
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#FFB703] transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-200 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="bg-gradient-to-r from-[#FFB703] to-[#14B8A6] rounded-3xl p-8 inline-block shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-[#0A2342] mb-4">
              Ready to Transform Your Educational Journey?
            </h3>
            <p className="text-[#0A2342]/80 mb-6 text-lg">
              Join thousands of successful students, teachers, and institutions worldwide.
            </p>
            <motion.button
              className="bg-[#0A2342] hover:bg-[#0A2342]/90 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
