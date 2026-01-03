interface ValueCardProps {
    title: string;
    description: string;
}

export default function ValueCard({ title, description }: ValueCardProps) {
    return (
        <div className="text-center p-8">
            <div className="w-4 h-4 bg-yellow-400 rounded-full mx-auto mb-6"></div>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="text-black/80">{description}</p>
        </div>
    );
}
