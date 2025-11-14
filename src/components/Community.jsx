import { motion } from 'framer-motion'
import { Users, MessageSquare, ThumbsUp, Share2, Medal } from 'lucide-react'

const categories = [
  {
    title: 'General Discussion',
    desc: 'Chat about interview prep, tools, and strategies.',
    icon: MessageSquare,
  },
  {
    title: 'Interview Experiences',
    desc: 'Share stories and lessons from your recent interviews.',
    icon: Users,
  },
  {
    title: 'Success Stories',
    desc: 'Celebrate wins and inspire others with your journey.',
    icon: Medal,
  },
]

export default function Community() {
  return (
    <section id="community" className="relative py-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Join the Roach AI Colony!</h2>
          <p className="mt-2 text-gray-600">Connect, share, and grow with a friendly community.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md hover:shadow-xl border border-blue-100"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-100 text-blue-700">
                  <c.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{c.title}</h3>
                  <p className="mt-1 text-gray-600">{c.desc}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3 text-gray-500">
                <button className="inline-flex items-center gap-1 hover:text-amber-600"><MessageSquare size={16}/> reply</button>
                <button className="inline-flex items-center gap-1 hover:text-amber-600"><ThumbsUp size={16}/> like</button>
                <button className="inline-flex items-center gap-1 hover:text-amber-600"><Share2 size={16}/> share</button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href="#" className="inline-flex items-center rounded-full bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 shadow-lg transition-all">Start a Discussion</a>
        </div>
      </div>
    </section>
  )
}
