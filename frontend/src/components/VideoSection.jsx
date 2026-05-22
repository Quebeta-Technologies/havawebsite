import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Factory, Calendar, Globe, Package } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';
import { videoData, productCategories } from '../data/mock';

export const VideoSection = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const stats = [
    { icon: Factory, value: 25000, label: "Sq. Ft. Facility", suffix: "+" },
    { icon: Calendar, value: 20, label: "Years Experience", suffix: "+" },
    { icon: Globe, value: 15, label: "Countries Served", suffix: "+" },
    { icon: Package, value: productCategories.length, label: "Product Categories", suffix: "+" }
  ];

  return (
    <section className="relative w-full h-[85vh] min-h-[640px] overflow-hidden bg-charcoal">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        poster={videoData.posterUrl}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoData.videoUrl} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-charcoal/40 to-charcoal/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-trust-blue/30 via-transparent to-hava-red/25" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* ISO Badge - custom white styled badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mb-8 relative"
          data-testid="video-iso-badge"
        >
          <div className="relative w-28 h-28 lg:w-32 lg:h-32">
            {/* Rotating outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full">
                <defs>
                  <path id="circle-text" d="M 100, 100 m -85, 0 a 85,85 0 1,1 170,0 a 85,85 0 1,1 -170,0" />
                </defs>
                <text fill="white" fontSize="14" fontWeight="700" letterSpacing="4">
                  <textPath href="#circle-text" startOffset="0%">
                    CERTIFIED MANUFACTURER • ISO 9001:2015 •
                  </textPath>
                </text>
              </svg>
            </motion.div>

            {/* Static inner content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-[10px] font-bold text-white/80 tracking-widest mb-0.5">ISO</div>
                <div className="text-2xl lg:text-3xl font-black text-white leading-none">9001</div>
                <div className="text-[10px] font-bold text-white/80 tracking-widest mt-0.5">: 2015</div>
                <div className="mt-1.5 h-0.5 w-10 mx-auto bg-accent-orange rounded-full" />
              </div>
            </div>

            {/* Decorative dashed circle */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-3 border-2 border-dashed border-white/40 rounded-full"
            />
          </div>
        </motion.div>

        {/* Stats Counter - replaces the old text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-5xl w-full"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-5 lg:p-6 shadow-2xl text-center group"
                data-testid={`video-stat-${index}`}
              >
                <div className="flex justify-center mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent-orange to-hava-red rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-black text-accent-orange mb-1">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xs lg:text-sm text-white/90 font-semibold uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Play/Pause Button */}
        <motion.button
          onClick={togglePlay}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute bottom-8 right-8 w-14 h-14 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
          data-testid="video-play-pause-btn"
        >
          {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
        </motion.button>
      </div>
    </section>
  );
};
