import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { headerData } from '../data/mock';
import { Button } from './ui/button';

export const Header = ({ onQuoteClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-trust-blue text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between text-xs sm:text-sm">
            <span className="font-medium">{headerData.topBar.certification}</span>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Mail className="w-3 h-3" />
                {headerData.topBar.location}
              </span>
              <span className="text-accent-orange font-semibold">{headerData.topBar.exportText}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-steel-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="text-3xl font-bold">
                <span className="text-hava-red" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>HAVA</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {headerData.navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-charcoal hover:text-trust-blue px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="tel:+912012345678" className="text-trust-blue hover:text-hava-red transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <Button 
                onClick={onQuoteClick}
                className="bg-hava-red hover:bg-hava-red/90 text-white font-semibold px-6 py-2 shadow-lg"
              >
                {headerData.primaryCTA}
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-charcoal hover:text-trust-blue"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-steel-gray">
            <div className="px-4 py-4 space-y-2">
              {headerData.navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block text-charcoal hover:text-trust-blue px-3 py-2 text-base font-medium transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                onClick={() => {
                  onQuoteClick();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-hava-red hover:bg-hava-red/90 text-white font-semibold mt-4"
              >
                {headerData.primaryCTA}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};