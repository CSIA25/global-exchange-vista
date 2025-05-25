
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { FloatingElements } from './FloatingElements';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A2342] via-[#0D2951] to-[#14B8A6]">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A2342]/90 to-[#14B8A6]/20"></div>
        
        {/* Animated world map pattern */}
        <div className="absolute inset-0 opacity-10">
          <motion.div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFB703' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm30 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm30 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
            }}
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        {/* Floating geometric shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 bg-[#FFB703]/20 rounded-full"
          animate={{
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute bottom-32 right-32 w-24 h-24 bg-[#14B8A6]/30 rounded-lg"
          animate={{
            rotate: [0, 180, 360],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating 3D Elements */}
      <FloatingElements />

      {/* Main Content */}
      <motion.div
        className="relative z-20 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Where Global Talent
            <br />
            <span className="text-gradient bg-gradient-to-r from-[#FFB703] to-[#14B8A6] bg-clip-text text-transparent">
              Meets Opportunity
            </span>
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants}>
          <p className="text-xl md:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Launch your journey to scholarships, global teaching, and professional trainings—anywhere in the world.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="animate-pulse-glow"
          >
            <Button size="lg" className="bg-[#FFB703] hover:bg-[#FFB703]/90 text-[#0A2342] font-bold px-10 py-6 rounded-full text-xl group shadow-2xl">
              Get Started
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/30 text-white hover:bg-white hover:text-[#0A2342] px-10 py-6 rounded-full text-xl glass-morphism backdrop-blur-sm"
            >
              <Play className="mr-3 w-6 h-6" />
              Explore Services
            </Button>
          </motion.div>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          variants={itemVariants}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "25+", label: "Countries" },
            { number: "15K+", label: "Students Placed" },
            { number: "500+", label: "Partner Schools" },
            { number: "95%", label: "Success Rate" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="glass-morphism rounded-2xl p-6"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <div className="text-3xl font-bold text-[#FFB703] mb-2">{stat.number}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
          <motion.div
            className="w-2 h-4 bg-[#FFB703] rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
