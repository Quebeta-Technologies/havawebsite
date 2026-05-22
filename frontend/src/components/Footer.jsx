import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { footerData } from '../data/mock';

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-white relative overflow-hidden">
      {/* Top decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-hava-red via-accent-orange to-trust-blue" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Google Maps Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Address Card */}
            <div className="lg:col-span-1 bg-gradient-to-br from-hava-red/20 to-accent-orange/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-hava-red to-accent-orange rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Visit Our Facility
                </h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-accent-orange text-sm font-bold uppercase tracking-wider mb-2">
                    {footerData.contact.company}
                  </h4>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {footerData.contact.address}
                  </p>
                </div>
                
                <a
                  href={footerData.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-orange hover:text-white font-semibold text-sm group transition-colors"
                  data-testid="footer-get-directions-link"
                >
                  Get Directions
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Quick contact */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-3">
                <a href={`tel:${footerData.contact.mobile}`} className="flex items-center gap-3 text-white/80 hover:text-accent-orange transition-colors">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">{footerData.contact.mobile}</span>
                </a>
                <a href={`mailto:${footerData.contact.email}`} className="flex items-center gap-3 text-white/80 hover:text-accent-orange transition-colors">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">{footerData.contact.email}</span>
                </a>
                <div className="flex items-center gap-3 text-white/80">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{footerData.contact.hours}</span>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 min-h-[400px]">
              <iframe
                src={footerData.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, position: 'absolute', inset: 0, filter: 'grayscale(20%) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Haryrock Engineering Location"
                data-testid="footer-google-map"
              />
            </div>
          </div>
        </motion.div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand Summary */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-4xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <span className="text-hava-red">HAVA</span>
              </h3>
              <p className="text-sm text-trust-blue font-semibold">by Haryrock Engineering Pvt. Ltd.</p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {footerData.brandSummary}
            </p>
            
            {/* Social/Trust badges */}
            <div className="flex flex-wrap gap-2">
              <span className="bg-white/10 px-3 py-1.5 rounded-full text-xs font-semibold border border-white/10">
                ISO 9001:2015
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-full text-xs font-semibold border border-white/10">
                Export Ready
              </span>
              <span className="bg-white/10 px-3 py-1.5 rounded-full text-xs font-semibold border border-white/10">
                15+ Countries
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Quick Links</h4>
            <ul className="space-y-2">
              {footerData.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-accent-orange text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Products</h4>
            <ul className="space-y-2">
              {footerData.productCategories.map((category) => (
                <li key={category}>
                  <Link
                    to="/products"
                    className="text-gray-300 hover:text-accent-orange text-sm transition-colors"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>{footerData.copyright}</p>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-accent-orange transition-colors">
                Privacy Policy
              </Link>
              <Link to="/sitemap" className="hover:text-accent-orange transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
