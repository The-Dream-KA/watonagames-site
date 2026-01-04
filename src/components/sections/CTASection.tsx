export default function CTASection() {
    return (
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-yellow-400 to-orange-500">
            <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 sm:mb-6">
                    Ready to Play?
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-black/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                    Download our games and start your adventure today!
                </p>
                <a
                    href="#games"
                    className="inline-block w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-orange-600 text-sm sm:text-base font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                    Explore Games
                </a>
            </div>
        </section>
    );
}
