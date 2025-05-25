
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Globe, BookOpen, Users, Award, Target } from 'lucide-react';

export const FloatingElements = () => {
  const elements = [
    { 
      icon: GraduationCap, 
      position: { top: '15%', left: '10%' },
      delay: 0,
      color: '#FFB703'
    },
    { 
      icon: Globe, 
      position: { top: '25%', right: '15%' },
      delay: 1,
      color: '#14B8A6'
    },
    { 
      icon: BookOpen, 
      position: { bottom: '30%', left: '8%' },
      delay: 2,
      color: '#FFB703'
    },
    { 
      icon: Users, 
      position: { bottom: '20%', right: '12%' },
      delay: 3,
      color: '#14B8A6'
    },
    { 
      icon: Award, 
      position: { top: '40%', left: '5%' },
      delay: 0.5,
      color: '#FFB703'
    },
    { 
      icon: Target, 
      position: { top: '60%', right: '8%' },
      delay: 1.5,
      color: '#14B8A6'
    },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={element.position}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
            rotate: [0, 180, 360],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 8,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="w-16 h-16 glass-morphism rounded-2xl flex items-center justify-center"
            whileHover={{ scale: 1.2 }}
            style={{
              background: `linear-gradient(135deg, ${element.color}20, ${element.color}40)`,
              border: `1px solid ${element.color}30`,
            }}
          >
            <element.icon 
              className="w-8 h-8" 
              style={{ color: element.color }}
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
