export default function HeroSection() {
    return (
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
    );
}
