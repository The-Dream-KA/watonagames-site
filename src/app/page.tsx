import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-black">
      <Navbar />
      
      {/* Hero Section */}
      <main id="home" className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-[#05DAFF] to-purple-600 bg-clip-text text-transparent">
                  Watona Games
                </span>
              </h1>
              <p className="max-w-2xl mx-auto text-xl sm:text-2xl text-zinc-600 dark:text-zinc-400">
                Experience the next generation of gaming. Dive into immersive worlds and unforgettable adventures.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <a
                  href="#games"
                  className="px-8 py-4 rounded-full bg-zinc-900 text-white font-semibold hover:bg-zinc-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                >
                  Explore Games
                </a>
                <a
                  href="#about"
                  className="px-8 py-4 rounded-full border-2 border-zinc-900 text-zinc-900 font-semibold hover:bg-zinc-900 hover:text-white transition-colors dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-[#05DAFF] mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Watona Games is a passionate team of game developers dedicated to creating 
                fun and engaging mobile gaming experiences. We believe that games should 
                bring joy to everyone, regardless of age or gaming experience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to craft casual games that are easy to pick up but hard 
                to put down. We focus on polished gameplay, vibrant visuals, and creating 
                moments of pure entertainment.
              </p>
            </div>
            <div className="bg-[#05DAFF] rounded-2xl p-8 text-white">
              <blockquote className="text-xl italic">
                &ldquo;We believe that by focusing on creating the best casual games, 
                we can bring smiles to millions of players around the world.&rdquo;
              </blockquote>
              <p className="mt-4 font-semibold">— Watona Games Team</p>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Games
            </h2>
            <div className="w-24 h-1 bg-[#05DAFF] mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our collection of exciting mobile games designed to entertain and delight.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Game Card - Smashy Drop */}
            <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-72 bg-gray-50 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dpag93lrl/image/upload/v1767471181/smashy_drop_cover_1024x805_nhzdcz.png"
                  alt="Smashy Drop Game"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Smashy Drop</h3>
                <p className="text-gray-600 mb-4">
                  Stack, balance, and reach new heights in this addictive tower-building game!
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Casual • Puzzle</span>
                  <a 
                    href="#" 
                    className="px-4 py-2 bg-[#05DAFF] text-white text-sm font-medium rounded-full hover:bg-[#04C4E8] transition-colors"
                  >
                    Play Now
                  </a>
                </div>
              </div>
            </div>

            {/* Coming Soon Card 1 */}
            <div className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-72 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium">Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-400 mb-2">New Game</h3>
                <p className="text-gray-400">
                  Something exciting is in development. Stay tuned!
                </p>
              </div>
            </div>

            {/* Coming Soon Card 2 */}
            <div className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-72 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <p className="text-gray-500 font-medium">Coming Soon</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-400 mb-2">New Game</h3>
                <p className="text-gray-400">
                  Something exciting is in development. Stay tuned!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#05DAFF] text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-4 h-4 bg-yellow-400 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold mb-4">CREATIVE</h3>
              <p className="text-black/80">
                We push boundaries and explore new ideas to create unique gaming experiences.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-4 h-4 bg-yellow-400 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold mb-4">QUALITY</h3>
              <p className="text-black/80">
                We are committed to delivering polished, bug-free games that players love.
              </p>
            </div>
            <div className="text-center p-8">
              <div className="w-4 h-4 bg-yellow-400 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold mb-4">FUN</h3>
              <p className="text-black/80">
                At the heart of everything we do is the goal to bring joy and entertainment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
            Ready to Play?
          </h2>
          <p className="text-xl text-black/90 mb-8 max-w-2xl mx-auto">
            Download our games and start your adventure today!
          </p>
          <a
            href="#games"
            className="inline-block px-8 py-4 rounded-full bg-white text-orange-600 font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Games
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-[#05DAFF] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">W</span>
                </div>
                <h2 className="text-xl font-bold text-white">Watona <span className="text-[#05DAFF]">Games</span></h2>
              </div>
              <p className="text-sm text-gray-400">Creating joy through gaming</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-sm hover:text-[#05DAFF] transition-colors">About Us</a>
                <a href="#games" className="block text-sm hover:text-[#05DAFF] transition-colors">Games</a>
                <a href="#contact" className="block text-sm hover:text-[#05DAFF] transition-colors">Contact</a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <div className="space-y-2">
                <a href="#" className="block text-sm hover:text-[#05DAFF] transition-colors">Blog</a>
                <a href="#" className="block text-sm hover:text-[#05DAFF] transition-colors">Support</a>
                <a href="#" className="block text-sm hover:text-[#05DAFF] transition-colors">FAQ</a>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <div className="space-y-2">
                <a href="#" className="block text-sm hover:text-[#05DAFF] transition-colors">Privacy Policy</a>
                <a href="#" className="block text-sm hover:text-[#05DAFF] transition-colors">Terms of Service</a>
                <a href="#" className="block text-sm hover:text-[#05DAFF] transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-400 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Watona Games. All rights reserved.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.54-2.12-9.91-5.04-.42.72-.66 1.55-.66 2.44 0 1.67.85 3.14 2.14 4-.79-.02-1.53-.24-2.18-.6v.06c0 2.33 1.66 4.28 3.86 4.72-.4.11-.83.17-1.27.17-.31 0-.62-.03-.92-.08.62 1.94 2.43 3.35 4.57 3.39-1.67 1.31-3.78 2.09-6.07 2.09-.39 0-.78-.02-1.17-.07 2.18 1.4 4.77 2.21 7.55 2.21 9.06 0 14.01-7.5 14.01-14.01 0-.21 0-.42-.02-.63.96-.69 1.8-1.56 2.46-2.55z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

