import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Resources from './components/Resources'
import Download from './components/Download'
import Community from './components/Community'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-blue-50 text-gray-800">
      <Navbar />
      <main className="pt-16">
        {/* Hero with animated background and 3D Spline mascot */}
        <Hero />
        {/* Resources Section */}
        <Resources />
        {/* Download & Setup Section with progress and steps */}
        <Download />
        {/* Community Section with cards and actions */}
        <Community />
      </main>
      <footer className="border-t border-gray-100 bg-white/60">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500">© {new Date().getFullYear()} Roach AI. All rights reserved.</p>
          <div className="flex items-center gap-6 text-gray-600">
            <a href="#" className="hover:text-amber-700">About Us</a>
            <a href="#" className="hover:text-amber-700">Contact</a>
            <a href="#" className="hover:text-amber-700">FAQ</a>
          </div>
          <div className="text-2xl">😴🪳</div>
        </div>
      </footer>
    </div>
  )
}

export default App
