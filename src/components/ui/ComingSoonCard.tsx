export default function ComingSoonCard() {
    return (
        <div className="bg-gray-100 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden">
            <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-center px-4">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </div>
                    <p className="text-sm sm:text-base text-gray-500 font-medium">Coming Soon</p>
                </div>
            </div>
            <div className="p-4 sm:p-5 lg:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-400 mb-2">New Game</h3>
                <p className="text-sm sm:text-base text-gray-400">
                    Something exciting is in development. Stay tuned!
                </p>
            </div>
        </div>
    );
}
