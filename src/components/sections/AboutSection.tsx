export default function AboutSection() {
    return (
        <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
            <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Who We Are
                    </h2>
                    <div className="w-16 sm:w-24 h-1 bg-[#05DAFF] mx-auto"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                    <div className="space-y-4 sm:space-y-6">
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                            Watona Games is a passionate team of game developers dedicated to creating
                            fun and engaging mobile gaming experiences. We believe that games should
                            bring joy to everyone, regardless of age or gaming experience.
                        </p>
                        <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                            Our mission is to craft casual games that are easy to pick up but hard
                            to put down. We focus on polished gameplay, vibrant visuals, and creating
                            moments of pure entertainment.
                        </p>
                    </div>
                    <div className="bg-[#05DAFF] rounded-xl sm:rounded-2xl p-6 sm:p-8 text-white">
                        <blockquote className="text-base sm:text-lg lg:text-xl italic">
                            &ldquo;We believe that by focusing on creating the best casual games,
                            we can bring smiles to millions of players around the world.&rdquo;
                        </blockquote>
                        <p className="mt-3 sm:mt-4 font-semibold text-sm sm:text-base">— Watona Games Team</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
