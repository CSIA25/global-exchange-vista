
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Star } from 'lucide-react';

const PrePaymentBanner = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-[#FFB703] to-[#14B8A6] relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.05'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex justify-center mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex items-center space-x-6">
              {[Clock, Shield, Star].map((Icon, index) => (
                <motion.div
                  key={index}
                  className="w-16 h-16 bg-black/10 rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-[#0A2342]" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.h3
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A2342] mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Secure Your Global Opportunity Today
          </motion.h3>
          
          <motion.p
            className="text-xl md:text-2xl text-[#0A2342]/80 mb-10 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Limited spots available for our premium programs. Reserve your place with a small deposit and unlock exclusive access to international opportunities.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-[#0A2342] hover:bg-[#0A2342]/90 text-white font-bold px-10 py-6 rounded-full text-xl shadow-2xl">
                Pre-Pay Now
              </Button>
            </motion.div>
            
            <div className="text-[#0A2342]/70 text-base">
              <span className="font-semibold">✓ No commitment required</span> • <span className="font-semibold">✓ Full refund available</span>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            {[
              { value: "48h", label: "Response Time" },
              { value: "98%", label: "Success Rate" },
              { value: "5000+", label: "Students Placed" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center glass-morphism rounded-2xl p-6"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <div className="text-3xl font-bold text-[#0A2342] mb-2">{stat.value}</div>
                <div className="text-[#0A2342]/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrePaymentBanner;
