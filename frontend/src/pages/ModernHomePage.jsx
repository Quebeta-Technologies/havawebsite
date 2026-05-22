import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Download, ArrowRight, Phone, Zap, Shield, Globe, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { GlassCard } from '../components/GlassCard';
import { FloatingElement } from '../components/FloatingElement';
import { VideoSection } from '../components/VideoSection';
import { TrustStrip } from '../components/TrustStrip';
import { AboutSection } from '../components/AboutSection';
import { WhyHavaSection } from '../components/WhyHavaSection';
import { IndustriesSection } from '../components/IndustriesSection';
import { StatsTabsSection } from '../components/StatsTabsSection';
import { toast, Toaster } from 'sonner';
import {
  heroData,
  productCategories,
  featuredProducts,
  manufacturingData,
  testimonials,
  quoteCTAData
} from '../data/mock';

export const ModernHomePage = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);
  const productScrollRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const scrollProducts = (direction) => {
    if (productScrollRef.current) {
      const scrollAmount = 400;
      productScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleEnquireNow = () => {
    setQuoteModalOpen(true);
  };

  const handleReadMore = () => {
    toast.info('Product details page coming soon!');
  };

  const handleDownloadBrochure = () => {
    setBrochureModalOpen(true);
  };

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Toaster position="top-right" richColors />
      <Header onQuoteClick={() => setQuoteModalOpen(true)} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <AnimatedBackground />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <motion.div 
          ref={heroRef}
          style={{ opacity, scale }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        >
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block mb-8"
            >
              <div className="glass-morphism px-6 py-3 rounded-full inline-flex items-center gap-2 border-2 border-white/40 shadow-2xl">
                <Sparkles className="w-4 h-4 text-accent-orange" />
                <span className="text-sm font-bold text-trust-blue">ISO 9001:2015 Certified Manufacturer</span>
                <div className="w-2 h-2 bg-accent-orange rounded-full animate-pulse" />
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-charcoal mb-6 leading-tight"
            >
              <span className="block">Your Progressive</span>
              <span className="gradient-text block animate-gradient bg-gradient-to-r from-hava-red via-accent-orange to-hava-red bg-[length:200%_auto]">
                Mining & Rock Drilling
              </span>
              <span className="block">Partner</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-700 mb-6 leading-relaxed max-w-4xl mx-auto"
            >
              {heroData.subheadline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-base text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              {heroData.supportCopy}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setQuoteModalOpen(true)}
                  className="bg-gradient-to-r from-hava-red to-hava-red/90 hover:from-hava-red/90 hover:to-hava-red text-white font-bold px-10 py-7 text-lg shadow-2xl rounded-2xl animate-pulse-glow group relative overflow-hidden"
                  data-testid="hero-get-quote-btn"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {heroData.primaryCTA}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 shimmer" />
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                  className="glass-morphism border-2 border-trust-blue/50 text-trust-blue hover:bg-trust-blue hover:text-white font-bold px-10 py-7 text-lg rounded-2xl shadow-xl backdrop-blur-xl"
                  data-testid="hero-explore-products-btn"
                >
                  {heroData.secondaryCTA}
                </Button>
              </motion.div>
            </motion.div>

            <div className="mt-20 flex justify-center gap-8 flex-wrap">
              {[
                { icon: Shield, label: 'Premium Quality' },
                { icon: Zap, label: 'Fast Delivery' },
                { icon: Globe, label: '15+ Countries' }
              ].map((item, index) => (
                <FloatingElement key={index} delay={index * 0.2} duration={3 + index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="glass-morphism p-4 rounded-2xl flex items-center gap-3 shadow-xl"
                  >
                    <item.icon className="w-6 h-6 text-hava-red" />
                    <span className="font-semibold text-charcoal">{item.label}</span>
                  </motion.div>
                </FloatingElement>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-8 h-12 border-2 border-trust-blue/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div className="w-2 h-2 bg-hava-red rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Factory Tour Video Section */}
      <VideoSection />

      {/* Trust Strip - Modern with effects */}
      <TrustStrip />

      {/* About Us Section - NEW */}
      <AboutSection onCtaClick={() => setQuoteModalOpen(true)} />

      {/* Product Categories */}
      <section id="products" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <AnimatedBackground />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-hava-red/10 text-hava-red px-4 py-2 rounded-full mb-4 font-bold text-sm uppercase tracking-wider">
              <div className="w-2 h-2 bg-hava-red rounded-full animate-pulse" />
              Product Range
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-charcoal mb-4">
              Complete <span className="gradient-text">Product Range</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              HAVA offers a complete range of pneumatic rock drilling equipment, demolition tools, drilling accessories, and spare parts.
            </p>
          </motion.div>

          <div className="relative">
            <motion.button
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollProducts('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 glass-morphism shadow-2xl rounded-full p-4 hover:bg-white transition-all"
              data-testid="products-scroll-left-btn"
            >
              <ChevronLeft className="w-6 h-6 text-trust-blue" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => scrollProducts('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 glass-morphism shadow-2xl rounded-full p-4 hover:bg-white transition-all"
              data-testid="products-scroll-right-btn"
            >
              <ChevronRight className="w-6 h-6 text-trust-blue" />
            </motion.button>

            <div
              ref={productScrollRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide px-12 pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {productCategories.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex-shrink-0 w-80 snap-center"
                  data-testid={`product-card-${index}`}
                >
                  <div className="bg-white border border-steel-gray rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group h-full">
                    <div className="h-56 overflow-hidden relative bg-gradient-to-br from-slate-100 to-blue-50">
                      <motion.img
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-4"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-charcoal mb-3 group-hover:text-hava-red transition-colors">{product.name}</h3>
                      <p className="text-sm text-gray-600 mb-6 line-clamp-3">{product.description}</p>
                      <div className="flex flex-col gap-3">
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Button
                            onClick={handleEnquireNow}
                            className="w-full bg-gradient-to-r from-hava-red to-hava-red/90 hover:from-hava-red/90 hover:to-hava-red text-white font-semibold shadow-lg"
                            data-testid={`product-enquire-btn-${index}`}
                          >
                            Enquire Now
                          </Button>
                        </motion.div>
                        <div className="flex gap-2">
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                            <Button
                              onClick={handleReadMore}
                              variant="outline"
                              className="w-full border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white"
                              data-testid={`product-read-more-btn-${index}`}
                            >
                              Read More
                            </Button>
                          </motion.div>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                            <Button
                              onClick={handleDownloadBrochure}
                              variant="outline"
                              className="w-full border-steel-gray text-charcoal hover:bg-steel-gray"
                              data-testid={`product-brochure-btn-${index}`}
                            >
                              <Download className="w-4 h-4 mr-2" />
                              PDF
                            </Button>
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why HAVA Section - Split with Image + Accordion */}
      <WhyHavaSection />

      {/* Industries Section - Modern Bento Grid */}
      <IndustriesSection />

      {/* Stats Section - With Tabs */}
      <StatsTabsSection />

      {/* Featured Products */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-trust-blue/10 text-trust-blue px-4 py-2 rounded-full mb-4 font-bold text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Featured Products
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-charcoal mb-4">
              Our <span className="gradient-text">Featured Products</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore some of our key products developed to support real drilling, demolition, and mining applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group border border-steel-gray h-full">
                  <div className="h-56 overflow-hidden bg-gradient-to-br from-slate-100 to-blue-50 relative">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-charcoal mb-3 group-hover:text-hava-red transition-colors">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                    <Button
                      onClick={handleEnquireNow}
                      className="w-full bg-gradient-to-r from-hava-red to-hava-red/90 hover:from-hava-red/90 hover:to-hava-red text-white font-semibold"
                      data-testid={`featured-product-btn-${index}`}
                    >
                      Request Details
                    </Button>
                  </CardContent>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 lg:py-32 relative overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-hava-red/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-accent-orange/10 text-accent-orange px-4 py-2 rounded-full mb-4 font-bold text-sm uppercase tracking-wider">
              <div className="w-2 h-2 bg-accent-orange rounded-full animate-pulse" />
              Testimonials
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-charcoal mb-4">
              What Our <span className="gradient-text">Customers Say</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by users who value consistent performance, durability, and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <GlassCard key={testimonial.id} delay={index * 0.2}>
                <CardContent className="p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                    className="text-6xl text-hava-red mb-4 leading-none font-serif"
                  >
                    &ldquo;
                  </motion.div>
                  <p className="text-gray-700 leading-relaxed italic mb-6">{testimonial.text}</p>
                  <div className="pt-6 border-t border-steel-gray flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-hava-red to-accent-orange rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-charcoal">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.company}</p>
                      <p className="text-sm text-trust-blue font-medium mt-1">Using: {testimonial.product}</p>
                    </div>
                  </div>
                </CardContent>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hava-red via-hava-red/95 to-accent-orange" />
        <AnimatedBackground />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6 leading-tight">
              {quoteCTAData.heading}
            </h2>
            <p className="text-xl mb-12 text-white/90">{quoteCTAData.body}</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setQuoteModalOpen(true)}
                  className="bg-white text-hava-red hover:bg-slate-100 font-bold px-10 py-7 text-lg shadow-2xl rounded-2xl group"
                  data-testid="final-cta-quote-btn"
                >
                  <span className="flex items-center gap-2">
                    {quoteCTAData.primaryCTA}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => toast.info('Sales team contact coming soon!')}
                  className="glass-dark border-2 border-white/50 text-white hover:bg-white hover:text-hava-red font-bold px-10 py-7 text-lg rounded-2xl shadow-2xl backdrop-blur-xl"
                  data-testid="final-cta-sales-btn"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  {quoteCTAData.secondaryCTA}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        type="quote"
      />
      <QuoteModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
        type="brochure"
      />
    </div>
  );
};
