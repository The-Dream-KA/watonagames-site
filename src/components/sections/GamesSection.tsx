import GameCard from "@/components/ui/GameCard";

export default function GamesSection() {
    return (
        <section id="games" className="py-12 sm:py-16 lg:py-20 bg-white">
            <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="text-center mb-8 sm:mb-12 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Our Games
                    </h2>
                    <div className="w-16 sm:w-24 h-1 bg-[#05DAFF] mx-auto mb-4 sm:mb-6"></div>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                        Discover our collection of exciting mobile games designed to entertain and delight.
                    </p>
                </div>

                <div className="flex justify-center">
                    <div className="w-full max-w-md">
                        <GameCard
                            title="Smashy Fall"
                            description="Stack, balance, and reach new heights in this addictive tower-building game!"
                            genre="Casual • Puzzle"
                            imageUrl="https://res.cloudinary.com/dpag93lrl/image/upload/v1767471181/smashy_drop_cover_1024x805_nhzdcz.png"
                            imageAlt="Smashy Fall Game"
                            playLink="#"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
