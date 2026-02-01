import Image from "next/image";

interface GameCardProps {
    title: string;
    description: string;
    genre: string;
    imageUrl: string;
    imageAlt: string;
    playLink: string;
}

export default function GameCard({ title, description, genre, imageUrl, imageAlt, playLink }: GameCardProps) {
    return (
        <div className="group bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-gray-100 to-gray-50 overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:from-black/30 transition-colors"></div>
            </div>
            <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm text-gray-500">{genre}</span>
                    <a
                        href={playLink}
                        className="px-3 sm:px-4 py-1.5 sm:py-2 bg-[#05DAFF] text-white text-xs sm:text-sm font-medium rounded-full hover:bg-[#04C4E8] transition-colors"
                    >
                        Play Now
                    </a>
                </div>
            </div>
        </div>
    );
}
