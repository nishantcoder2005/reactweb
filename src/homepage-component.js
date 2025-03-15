import React, { useState, useEffect } from 'react';
import { 
  LogIn, 
  UserCheck, 
  Users, 
  RefreshCw, 
  Database,
  ArrowRight,
  Star,
  ChevronRight,
  CheckCircle,
  Smartphone,
  Home,
  Shield,
  Home as Building
} from 'react-feather';
import './copsgate-logo.css';
import copsgateLogoSvg from './copsgate-logo_1.svg';

const HomePage = () => {
  // State for animations
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Features data
  const features = [
    {
      icon: <LogIn size={32} />,
      title: "Digital Check-in/Check-out",
      description: "Streamline entry and exit processes with our digital solution."
    },
    {
      icon: <UserCheck size={32} />,
      title: "Employee Movement Approval",
      description: "Simplify internal movement approvals with automated workflows."
    },
    {
      icon: <Users size={32} />,
      title: "Visitor & Vendor Tracking",
      description: "Monitor external parties with comprehensive tracking tools."
    },
    {
      icon: <RefreshCw size={32} />,
      title: "In-Ward & Out-Ward Automation",
      description: "Automate material and personnel flows with smart systems."
    },
    {
      icon: <Database size={32} />,
      title: "Asset & Stock Integration",
      description: "Seamlessly integrate with your inventory management systems."
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Nishant Dubey",
      position: "Security Manager, XYZ Corp",
      content: "This platform has transformed how we manage access control. Our security protocols are now more efficient and reliable.",
      rating: 5
    },
    {
      name: "Guruprasad Chaubey",
      position: "Operations Director, ABC Industries",
      content: "Implementing this system reduced our check-in time by 75% and significantly improved our visitor experience.",
      rating: 5
    },
    {
      name: "Vishal Tiwari",
      position: "Facility Manager, Tech Innovations",
      content: "The asset tracking integration has eliminated our inventory discrepancies and streamlined our operations.",
      rating: 4
    }
  ];

  // Stats data
  const stats = [
    { value: "10M+", label: "Check-ins" },
    { value: "500+", label: "Companies" },
    { value: "98%", label: "Satisfaction" },
    { value: "30%", label: "Time Saved" }
  ];

  // Plans data
  const plans = [
    {
      title: "Starter",
      price: "$49",
      period: "/month",
      features: [
        "Digital check-in/out",
        "Basic visitor management",
        "Email notifications",
        "Standard reports"
      ]
    },
    {
      title: "Business",
      price: "$99",
      period: "/month",
      features: [
        "Everything in Starter",
        "Employee movement approval",
        "Vendor management",
        "Asset tracking integration",
        "Advanced analytics"
      ],
      popular: true
    },
    {
      title: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Everything in Business",
        "Dedicated support",
        "Custom integrations",
        "Advanced security features",
        "Multi-location management"
      ]
    }
  ];

  // Handle scroll for parallax and reveal effects
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Feature hover effect
  const handleFeatureHover = (index) => {
    setActiveFeature(index);
  };

  const handleFeatureLeave = () => {
    setActiveFeature(null);
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-white">
      {/* Header/Nav */}
      <header className="bg-black text-white py-4 sticky top-0 z-50">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold" style={{ color: '#fbbe01' }}>
                SecureAccess
              </h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              {['Features', 'Pricing', 'About', 'Contact'].map((item, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="text-white hover:text-yellow-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" 
                    style={{ backgroundColor: '#fbbe01' }}></span>
                </a>
              ))}
            </nav>
            <div>
              <button className="text-black font-bold py-2 px-6 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: '#fbbe01' }}>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>
      

      {/* Dashboard Section */}
      <section className="bg-black text-white py-20 relative overflow-hidden">
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative rounded-xl overflow-hidden shadow-2xl border-8 border-gray-800">
            <div className="bg-gray-800 py-2 px-4 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            {/* Animated Copsgate logo */}
            <div className="w-full bg-black copsgate-logo-container p-8">
              <img
                src={copsgateLogoSvg}
                alt="Copsgate Logo"
                className="copsgate-logo w-full h-auto"
              />
              <div className="shimmer-effect" />
            </div>
          </div>
        </div>
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full"
              style={{
                backgroundColor: '#fbbe01',
                opacity: 0.1 + (Math.random() * 0.1),
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 50 + 10}px`,
                height: `${Math.random() * 50 + 10}px`,
                animationDuration: `${Math.random() * 20 + 15}s`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div 
                className={`transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Revolutionary <span style={{ color: '#fbbe01' }}>Access Management</span> Solution
                </h1>
                <p className="text-xl mb-8 text-gray-300">
                  Streamline visitor, vendor, and employee movement with our advanced digital platform. Enhance security and operational efficiency.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button 
                    className="text-black font-bold py-3 px-8 rounded-full hover:shadow-xl transition-all duration-300 flex items-center group"
                    style={{ backgroundColor: '#fbbe01' }}
                  >
                    Get Demo
                    <ChevronRight className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1" size={20} />
                  </button>
                  <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300 relative overflow-hidden group">
                    <span className="relative z-10">Learn More</span>
                    <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </button>
                </div>
              </div>
            </div>
            <div 
              className={`md:w-1/2 relative transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
            >
              {/* Dashboard mockup */}
              <div className="relative mx-auto w-full max-w-md">
                <div className="relative rounded-xl overflow-hidden shadow-2xl border-8 border-gray-800">
                  <div className="bg-gray-800 py-2 px-4 flex items-center">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="w-full bg-black p-8 copsgate-logo-container">
                    <img
                      src={copsgateLogoSvg}
                      alt="Copsgate Logo"
                      className="copsgate-logo w-full h-auto max-w-[280px] mx-auto"
                    />
                    <div className="shimmer-effect" />
                  </div>
                </div>
                {/* Floating elements */}
                <div 
                  className="absolute -top-6 -right-4 text-black font-bold px-4 py-2 rounded-lg shadow-lg"
                  style={{ 
                    backgroundColor: '#fbbe01'
                  }}
                >
                  Real-time notifications
                </div>
                <div 
                  className="absolute -bottom-4 -left-4 bg-white text-black font-bold px-4 py-2 rounded-lg shadow-lg flex items-center"
                >
                  <CheckCircle size={16} className="mr-2" style={{ color: '#fbbe01' }} />
                  Secure check-in
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl font-bold mb-4 relative inline-block"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.6s ease',
              }}
            >
              How It Works
              <span className="absolute -bottom-2 left-0 right-0 h-1 rounded-full" 
                style={{ 
                  backgroundColor: '#fbbe01'
                }}></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our platform simplifies security management with a streamlined digital process
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Smartphone size={40} />,
                title: "Digital Check-in",
                description: "Visitors scan QR codes or use kiosks for contactless check-in."
              },
              {
                icon: <Home size={40} />,
                title: "Instant Notifications",
                description: "Hosts receive alerts and can approve access remotely."
              },
              {
                icon: <Shield size={40} />,
                title: "Secure Management",
                description: "All movements and access are tracked and secured."
              }
            ].map((step, index) => (
              <div 
                key={index}
                className="text-center bg-gray-50 rounded-xl p-8 relative overflow-hidden"
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                  transitionDelay: `${0.2 + index * 0.2}s`
                }}
              >
                <span 
                  className="absolute -right-6 -top-6 text-9xl font-bold text-gray-200 pointer-events-none"
                >
                  {index + 1}
                </span>
                <div 
                  className="relative mx-auto w-16 h-16 flex items-center justify-center rounded-full mb-6"
                  style={{ backgroundColor: '#fbbe01' }}
                >
                  {React.cloneElement(step.icon, { className: "text-black" })}
                </div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl font-bold mb-4 relative inline-block"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.6s ease'
              }}
            >
              Key Features
              <span className="absolute -bottom-2 left-0 right-0 h-1 rounded-full" 
                style={{ 
                  backgroundColor: '#fbbe01'
                }}></span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our comprehensive set of features designed to streamline your security operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-900 rounded-xl p-6 hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2 border-b-4 border-transparent hover:border-yellow-500 group"
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                  transitionDelay: `${0.1 + index * 0.1}s`
                }}
                onMouseEnter={() => handleFeatureHover(index)}
                onMouseLeave={handleFeatureLeave}
              >
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-all duration-300"
                  style={{ 
                    backgroundColor: activeFeature === index ? '#fbbe01' : 'rgba(251, 190, 1, 0.2)',
                    transform: activeFeature === index ? 'scale(1.1)' : 'scale(1)'
                  }}
                >
                  {React.cloneElement(feature.icon, { 
                    className: activeFeature === index ? "text-black" : "",
                    style: { color: activeFeature === index ? 'black' : '#fbbe01' }
                  })}
                </div>
                <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-yellow-500">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div 
          className="absolute top-0 left-0 w-full h-20"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(251, 190, 1, 0.2) 0%, rgba(251, 190, 1, 0) 70%)'
          }}
        ></div>
        
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl font-bold mb-4 relative inline-block"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.6s ease'
              }}
            >
              What Our Customers Say
              <span className="absolute -bottom-2 left-0 right-0 h-1 rounded-full" 
                style={{ 
                  backgroundColor: '#fbbe01'
                }}></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by companies worldwide to enhance security and streamline operations
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div 
              className="relative overflow-hidden"
              style={{ height: '320px' }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="absolute top-0 left-0 w-full p-8 bg-gray-50 rounded-xl shadow-lg"
                  style={{
                    opacity: currentSlide === index ? 1 : 0,
                    transform: `translateX(${(index - currentSlide) * 100}%)`,
                    transition: 'transform 0.6s ease, opacity 0.6s ease',
                    zIndex: currentSlide === index ? 1 : 0
                  }}
                >
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i}
                        className={i < testimonial.rating ? "fill-current" : ""}
                        size={24}
                        style={{ 
                          color: i < testimonial.rating ? '#fbbe01' : '#e5e7eb'
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-gray-800 text-lg italic mb-6">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div 
                      className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex items-center justify-center font-bold text-xl"
                      style={{ backgroundColor: '#fbbe01' }}
                    >
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Dots navigation */}
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className="w-3 h-3 rounded-full mx-1"
                  style={{ 
                    backgroundColor: currentSlide === index ? '#fbbe01' : '#e5e7eb',
                    transition: 'background-color 0.3s ease'
                  }}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 
              className="text-3xl font-bold mb-4 relative inline-block"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.6s ease'
              }}
            >
              Simple Pricing
              <span className="absolute -bottom-2 left-0 right-0 h-1 rounded-full" 
                style={{ 
                  backgroundColor: '#fbbe01'
                }}></span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the plan that fits your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 transform hover:-translate-y-2 relative"
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'opacity 0.6s ease, transform 0.6s ease',
                  transitionDelay: `${0.1 + index * 0.1}s`,
                  zIndex: plan.popular ? 10 : 1
                }}
              >
                {plan.popular && (
                  <div 
                    className="absolute top-0 right-0 left-0 text-center py-2 text-white font-bold text-sm"
                    style={{ backgroundColor: '#fbbe01' }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
                  <div className="flex items-end mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <ul className="mb-8 space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle size={16} className="mr-2" style={{ color: '#fbbe01' }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    className={`w-full py-3 px-6 rounded-full font-bold transition-all duration-300 ${
                      plan.popular 
                        ? 'text-black hover:shadow-lg' 
                        : 'bg-white text-gray-800 border-2 border-gray-200 hover:border-gray-300 hover:text-gray-900'
                    }`}
                    style={{ 
                      backgroundColor: plan.popular ? '#fbbe01' : 'transparent'
                    }}
                  >
                    {plan.popular ? 'Get Started' : 'Learn More'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 
                className="text-2xl font-bold mb-6" 
                style={{ color: '#fbbe01' }}
              >
                SecureAccess
              </h3>
              <p className="text-gray-400 mb-6">
                Revolutionizing access management for businesses worldwide.
              </p>
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Product</h4>
              <ul className="space-y-3">
                {['Features', 'Pricing', 'Testimonials', 'FAQ'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Company</h4>
              <ul className="space-y-3">
                {['About Us', 'Careers', 'Blog', 'Contact'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6">Legal</h4>
              <ul className="space-y-3">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'].map((item, i) => (
                  <li key={i}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} SecureAccess. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default HomePage;