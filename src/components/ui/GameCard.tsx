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
        <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="relative h-72 bg-gray-50 overflow-hidden">
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{genre}</span>
                    <a
                        href={playLink}
                        className="px-4 py-2 bg-[#05DAFF] text-white text-sm font-medium rounded-full hover:bg-[#04C4E8] transition-colors"
                    >
                        Play Now
                    </a>
                </div>
            </div>
        </div>
    );
}
