import GameCard from "@/components/ui/GameCard";
import ComingSoonCard from "@/components/ui/ComingSoonCard";

export default function GamesSection() {
    return (
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
                    <GameCard
                        title="Smashy Drop"
                        description="Stack, balance, and reach new heights in this addictive tower-building game!"
                        genre="Casual • Puzzle"
                        imageUrl="https://res.cloudinary.com/dpag93lrl/image/upload/v1767471181/smashy_drop_cover_1024x805_nhzdcz.png"
                        imageAlt="Smashy Drop Game"
                        playLink="#"
                    />

                    <ComingSoonCard />
                    <ComingSoonCard />
                </div>
            </div>
        </section>
    );
}
