import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Bug, Download, Users, BookOpen, Rocket } from 'lucide-react'

const navItems = [
  { id: 'resources', label: 'Resources', icon: BookOpen },
  { id: 'download', label: 'Download', icon: Download },
  { id: 'community', label: 'Community', icon: Users },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${
        scrolled ? 'bg-white/70 shadow-lg' : 'bg-white/30'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <button
            onClick={() => handleScroll('hero')}
            className="flex items-center gap-2 group"
            aria-label="Roach AI Home"
          >
            <div className="p-2 rounded-full bg-amber-100 text-amber-600 group-hover:bg-amber-200 transition-colors">
              <Bug size={22} />
            </div>
            <span className="font-semibold text-gray-800 group-hover:text-amber-700 transition-colors">
              Roach AI
            </span>
          </button>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => handleScroll(id)}
                className="px-3 py-2 rounded-md text-gray-700 hover:text-amber-700 hover:bg-amber-50 transition-all flex items-center gap-2"
              >
                <Icon size={18} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => handleScroll('download')}
            className="inline-flex items-center gap-2 rounded-full bg-amber-500 text-white px-4 py-2 font-semibold shadow-md hover:shadow-lg hover:bg-amber-600 transition-all"
          >
            <Rocket size={18} /> Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  )
}
