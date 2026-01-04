interface ValueCardProps {
    title: string;
    description: string;
}

export default function ValueCard({ title, description }: ValueCardProps) {
    return (
        <div className="text-center p-4 sm:p-6 lg:p-8">
            <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full mx-auto mb-4 sm:mb-6"></div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{title}</h3>
            <p className="text-sm sm:text-base text-black/80">{description}</p>
        </div>
    );
}
