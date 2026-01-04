export default function HeroSection() {
    return (
        <main id="home" className="pt-16 sm:pt-20 lg:pt-28">
            <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-7rem)] text-center py-8 sm:py-12">
                    <div className="space-y-6 sm:space-y-8">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-zinc-900 dark:text-white px-4">
                            Welcome to{" "}
                            <span className="bg-gradient-to-r from-[#05DAFF] to-purple-600 bg-clip-text text-transparent">
                                Watona Games
                            </span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-600 dark:text-zinc-400 px-4">
                            Experience the next generation of gaming. Dive into immersive worlds and unforgettable adventures.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 px-4">
                            <a
                                href="#games"
                                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-zinc-900 text-white text-sm sm:text-base font-semibold hover:bg-zinc-800 transition-colors dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                            >
                                Explore Games
                            </a>
                            <a
                                href="#about"
                                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-zinc-900 text-zinc-900 text-sm sm:text-base font-semibold hover:bg-zinc-900 hover:text-white transition-colors dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
