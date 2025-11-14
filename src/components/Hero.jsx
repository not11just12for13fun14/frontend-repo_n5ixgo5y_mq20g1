import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

const floatingShapes = [
  { id: 1, className: 'w-20 h-20 bg-amber-200', x: -200, y: -120, delay: 0 },
  { id: 2, className: 'w-12 h-12 bg-yellow-200', x: 160, y: -100, delay: 0.2 },
  { id: 3, className: 'w-16 h-16 bg-emerald-200', x: -120, y: 140, delay: 0.4 },
  { id: 4, className: 'w-24 h-24 bg-blue-200', x: 220, y: 160, delay: 0.6 },
]

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vZX5NNlylxke-6DM/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white/90 pointer-events-none" />

      {/* Floating soft shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingShapes.map(s => (
          <motion.span
            key={s.id}
            className={`rounded-3xl blur-xl opacity-70 ${s.className}`}
            initial={{ y: s.y, x: s.x, opacity: 0 }}
            animate={{ y: s.y + 20, x: s.x + 10, opacity: 1 }}
            transition={{ duration: 6, repeat: Infinity, repeatType: 'reverse', delay: s.delay, ease: 'easeInOut' }}
            style={{ position: 'absolute', left: '50%', top: '50%' }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl font-extrabold text-gray-800 tracking-tight"
          >
            Survive. Adapt. Ace your interviews.
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg text-gray-600"
          >
            Roach AI turns resilience into results with a friendly, animated companion to guide you through interviews and assessments.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex items-center gap-4"
          >
            <a href="#download" className="inline-flex items-center rounded-full bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 shadow-lg transition-all">
              Get Started
            </a>
            <a href="#resources" className="inline-flex items-center rounded-full bg-white hover:bg-amber-50 text-amber-700 font-semibold px-6 py-3 shadow border border-amber-200 transition-all">
              Explore Resources
            </a>
          </motion.div>
        </div>

        <div className="hidden lg:block" />
      </div>
    </section>
  )
}
