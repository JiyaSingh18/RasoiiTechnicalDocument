'use client';

import { motion } from 'framer-motion';

export default function ArchitectureDiagram() {
  return (
    <div className="bg-gradient-to-br from-white via-parchment to-warmAmber-50 rounded-3xl p-10 border-4 border-terracotta-300 shadow-2xl">
      {/* App Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative bg-gradient-to-r from-vintageRose-200 via-terracotta-200 to-warmAmber-200 rounded-3xl p-8 mb-10 text-center shadow-xl border-4 border-terracotta-400"
      >
        <div className="text-5xl mb-3">🍳</div>
        <div className="text-3xl font-display font-bold text-inkBlue mb-2">RASOII MOBILE APP</div>
        <div className="text-lg font-handwritten text-terracotta-600">React Native + Expo SDK 54</div>
        
        {/* Decorative corners */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-4 border-l-4 border-terracotta-500 rounded-tl-lg"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-t-4 border-r-4 border-terracotta-500 rounded-tr-lg"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-4 border-l-4 border-terracotta-500 rounded-bl-lg"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-4 border-r-4 border-terracotta-500 rounded-br-lg"></div>
      </motion.div>

      {/* Divider */}
      <div className="flex items-center justify-center mb-10">
        <div className="h-1 w-20 bg-gradient-to-r from-transparent via-terracotta-300 to-transparent rounded-full"></div>
        <span className="mx-4 text-2xl">⬇️</span>
        <div className="h-1 w-20 bg-gradient-to-r from-transparent via-terracotta-300 to-transparent rounded-full"></div>
      </div>

      {/* Title for layers */}
      <div className="text-center mb-6">
        <h4 className="text-xl font-display font-semibold text-inkBlue inline-block bg-gradient-to-r from-warmAmber-100 to-terracotta-100 px-6 py-2 rounded-full border-2 border-terracotta-300">
          Application Layers
        </h4>
      </div>

      {/* Three Main Layers */}
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="relative bg-gradient-to-br from-sageMint-50 to-sageMint-100 rounded-2xl p-6 shadow-xl border-4 border-sageMint-400 hover:scale-105 transition-transform"
        >
          <div className="absolute top-3 right-3 w-3 h-3 bg-sageMint-500 rounded-full animate-pulse"></div>
          <div className="text-5xl mb-3 text-center">📱</div>
          <div className="text-xl font-display font-bold text-inkBlue text-center mb-4 pb-2 border-b-2 border-sageMint-300">Client Layer</div>
          <ul className="space-y-2 text-sm text-gray-800">
            <li className="flex items-center gap-2 bg-white bg-opacity-50 rounded-lg px-3 py-2">
              <span className="text-terracotta-500 font-bold">→</span>
              Expo Router
            </li>
            <li className="flex items-center gap-2 bg-white bg-opacity-50 rounded-lg px-3 py-2">
              <span className="text-terracotta-500 font-bold">→</span>
              UI Components
            </li>
            <li className="flex items-center gap-2 bg-white bg-opacity-50 rounded-lg px-3 py-2">
              <span className="text-terracotta-500 font-bold">→</span>
              Screens
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative bg-gradient-to-br from-warmAmber-50 to-warmAmber-100 rounded-2xl p-6 shadow-xl border-4 border-warmAmber-400 hover:scale-105 transition-transform"
        >
          <div className="absolute top-3 right-3 w-3 h-3 bg-warmAmber-500 rounded-full animate-pulse"></div>
          <div className="text-5xl mb-3 text-center">🧠</div>
          <div className="text-xl font-display font-bold text-inkBlue text-center mb-4 pb-2 border-b-2 border-warmAmber-300">State Layer</div>
          <ul className="space-y-2 text-sm text-gray-800">
            <li className="flex items-center gap-2 bg-white bg-opacity-50 rounded-lg px-3 py-2">
              <span className="text-terracotta-500 font-bold">→</span>
              Context API
            </li>
            <li className="flex items-center gap-2 bg-white bg-opacity-50 rounded-lg px-3 py-2">
              <span className="text-terracotta-500 font-bold">→</span>
              Recipes
            </li>
            <li className="flex items-center gap-2 bg-white bg-opacity-50 rounded-lg px-3 py-2">
              <span className="text-terracotta-500 font-bold">→</span>
              User Data
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative bg-gradient-to-br from-vintageRose-50 to-vintageRose-100 rounded-2xl p-6 shadow-xl border-4 border-vintageRose-400 hover:scale-105 transition-transform"
        >
          <div className="absolute top-3 right-3 w-3 h-3 bg-vintageRose-500 rounded-full animate-pulse"></div>
          <div className="text-5xl mb-3 text-center">💾</div>
          <div className="text-xl font-display font-bold text-inkBlue text-center mb-4 pb-2 border-b-2 border-vintageRose-300">Storage Layer</div>
          <ul className="space-y-2 text-sm text-gray-800">
            <li className="flex items-center gap-2 bg-white bg-opacity-50 rounded-lg px-3 py-2">
              <span className="text-terracotta-500 font-bold">→</span>
              AsyncStorage
            </li>
            <li className="flex items-center gap-2 bg-white bg-opacity-50 rounded-lg px-3 py-2">
              <span className="text-terracotta-500 font-bold">→</span>
              Local PDFs
            </li>
            <li className="flex items-center gap-2 bg-white bg-opacity-50 rounded-lg px-3 py-2">
              <span className="text-terracotta-500 font-bold">→</span>
              User Data
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Arrow Down with label */}
      <div className="flex flex-col items-center justify-center mb-10">
        <div className="flex items-center gap-4">
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-terracotta-400 to-terracotta-400 rounded-full"></div>
          <svg width="60" height="60" viewBox="0 0 60 60" className="animate-bounce">
            <path
              d="M30 10 L30 50 M20 40 L30 50 L40 40"
              stroke="#f8ad7a"
              strokeWidth="5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="h-1 w-32 bg-gradient-to-l from-transparent via-terracotta-400 to-terracotta-400 rounded-full"></div>
        </div>
        <div className="text-sm font-handwritten text-terracotta-500 mt-2">Powered by</div>
      </div>

      {/* Title for services */}
      <div className="text-center mb-6">
        <h4 className="text-xl font-display font-semibold text-inkBlue inline-block bg-gradient-to-r from-sageMint-100 to-vintageRose-100 px-6 py-2 rounded-full border-2 border-terracotta-300">
          External Services & APIs
        </h4>
      </div>

      {/* Services Layer */}
      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative bg-gradient-to-br from-terracotta-50 to-terracotta-100 rounded-2xl p-6 shadow-xl border-4 border-terracotta-400 hover:scale-105 transition-transform"
        >
          <div className="absolute top-3 right-3 w-3 h-3 bg-terracotta-500 rounded-full animate-pulse"></div>
          <div className="text-5xl mb-3 text-center">🤖</div>
          <div className="text-xl font-display font-bold text-inkBlue text-center mb-4 pb-2 border-b-2 border-terracotta-300">AI Services</div>
          <ul className="space-y-2 text-sm text-gray-800">
            <li className="flex items-center gap-2 bg-white bg-opacity-50 rounded-lg px-3 py-2">
              <span className="text-terracotta-500 font-bold">→</span>
              Gemini AI
            </li>
            <li className="flex items-center gap-2 bg-white bg-opacity-50 rounded-lg px-3 py-2">
              <span className="text-terracotta-500 font-bold">→</span>
              Recipe Parsing
            </li>
            <li className="flex items-center gap-2 bg-white bg-opacity-50 rounded-lg px-3 py-2">
              <span className="text-terracotta-500 font-bold">→</span>
              AI Assistant
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="relative bg-gradient-to-br from-sageMint-50 to-sageMint-100 rounded-2xl p-6 shadow-xl border-4 border-sageMint-400 hover:scale-105 transition-transform"
        >
          <div className="absolute top-3 right-3 w-3 h-3 bg-sageMint-500 rounded-full animate-pulse"></div>
          <div className="text-5xl mb-3 text-center">💰</div>
          <div className="text-xl font-display font-bold text-inkBlue text-center mb-4 pb-2 border-b-2 border-sageMint-300">RevenueCat</div>
          <ul className="space-y-2 text-sm text-gray-800">
            <li className="flex items-center gap-2 bg-white bg-opacity-50 rounded-lg px-3 py-2">
              <span className="text-terracotta-500 font-bold">→</span>
              Paywall
            </li>
            <li className="flex items-center gap-2 bg-white bg-opacity-50 rounded-lg px-3 py-2">
              <span className="text-terracotta-500 font-bold">→</span>
              Subscriptions
            </li>
            <li className="flex items-center gap-2 bg-white bg-opacity-50 rounded-lg px-3 py-2">
              <span className="text-terracotta-500 font-bold">→</span>
              Analytics
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="relative bg-gradient-to-br from-warmAmber-50 to-warmAmber-100 rounded-2xl p-6 shadow-xl border-4 border-warmAmber-400 hover:scale-105 transition-transform"
        >
          <div className="absolute top-3 right-3 w-3 h-3 bg-warmAmber-500 rounded-full animate-pulse"></div>
          <div className="text-5xl mb-3 text-center">📲</div>
          <div className="text-xl font-display font-bold text-inkBlue text-center mb-4 pb-2 border-b-2 border-warmAmber-300">Native APIs</div>
          <ul className="space-y-2 text-sm text-gray-800">
            <li className="flex items-center gap-2 bg-white bg-opacity-50 rounded-lg px-3 py-2">
              <span className="text-terracotta-500 font-bold">→</span>
              Camera
            </li>
            <li className="flex items-center gap-2 bg-white bg-opacity-50 rounded-lg px-3 py-2">
              <span className="text-terracotta-500 font-bold">→</span>
              Speech
            </li>
            <li className="flex items-center gap-2 bg-white bg-opacity-50 rounded-lg px-3 py-2">
              <span className="text-terracotta-500 font-bold">→</span>
              Haptics
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
