import { motion } from 'framer-motion'
import { BookOpenCheck, FileText, BadgeCheck } from 'lucide-react'

const resources = [
  {
    title: 'Interview Tips',
    desc: 'Practical guidance to handle behavioral and technical rounds with ease.',
    icon: BookOpenCheck,
  },
  {
    title: 'Resume Building',
    desc: 'Polish your resume with ATS-friendly templates and examples.',
    icon: FileText,
  },
  {
    title: 'Practice Assessments',
    desc: 'Timed quizzes and coding challenges to build confidence.',
    icon: BadgeCheck,
  },
]

export default function Resources() {
  return (
    <section id="resources" className="relative py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Helpful Resources</h2>
          <p className="mt-2 text-gray-600">Curated guides to help you prepare and thrive.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md hover:shadow-xl border border-amber-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-100 text-amber-700">
                  <r.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{r.title}</h3>
                  <p className="mt-1 text-gray-600">{r.desc}</p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                className="mt-6 inline-flex items-center rounded-full bg-amber-500 text-white px-4 py-2 font-semibold shadow group-hover:opacity-100 opacity-0 transition-opacity"
              >
                View Resource
              </motion.button>

              <motion.div
                className="absolute inset-0 bg-amber-50 opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
