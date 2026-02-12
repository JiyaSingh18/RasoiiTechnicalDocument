'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ArchitectureDiagram from '@/components/ArchitectureDiagram';
import FlowChart from '@/components/FlowChart';

export default function TechnicalDocumentation() {
  return (
    <main className="min-h-screen bg-rasoiiCream">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 text-center bg-gradient-to-br from-rasoiiCream via-parchment to-vintageRose-50 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 bg-vintageRose-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-warmAmber-300 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-terracotta-300 rounded-full blur-2xl"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-6xl mx-auto px-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="mb-10"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-br from-vintageRose-200 to-warmAmber-200 rounded-full blur-2xl opacity-50"></div>
        <Image
                src="/rasoii-logo.png"
                alt="Rasoii"
                width={180}
                height={180}
                className="mx-auto drop-shadow-2xl relative z-10"
          priority
        />
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-5xl font-display font-bold text-inkBlue mb-4 drop-shadow-sm"
          >
            Technical Documentation
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl font-handwritten text-terracotta-500 mb-8 drop-shadow-sm"
          >
            Building Rasoii: Where Code Meets Kitchen
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-gradient-to-br from-white via-white to-warmAmber-50 backdrop-blur-sm rounded-3xl px-8 py-4 shadow-2xl border-2 border-terracotta-200 mb-6 hover:shadow-3xl transition-all"
          >
            <p className="text-lg font-handwritten text-terracotta-500 flex items-center gap-2 justify-center">
              <span className="text-3xl">📚</span>
              Architecture, monetization & implementation details
            </p>
          </motion.div>

          {/* Quick Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-6"
          >
            <p className="text-xl font-handwritten text-terracotta-500 mb-4">Jump to section:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              {[
                { emoji: '🏗️', label: 'Architecture', href: '#architecture' },
                { emoji: '🛠️', label: 'Tech Stack', href: '#tech-stack' },
                { emoji: '💰', label: 'RevenueCat', href: '#revenuecat' },
                { emoji: '🔄', label: 'Data Flow', href: '#data-flow' },
                { emoji: '🤖', label: 'AI Services', href: '#ai-services' },
                { emoji: '🔒', label: 'Security', href: '#security' },
              ].map((button, i) => (
                <motion.a
                  key={button.href}
                  href={button.href}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.1 + i * 0.05 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 rounded-full font-semibold text-white shadow-lg hover:shadow-2xl transition-all bg-gradient-to-r from-vintageRose-400 via-terracotta-400 to-warmAmber-400 border-3 border-white flex items-center gap-2"
                >
                  <span className="text-2xl">{button.emoji}</span>
                  <span>{button.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 px-6 bg-gradient-to-br from-parchment to-rasoiiCream">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-display font-bold text-inkBlue mb-4">
              📖 Documentation Guide
            </h2>
            <p className="text-xl font-handwritten text-terracotta-500">
              Navigate through Rasoii's technical landscape
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { emoji: '🏗️', title: 'Architecture', href: '#architecture', desc: 'System design & layers', color: 'from-sageMint-50 to-sageMint-100', border: 'border-sageMint-300' },
              { emoji: '🛠️', title: 'Tech Stack', href: '#tech-stack', desc: 'Technologies & versions', color: 'from-warmAmber-50 to-warmAmber-100', border: 'border-warmAmber-300' },
              { emoji: '💰', title: 'RevenueCat', href: '#revenuecat', desc: 'Monetization & subscriptions', color: 'from-vintageRose-50 to-vintageRose-100', border: 'border-vintageRose-300' },
              { emoji: '🔄', title: 'Data Flow', href: '#data-flow', desc: 'State & data management', color: 'from-terracotta-50 to-terracotta-100', border: 'border-terracotta-300' },
              { emoji: '🤖', title: 'AI Services', href: '#ai-services', desc: 'Gemini AI integration', color: 'from-sageMint-50 to-sageMint-100', border: 'border-sageMint-300' },
              { emoji: '🔒', title: 'Security', href: '#security', desc: 'Privacy & data protection', color: 'from-warmAmber-50 to-warmAmber-100', border: 'border-warmAmber-300' },
            ].map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                className={`block p-8 rounded-3xl bg-gradient-to-br ${item.color} border-3 ${item.border} shadow-lg hover:shadow-2xl transition-all group`}
              >
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="text-2xl font-display font-bold text-inkBlue mb-2">{item.title}</h3>
                <p className="text-gray-600 font-story">{item.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 1. Architecture Section */}
      <section id="architecture" className="py-20 px-6 bg-gradient-to-br from-sageMint-50 via-rasoiiCream to-parchment">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-gradient-to-br from-sageMint-100 to-sageMint-200 rounded-full p-6 shadow-xl mb-6">
              <span className="text-6xl">🏗️</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-inkBlue mb-4">
              High-Level Architecture
            </h2>
            <p className="text-2xl font-handwritten text-terracotta-500">
              How Rasoii's pieces fit together beautifully
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-display font-bold text-inkBlue mb-8 flex items-center gap-3 justify-center">
              <span className="text-4xl">📱</span>
              System Overview
            </h3>
            <ArchitectureDiagram />
          </motion.div>
        </div>
      </section>

      {/* 2. Tech Stack Section */}
      <section id="tech-stack" className="py-20 px-6 bg-gradient-to-br from-warmAmber-50 via-parchment to-rasoiiCream">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-gradient-to-br from-warmAmber-100 to-warmAmber-200 rounded-full p-6 shadow-xl mb-6">
              <span className="text-6xl">🛠️</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-inkBlue mb-4">
              Technology Stack
            </h2>
            <p className="text-2xl font-handwritten text-terracotta-500">
              The tools that bring Rasoii to life
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl border-3 border-warmAmber-200 overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-warmAmber-200 via-terracotta-200 to-vintageRose-200">
                    <th className="px-6 py-5 text-left text-xl font-display font-bold text-inkBlue border-b-3 border-terracotta-300">
                      Category
                    </th>
                    <th className="px-6 py-5 text-left text-xl font-display font-bold text-inkBlue border-b-3 border-terracotta-300">
                      Technology
                    </th>
                    <th className="px-6 py-5 text-left text-xl font-display font-bold text-inkBlue border-b-3 border-terracotta-300">
                      Version
                    </th>
                    <th className="px-6 py-5 text-left text-xl font-display font-bold text-inkBlue border-b-3 border-terracotta-300">
                      Purpose
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { emoji: '⚛️', cat: 'Framework', tech: 'React Native', ver: '0.76.5', purpose: 'Cross-platform mobile development' },
                    { emoji: '📦', cat: 'SDK', tech: 'Expo', ver: '~54.0.0', purpose: 'Managed workflow & native modules' },
                    { emoji: '🧭', cat: 'Navigation', tech: 'Expo Router', ver: '~4.0.0', purpose: 'File-based routing system' },
                    { emoji: '🧠', cat: 'State', tech: 'React Context', ver: '18.3.1', purpose: 'Global state management' },
                    { emoji: '💰', cat: 'Monetization', tech: 'RevenueCat', ver: '9.3.1', purpose: 'Subscription & payments' },
                    { emoji: '🤖', cat: 'AI Service', tech: 'Gemini AI', ver: '2.0.0', purpose: 'Recipe parsing & AI assistance' },
                    { emoji: '💾', cat: 'Storage', tech: 'AsyncStorage', ver: '2.0.0', purpose: 'Local data persistence' },
                    { emoji: '🗣️', cat: 'Voice', tech: 'expo-speech', ver: '~12.2.0', purpose: 'Hands-free cooking mode' },
                    { emoji: '📳', cat: 'Haptics', tech: 'expo-haptics', ver: '~13.2.0', purpose: 'Touch feedback' },
                    { emoji: '📸', cat: 'Camera', tech: 'expo-camera', ver: '~16.0.0', purpose: 'Fridge scanner & capture' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-warmAmber-50 transition-colors group border-b border-gray-200">
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl group-hover:scale-125 transition-transform">{row.emoji}</span>
                          <span className="font-semibold text-inkBlue text-lg">{row.cat}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5">
                        <span className="font-mono text-terracotta-600 font-semibold text-lg">{row.tech}</span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="font-mono text-sageMint-600 font-semibold">{row.ver}</span>
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-gray-700">{row.purpose}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. RevenueCat Section */}
      <section id="revenuecat" className="py-20 px-6 bg-gradient-to-br from-vintageRose-50 via-parchment to-warmAmber-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-gradient-to-br from-vintageRose-100 to-vintageRose-200 rounded-full p-6 shadow-xl mb-6">
              <span className="text-6xl">💰</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-inkBlue mb-4">
              RevenueCat Integration
            </h2>
            <p className="text-2xl font-handwritten text-terracotta-500">
              Powering sustainable growth & monetization
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl border-4 border-vintageRose-200 p-8 md:p-12 mb-12"
          >
            <h3 className="text-3xl font-display font-bold text-inkBlue mb-8 flex items-center gap-3 justify-center">
              <span className="text-4xl">🔄</span>
              Subscription Flow
            </h3>
            <FlowChart
              nodes={[
                {
                  id: 'init',
                  label: 'App Initialization',
                  emoji: '📱',
                  color: 'from-sageMint-100 to-sageMint-200',
                  description: 'App launches, user opens Rasoii'
                },
                {
                  id: 'config',
                  label: 'Configure RevenueCat',
                  emoji: '⚙️',
                  color: 'from-warmAmber-100 to-warmAmber-200',
                  description: 'API Key Setup & Platform Config'
                },
                {
                  id: 'check',
                  label: 'Check Subscription Status',
                  emoji: '🔍',
                  color: 'from-terracotta-100 to-terracotta-200',
                  description: 'Free (25 recipes) or Pro (unlimited)'
                },
                {
                  id: 'paywall',
                  label: 'Show Paywall',
                  emoji: '💳',
                  color: 'from-vintageRose-100 to-vintageRose-200',
                  description: '$1.99/month or $9.99/year'
                },
                {
                  id: 'unlock',
                  label: 'Features Unlocked',
                  emoji: '⭐',
                  color: 'from-sageMint-100 to-sageMint-200',
                  description: 'Receipt validated, Pro tier activated'
                }
              ]}
              connections={[]}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                title: '🆓 Free Tier',
                color: 'from-sageMint-50 to-sageMint-100',
                border: 'border-sageMint-300',
                features: ['Save up to 25 recipes', 'Basic cooking mode', 'Manual timers', 'Grocery lists', 'Meal planning', 'Pet safety profiles']
              },
              {
                title: '⭐ Rasoii Pro',
                color: 'from-warmAmber-50 to-warmAmber-100',
                border: 'border-warmAmber-300',
                features: ['Unlimited recipes', 'Hands-free voice cooking', 'Smart auto-timers', 'AI recipe assistant', 'Ingredient substitutions', 'Pantry tracking', 'Fridge scanner', 'PDF cookbook uploads']
              }
            ].map((tier, i) => (
              <motion.div
                key={tier.title}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, rotate: i === 0 ? -2 : 2 }}
                className={`bg-gradient-to-br ${tier.color} rounded-3xl p-8 border-3 ${tier.border} shadow-lg hover:shadow-2xl transition-all`}
              >
                <h4 className="text-3xl font-display font-bold text-inkBlue mb-6">{tier.title}</h4>
                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 text-lg">
                      <span className="text-2xl flex-shrink-0">{i === 0 ? '✓' : '⭐'}</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl border-3 border-terracotta-200 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-terracotta-200 to-warmAmber-200 p-6">
              <h4 className="text-3xl font-display font-bold text-inkBlue flex items-center gap-3">
                <span className="text-4xl">💳</span>
                Pricing Structure
              </h4>
            </div>
            <div className="p-8">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-warmAmber-100 to-terracotta-100">
                    <th className="px-6 py-4 text-left font-display text-lg text-inkBlue border-b-2 border-terracotta-300">Plan</th>
                    <th className="px-6 py-4 text-left font-display text-lg text-inkBlue border-b-2 border-terracotta-300">Price</th>
                    <th className="px-6 py-4 text-left font-display text-lg text-inkBlue border-b-2 border-terracotta-300">Billing</th>
                    <th className="px-6 py-4 text-left font-display text-lg text-inkBlue border-b-2 border-terracotta-300">Annual Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-sageMint-50 transition-colors border-b border-gray-200">
                    <td className="px-6 py-5 font-semibold text-inkBlue">Monthly Pro</td>
                    <td className="px-6 py-5 font-mono text-3xl text-terracotta-600 font-bold">$1.99</td>
                    <td className="px-6 py-5">Per month</td>
                    <td className="px-6 py-5 text-gray-600">$23.88/year</td>
                  </tr>
                  <tr className="bg-gradient-to-r from-warmAmber-100 to-vintageRose-100 hover:from-warmAmber-200 hover:to-vintageRose-200 transition-all">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-inkBlue">Yearly Pro</span>
                        <span className="bg-terracotta-500 text-white px-3 py-1 rounded-full text-sm font-bold">Best Value ⭐</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 font-mono text-3xl text-terracotta-600 font-bold">$9.99</td>
                    <td className="px-6 py-5">Per year</td>
                    <td className="px-6 py-5">
                      <span className="bg-sageMint-500 text-white px-4 py-2 rounded-full font-bold">Save 58%! 🎉</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. Data Flow Section */}
      <section id="data-flow" className="py-20 px-6 bg-gradient-to-br from-terracotta-50 via-rasoiiCream to-sageMint-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-gradient-to-br from-terracotta-100 to-terracotta-200 rounded-full p-6 shadow-xl mb-6">
              <span className="text-6xl">🔄</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-inkBlue mb-4">
              Data Flow & State Management
            </h2>
            <p className="text-2xl font-handwritten text-terracotta-500">
              How information moves through the kitchen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-3xl shadow-2xl border-3 border-warmAmber-200 p-8"
            >
              <h4 className="text-3xl font-display font-bold text-inkBlue mb-6 flex items-center gap-3">
                <span className="text-4xl">📦</span>
                Context Providers
              </h4>
              <div className="space-y-4">
                {[
                  { emoji: '🍳', name: 'RecipeContext', desc: 'Recipe data & CRUD operations' },
                  { emoji: '⚙️', name: 'UserPreferencesContext', desc: 'Settings & pet profiles' },
                  { emoji: '🎨', name: 'ThemeContext', desc: 'UI themes & colors' },
                  { emoji: '👋', name: 'OnboardingContext', desc: 'User journey state' }
                ].map((ctx, i) => (
                  <div key={i} className="bg-gradient-to-r from-warmAmber-50 to-warmAmber-100 rounded-xl p-4 border-2 border-warmAmber-300 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">{ctx.emoji}</span>
                      <div>
                        <span className="font-mono font-bold text-terracotta-600 block">{ctx.name}</span>
                        <span className="text-sm text-gray-600">{ctx.desc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-3xl shadow-2xl border-3 border-vintageRose-200 p-8"
            >
              <h4 className="text-3xl font-display font-bold text-inkBlue mb-6 flex items-center gap-3">
                <span className="text-4xl">💾</span>
                Storage Keys
              </h4>
              <div className="space-y-4">
                {[
                  { emoji: '📚', name: 'recipes_data', desc: 'All saved recipes with metadata' },
                  { emoji: '⚙️', name: 'user_preferences', desc: 'User settings & customizations' },
                  { emoji: '🛒', name: 'grocery_lists', desc: 'Active shopping lists' },
                  { emoji: '📅', name: 'meal_plans', desc: 'Weekly meal planning data' }
                ].map((store, i) => (
                  <div key={i} className="bg-gradient-to-r from-vintageRose-50 to-vintageRose-100 rounded-xl p-4 border-2 border-vintageRose-300 hover:shadow-lg transition-all">
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">{store.emoji}</span>
                      <div>
                        <span className="font-mono font-bold text-terracotta-600 block">{store.name}</span>
                        <span className="text-sm text-gray-600">{store.desc}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl border-4 border-sageMint-200 p-8 md:p-12"
          >
            <h3 className="text-3xl font-display font-bold text-inkBlue mb-8 flex items-center gap-3 justify-center">
              <span className="text-4xl">🍳</span>
              Recipe Import Journey
            </h3>
            <FlowChart
              nodes={[
                {
                  id: 'user',
                  label: 'User Pastes Recipe URL',
                  emoji: '👤',
                  color: 'from-vintageRose-100 to-vintageRose-200',
                  description: 'From Instagram, YouTube, or website'
                },
                {
                  id: 'parse',
                  label: 'AI Parses Recipe',
                  emoji: '🤖',
                  color: 'from-sageMint-100 to-sageMint-200',
                  description: 'Gemini AI extracts ingredients & steps'
                },
                {
                  id: 'context',
                  label: 'Update RecipeContext',
                  emoji: '🧠',
                  color: 'from-warmAmber-100 to-warmAmber-200',
                  description: 'State management updates'
                },
                {
                  id: 'storage',
                  label: 'Save to AsyncStorage',
                  emoji: '💾',
                  color: 'from-terracotta-100 to-terracotta-200',
                  description: 'Persist locally on device'
                },
                {
                  id: 'success',
                  label: 'Recipe Saved Successfully!',
                  emoji: '✅',
                  color: 'from-sageMint-100 to-sageMint-200',
                  description: 'User can now cook'
                }
              ]}
              connections={[]}
            />
          </motion.div>
        </div>
      </section>

      {/* 5. AI Services Section */}
      <section id="ai-services" className="py-20 px-6 bg-gradient-to-br from-sageMint-50 via-parchment to-warmAmber-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-gradient-to-br from-sageMint-100 to-sageMint-200 rounded-full p-6 shadow-xl mb-6">
              <span className="text-6xl">🤖</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-inkBlue mb-4">
              AI Services Integration
            </h2>
            <p className="text-2xl font-handwritten text-terracotta-500">
              Powered by Google Gemini 2.0
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                emoji: '📝',
                title: 'Recipe Extraction',
                desc: 'Parses recipes from URLs, images, or text into structured format',
                input: 'URL/Image/Text',
                output: '{ title, ingredients[], steps[] }',
                color: 'from-sageMint-50 to-sageMint-100',
                border: 'border-sageMint-300'
              },
              {
                emoji: '🔄',
                title: 'Ingredient Substitutions',
                desc: 'Suggests intelligent alternatives for missing ingredients',
                input: '"No heavy cream"',
                output: '"Use milk + butter"',
                color: 'from-warmAmber-50 to-warmAmber-100',
                border: 'border-warmAmber-300'
              },
              {
                emoji: '💬',
                title: 'Kitchen Assistant',
                desc: 'Answers cooking questions in real-time with helpful tips',
                input: '"How to dice onions?"',
                output: 'Step-by-step guide with tips',
                color: 'from-vintageRose-50 to-vintageRose-100',
                border: 'border-vintageRose-300'
              },
              {
                emoji: '🛡️',
                title: 'Pet Safety Check',
                desc: 'Identifies toxic ingredients for your furry friends',
                input: 'Recipe + Pet Profile',
                output: 'Safety warnings & alternatives',
                color: 'from-terracotta-50 to-terracotta-100',
                border: 'border-terracotta-300'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? -2 : 2 }}
                className={`bg-gradient-to-br ${feature.color} rounded-3xl p-8 border-3 ${feature.border} shadow-lg hover:shadow-2xl transition-all`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl">{feature.emoji}</span>
                  <h4 className="text-2xl font-display font-bold text-inkBlue">{feature.title}</h4>
                </div>
                <p className="text-gray-700 mb-6 text-lg">{feature.desc}</p>
                <div className="bg-white rounded-xl p-5 font-mono text-sm border-2 border-gray-300 shadow-inner">
                  <div className="text-terracotta-600 mb-2"><strong>Input:</strong> {feature.input}</div>
                  <div className="text-sageMint-600"><strong>Output:</strong> {feature.output}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl border-3 border-warmAmber-200 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-warmAmber-200 to-terracotta-200 p-6">
              <h4 className="text-3xl font-display font-bold text-inkBlue flex items-center gap-3">
                <span className="text-4xl">⚙️</span>
                API Configuration
              </h4>
            </div>
            <div className="p-8">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-warmAmber-100 to-terracotta-100">
                    <th className="px-6 py-4 text-left font-display text-lg text-inkBlue border-b-2 border-warmAmber-300">Parameter</th>
                    <th className="px-6 py-4 text-left font-display text-lg text-inkBlue border-b-2 border-warmAmber-300">Value</th>
                    <th className="px-6 py-4 text-left font-display text-lg text-inkBlue border-b-2 border-warmAmber-300">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-sageMint-50 transition-colors border-b border-gray-200">
                    <td className="px-6 py-4 font-mono text-terracotta-600 font-semibold">model</td>
                    <td className="px-6 py-4 font-bold">gemini-2.0-flash-exp</td>
                    <td className="px-6 py-4">Fast responses for real-time cooking</td>
                  </tr>
                  <tr className="hover:bg-sageMint-50 transition-colors border-b border-gray-200">
                    <td className="px-6 py-4 font-mono text-terracotta-600 font-semibold">temperature</td>
                    <td className="px-6 py-4 font-bold">0.7</td>
                    <td className="px-6 py-4">Balanced creativity & accuracy</td>
                  </tr>
                  <tr className="hover:bg-sageMint-50 transition-colors">
                    <td className="px-6 py-4 font-mono text-terracotta-600 font-semibold">maxTokens</td>
                    <td className="px-6 py-4 font-bold">2048</td>
                    <td className="px-6 py-4">Detailed recipe instructions</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. Security Section */}
      <section id="security" className="py-20 px-6 bg-gradient-to-br from-warmAmber-50 via-rasoiiCream to-vintageRose-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-gradient-to-br from-warmAmber-100 to-warmAmber-200 rounded-full p-6 shadow-xl mb-6">
              <span className="text-6xl">🔒</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-bold text-inkBlue mb-4">
              Security & Privacy
            </h2>
            <p className="text-2xl font-handwritten text-terracotta-500">
              Your data, your control — always
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-3xl shadow-2xl border-3 border-sageMint-200 p-8"
            >
              <h4 className="text-3xl font-display font-bold text-inkBlue mb-6 flex items-center gap-3">
                <span className="text-4xl">🛡️</span>
                Data Protection
              </h4>
              <ul className="space-y-4">
                {[
                  { emoji: '📱', title: 'Local-first architecture', desc: 'All data stored on device' },
                  { emoji: '🚫', title: 'No cloud storage', desc: 'Data never leaves device' },
                  { emoji: '🔐', title: 'Encrypted storage', desc: 'Sensitive data encrypted at rest' },
                  { emoji: '💳', title: 'Secure payments', desc: 'Apple/Google handles all billing' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 bg-gradient-to-r from-sageMint-50 to-sageMint-100 rounded-xl p-4 border-2 border-sageMint-300">
                    <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                    <div>
                      <div className="font-bold text-inkBlue text-lg">{item.title}</div>
                      <div className="text-gray-600">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-3xl shadow-2xl border-3 border-vintageRose-200 p-8"
            >
              <h4 className="text-3xl font-display font-bold text-inkBlue mb-6 flex items-center gap-3">
                <span className="text-4xl">🔐</span>
                API Security
              </h4>
              <ul className="space-y-4">
                {[
                  { emoji: '🔒', title: 'HTTPS only', desc: 'All requests encrypted' },
                  { emoji: '🤖', title: 'No personal data to AI', desc: 'Only recipe content shared' }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 bg-gradient-to-r from-vintageRose-50 to-vintageRose-100 rounded-xl p-4 border-2 border-vintageRose-300">
                    <span className="text-3xl flex-shrink-0">{item.emoji}</span>
                    <div>
                      <div className="font-bold text-inkBlue text-lg">{item.title}</div>
                      <div className="text-gray-600">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-2xl border-3 border-terracotta-200 p-8 md:p-12"
          >
            <h4 className="text-3xl font-display font-bold text-inkBlue mb-8 flex items-center gap-3">
              <span className="text-4xl">📋</span>
              Privacy Compliance
            </h4>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { emoji: '🇪🇺', title: 'GDPR Ready', desc: 'User data control, export & deletion', color: 'from-sageMint-50 to-sageMint-100', border: 'border-sageMint-300' },
                { emoji: '🇺🇸', title: 'CCPA Compliant', desc: 'California privacy requirements met', color: 'from-warmAmber-50 to-warmAmber-100', border: 'border-warmAmber-300' },
                { emoji: '📱', title: 'App Store Guidelines', desc: 'Privacy labels & full transparency', color: 'from-vintageRose-50 to-vintageRose-100', border: 'border-vintageRose-300' }
              ].map((comp, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className={`bg-gradient-to-br ${comp.color} rounded-2xl p-6 border-3 ${comp.border} shadow-lg hover:shadow-2xl transition-all`}
                >
                  <div className="text-5xl mb-4">{comp.emoji}</div>
                  <h5 className="font-display font-bold text-2xl text-inkBlue mb-3">{comp.title}</h5>
                  <p className="text-gray-600">{comp.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <section className="py-20 px-6 bg-gradient-to-br from-terracotta-50 via-parchment to-vintageRose-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-12 shadow-2xl border-3 border-terracotta-200"
          >
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-vintageRose-200 to-warmAmber-200 rounded-full blur-xl opacity-50"></div>
              <Image
                src="/rasoii-logo.png"
                alt="Rasoii"
                width={100}
                height={100}
                className="mx-auto drop-shadow-2xl relative z-10"
              />
            </div>
            <p className="text-3xl font-handwritten text-terracotta-500 mb-3">
              Built with 🍳 and lots of ✨
            </p>
            <p className="text-xl font-story text-gray-700">
              For the Shipyard Hackathon — Where Recipes Become Reality
            </p>
          </motion.div>
        </div>
      </section>
      </main>
  );
}
