import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Award, Factory, Globe } from 'lucide-react';
import { videoData } from '../data/mock';

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

  return (
    <section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden bg-charcoal">
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
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
      <div className="absolute inset-0 bg-gradient-to-r from-trust-blue/40 via-transparent to-hava-red/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        {/* ISO Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-hava-red rounded-full blur-xl opacity-60 animate-pulse" />
            <div className="relative bg-white/95 backdrop-blur-xl rounded-full px-8 py-4 shadow-2xl flex items-center gap-4 border-2 border-white/40">
              <div className="w-14 h-14 bg-gradient-to-br from-accent-orange to-hava-red rounded-full flex items-center justify-center shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider text-trust-blue font-bold">Certified</div>
                <div className="text-xl font-black text-charcoal">ISO 9001:2015</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-center mb-4 max-w-4xl"
        >
          {videoData.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-white/80 text-center mb-10 max-w-2xl"
        >
          {videoData.subtitle}
        </motion.p>

        {/* Floating Stats Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {videoData.badges.map((badge, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl px-6 py-3 shadow-2xl"
            >
              <div className="text-2xl font-black text-accent-orange">{badge.label}</div>
              <div className="text-xs text-white/80 uppercase tracking-wider">{badge.sublabel}</div>
            </motion.div>
          ))}
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
