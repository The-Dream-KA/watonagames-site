import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-20 sm:py-28">
                <div className="text-center mb-12">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Get in Touch
                    </h1>
                    <div className="w-20 sm:w-24 h-1 bg-[#05DAFF] mx-auto mb-6"></div>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        Have a question or want to work together? We'd love to hear from you!
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 lg:p-16">
                    <div className="text-center">
                        <div className="mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-[#05DAFF]/10 rounded-full mb-6">
                                <svg 
                                    className="w-8 h-8 sm:w-10 sm:h-10 text-[#05DAFF]" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                                    />
                                </svg>
                            </div>
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">
                                Email Us
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-700 font-medium mb-8">
                                contact@watonagames.com
                            </p>
                        </div>

                        <a
                            href="mailto:contact@watonagames.com"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#05DAFF] text-white text-base sm:text-lg font-semibold rounded-full hover:bg-[#04C4E8] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            <svg 
                                className="w-5 h-5" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" 
                                />
                            </svg>
                            Send Email
                        </a>

                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <Link 
                                href="/"
                                className="text-[#05DAFF] hover:text-[#04C4E8] font-medium transition-colors"
                            >
                                ← Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
