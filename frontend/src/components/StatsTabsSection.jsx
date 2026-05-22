import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Factory, GraduationCap, TrendingUp } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { statsData } from '../data/mock';

const tabIcons = {
  reach: Globe,
  manufacturing: Factory,
  expertise: GraduationCap,
};

export const StatsTabsSection = () => {
  const [activeTab, setActiveTab] = useState(statsData.tabs[0].id);

  const activeTabData = statsData.tabs.find(t => t.id === activeTab);

  return (
    <section className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-trust-blue via-trust-blue/95 to-trust-blue">
      {/* Decorative shapes */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--accent-orange)) 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 0.4
        }}
      />
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(var(--hava-red)) 0%, transparent 70%)',
          filter: 'blur(80px)',
          opacity: 0.3
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white px-4 py-2 rounded-full mb-3 font-bold text-xs uppercase tracking-wider">
            <TrendingUp className="w-4 h-4" />
            By The Numbers
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-3">
            {statsData.heading}
          </h2>
          <p className="text-base text-white/70 max-w-2xl mx-auto">
            {statsData.supportCopy}
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 gap-2">
            {statsData.tabs.map((tab) => {
              const Icon = tabIcons[tab.id];
              const isActive = activeTab === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 py-3 rounded-xl flex items-center gap-2 font-bold text-sm transition-colors ${
                    isActive ? 'text-white' : 'text-white/60 hover:text-white'
                  }`}
                  data-testid={`stats-tab-${tab.id}`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-hava-red to-accent-orange rounded-xl shadow-lg"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <Icon className="relative z-10 w-4 h-4" />
                  <span className="relative z-10">{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Stats Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {activeTabData.stats.map((stat, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
                data-testid={`stat-card-${activeTab}-${index}`}
              >
                <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 lg:p-8 shadow-2xl overflow-hidden h-full">
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/20 to-hava-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    {/* Big number */}
                    <div className="text-5xl lg:text-6xl font-black text-accent-orange mb-2">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </div>
                    {/* Label */}
                    <div className="text-sm lg:text-base text-white/90 font-medium uppercase tracking-wider">
                      {stat.label}
                    </div>
                    {/* Decorative line */}
                    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-hava-red to-accent-orange rounded-full" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
