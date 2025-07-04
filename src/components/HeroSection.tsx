
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const features = [
    'Showcase your side hustle',
    'Connect with customers',
    'Grow your business',
    'Track your earnings'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-teal-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-sky-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-indigo-200 rounded-full opacity-20 animate-pulse delay-2000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-medium mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-teal-400 rounded-full mr-2"></span>
            Turn Your Passion Into Profit
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Showcase Your
            <span className="block bg-gradient-to-r from-teal-600 via-sky-600 to-indigo-600 bg-clip-text text-transparent">
              Side Hustle
            </span>
            to the World
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in">
            The modern platform for entrepreneurs to promote their side hustles, 
            connect with customers, and grow their businesses in a vibrant community.
          </p>

          {/* Feature List */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button className="bg-gradient-to-r from-teal-500 to-sky-500 hover:from-teal-600 hover:to-sky-600 text-white font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 group">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button variant="outline" className="border-2 border-teal-200 text-teal-700 hover:bg-teal-50 font-semibold px-8 py-4 text-lg rounded-xl hover-lift">
              View Marketplace
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-16 pt-8 border-t border-teal-100 animate-fade-in">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-600">500+</div>
              <div className="text-gray-600">Active Hustlers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600">1,000+</div>
              <div className="text-gray-600">Side Hustles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600">$50k+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
