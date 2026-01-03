export default function AboutSection() {
    return (
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
    );
}
