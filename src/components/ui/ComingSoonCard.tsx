export default function ComingSoonCard() {
    return (
        <div className="bg-gray-100 rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-72 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>
                    <p className="text-gray-500 font-medium">Coming Soon</p>
                </div>
            </div>
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-400 mb-2">New Game</h3>
                <p className="text-gray-400">
                    Something exciting is in development. Stay tuned!
                </p>
            </div>
        </div>
    );
}
