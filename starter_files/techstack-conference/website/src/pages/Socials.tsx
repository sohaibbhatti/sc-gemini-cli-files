import { motion } from 'framer-motion';
import { Download, Share2, Palette, Type, Hash } from 'lucide-react';

export const Socials = () => {
  const brandColors = [
    { name: 'Indigo 500', hex: '#6366f1', description: 'Primary Brand Color' },
    { name: 'Rose 400', hex: '#fb7185', description: 'Accent Color' },
    { name: 'Indigo 700', hex: '#4338ca', description: 'Deep Indigo' },
    { name: 'Rose 600', hex: '#e11d48', description: 'Dark Rose' },
    { name: 'Dark Blue', hex: '#1d2f58', description: 'Background Variant' },
    { name: 'Dark Teal', hex: '#0d2c2d', description: 'Background Variant' },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <div className="py-24 bg-slate-50 dark:bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Social Kit</h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Everything you need to share your TechStack 2026 experience with the world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Hashtag Section */}
          <motion.div 
            {...fadeInUp}
            className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6 text-primary-600 dark:text-primary-400">
              <Hash className="w-6 h-6" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Official Hashtag</h2>
            </div>
            <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-xl border border-primary-100 dark:border-primary-800 text-center">
              <span className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 select-all">
                #TechStack2026
              </span>
            </div>
            <p className="mt-6 text-slate-600 dark:text-slate-400">
              Use this tag across all social platforms to connect with other attendees and get featured on our community wall.
            </p>
          </motion.div>

          {/* Typography Section */}
          <motion.div 
            {...fadeInUp}
            className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6 text-primary-600 dark:text-primary-400">
              <Type className="w-6 h-6" />
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Brand Typography</h2>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">Primary Sans-Serif</p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
                  Inter
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  We use Inter for its clarity and modern feel. It's designed for high readability on digital screens.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Brand Colors */}
        <motion.div 
          {...fadeInUp}
          className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mb-16"
        >
          <div className="flex items-center gap-3 mb-8 text-primary-600 dark:text-primary-400">
            <Palette className="w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Color Palette</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {brandColors.map((color) => (
              <div key={color.hex} className="space-y-3">
                <div 
                  className="aspect-square rounded-xl shadow-inner border border-black/5 dark:border-white/10" 
                  style={{ backgroundColor: color.hex }}
                />
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{color.name}</p>
                  <p className="text-xs text-slate-500 font-mono uppercase">{color.hex}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Logo Assets */}
        <motion.div 
          {...fadeInUp}
          className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm"
        >
          <div className="flex items-center gap-3 mb-8 text-primary-600 dark:text-primary-400">
            <Share2 className="w-6 h-6" />
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Brand Assets</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Full Logo (Standard)', file: 'logo.svg', type: 'SVG' },
              { name: 'Logo Mark (Icon)', file: 'logo.svg', type: 'SVG' },
              { name: 'Social Banner', file: 'logo.svg', type: 'PNG' },
            ].map((asset, i) => (
              <div key={i} className="flex flex-col p-6 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                <div className="flex-grow flex items-center justify-center p-8 mb-6 bg-white dark:bg-slate-900 rounded-lg shadow-sm">
                  <img src="/logo.svg" alt={asset.name} className="max-h-16 w-auto" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white">{asset.name}</p>
                    <p className="text-xs text-slate-500 uppercase">{asset.type}</p>
                  </div>
                  <button className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
