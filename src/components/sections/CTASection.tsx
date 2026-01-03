export default function CTASection() {
    return (
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
    );
}
