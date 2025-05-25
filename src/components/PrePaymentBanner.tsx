
import React from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Clock, Star } from 'lucide-react';

const PrePaymentBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23000" fill-opacity="0.05"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-black" />
              </div>
              <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-black" />
              </div>
              <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-black" />
              </div>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
            Reserve Your Global Opportunity Today
          </h3>
          
          <p className="text-lg md:text-xl text-black/80 mb-8 max-w-3xl mx-auto">
            Limited spots available for our premium programs. Secure your place with a small deposit and unlock exclusive access to international opportunities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Secure Your Spot
            </Button>
            
            <div className="text-black/70 text-sm">
              <span className="font-semibold">✓ No commitment required</span> • <span className="font-semibold">✓ Full refund available</span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-black">48h</div>
              <div className="text-black/70">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black">98%</div>
              <div className="text-black/70">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-black">5000+</div>
              <div className="text-black/70">Students Placed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrePaymentBanner;
