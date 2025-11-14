import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, ChevronLeft, ChevronRight } from 'lucide-react'

const steps = [
  {
    title: 'Download Installer',
    text: 'Click the button to download Roach AI for Windows.',
  },
  {
    title: 'Run the Installer',
    text: 'Open the downloaded file and follow the prompts.',
  },
  {
    title: 'Finish Setup',
    text: 'Launch Roach AI from your desktop and sign in.',
  },
]

export default function DownloadSection() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => Math.min(i + 1, steps.length - 1))
  const prev = () => setIndex((i) => Math.max(i - 1, 0))

  return (
    <section id="download" className="py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Download & Setup</h2>
          <p className="mt-2 text-gray-600">Simple, clear steps with visual cues.</p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 shadow-lg transition-all"
          >
            <Download size={18} /> Download Roach AI for Windows
          </a>

          <div className="w-full bg-white rounded-2xl border border-blue-100 shadow-md overflow-hidden">
            <div className="h-2 bg-blue-100">
              <motion.div
                className="h-full bg-emerald-400"
                initial={{ width: 0 }}
                animate={{ width: `${((index + 1) / steps.length) * 100}%` }}
                transition={{ type: 'spring', stiffness: 100, damping: 20 }}
              />
            </div>

            <div className="p-6 grid md:grid-cols-2 gap-6 items-center">
              <div>
                <p className="text-sm uppercase tracking-wide text-gray-500">Step {index + 1} of {steps.length}</p>
                <h3 className="mt-1 text-2xl font-semibold text-gray-800">{steps[index].title}</h3>
                <p className="mt-2 text-gray-600">{steps[index].text}</p>

                <div className="mt-6 flex items-center gap-3">
                  <button onClick={prev} disabled={index===0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 text-blue-700 hover:bg-blue-50 disabled:opacity-40"><ChevronLeft size={18} /> Previous</button>
                  <button onClick={next} disabled={index===steps.length-1} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500 text-white hover:bg-amber-600 disabled:opacity-40">Next <ChevronRight size={18} /></button>
                </div>
              </div>

              <div className="relative h-56 md:h-64 lg:h-72">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.95, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {/* Animated illustration substitute */}
                    <div className="w-48 h-48 rounded-3xl bg-gradient-to-br from-amber-200 to-emerald-200 flex items-center justify-center text-5xl">🪳</div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <div className="flex gap-3 text-sm text-gray-600">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-700">🪳 Tip: Keep the installer in your downloads folder.</span>
            <span className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700">🌟 You’ve got this!</span>
          </div>
        </div>
      </div>
    </section>
  )
}
