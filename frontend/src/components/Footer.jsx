import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { footerData } from '../data/mock';

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Summary */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">
                <span className="text-hava-red" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>HAVA</span>
              </h3>
              <p className="text-sm text-trust-blue font-semibold">by Haryrock Engineering Pvt. Ltd.</p>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {footerData.brandSummary}
            </p>
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

        {/* Contact Information */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-accent-orange flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-semibold mb-1">Address</h5>
                <p className="text-sm text-gray-300">{footerData.contact.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-accent-orange flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-semibold mb-1">Phone</h5>
                <p className="text-sm text-gray-300">{footerData.contact.customerCare}</p>
                <p className="text-sm text-gray-300">{footerData.contact.mobile}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-accent-orange flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-semibold mb-1">Email</h5>
                <p className="text-sm text-gray-300">{footerData.contact.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-accent-orange flex-shrink-0 mt-1" />
              <div>
                <h5 className="font-semibold mb-1">Hours</h5>
                <p className="text-sm text-gray-300">{footerData.contact.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
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