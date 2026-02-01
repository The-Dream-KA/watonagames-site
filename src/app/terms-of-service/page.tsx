import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-white dark:bg-black">
            <Navbar />
            <main className="min-h-[60vh] bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                        Terms of Service – Smashy Fall
                    </h1>
                    
                    <p className="text-sm text-gray-600 mb-8">
                        <strong>Effective date:</strong> February 1, 2026
                    </p>

                    <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
                        <p className="mb-6">
                            These Terms of Service (&quot;Terms&quot;) govern your access to and use of the mobile game &quot;Smashy Fall&quot; (the &quot;App&quot;) provided by Watona Games (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;). By downloading, installing, or using the App, you agree to these Terms.
                        </p>
                        <p className="mb-6 font-semibold">
                            If you do not agree, do not use the App.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1) LICENSE AND USE</h2>
                        
                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.1 License</h3>
                        <p className="mb-4">
                            We grant you a personal, non-exclusive, non-transferable, revocable, limited license to download and use the App for your personal, non-commercial entertainment purposes, subject to these Terms and applicable laws.
                        </p>

                        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">1.2 Restrictions</h3>
                        <p className="mb-2">You agree not to:</p>
                        <ul className="list-disc pl-6 space-y-2 mb-6">
                            <li>Copy, modify, distribute, sell, lease, sublicense, or exploit the App except as permitted by law</li>
                            <li>Reverse engineer, decompile, or attempt to extract source code except where allowed by law</li>
                            <li>Use the App in any unlawful way or to violate others&apos; rights</li>
                            <li>Interfere with the App&apos;s normal operation</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2) OWNERSHIP</h2>
                        <p className="mb-6">
                            The App and all associated content (including code, design, text, graphics, logos, and the gameplay and visuals) are owned by Watona Games or its licensors and are protected by intellectual property laws. All rights not expressly granted are reserved.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3) USER CONTENT</h2>
                        <p className="mb-6">
                            The App does not provide user accounts or allow you to upload content. If you contact us, you retain ownership of what you send, but you grant us the right to use it to respond and provide support.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4) UPDATES AND CHANGES</h2>
                        <p className="mb-6">
                            We may update the App to improve performance, fix bugs, or add features. Some updates may be required to continue using the App. We may also change these Terms; if we do, we will post the updated Terms on our website and update the effective date.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5) THIRD-PARTY SERVICES</h2>
                        <p className="mb-6">
                            The App does not include third-party advertising or analytics SDKs. However, distribution platforms (such as the app store) and your device operating system may have their own terms and policies that apply to you.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6) DISCLAIMER OF WARRANTIES</h2>
                        <p className="mb-3 font-semibold">
                            THE APP IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND.
                        </p>
                        <p className="mb-3">
                            To the maximum extent permitted by law, we disclaim all warranties, express or implied, including implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
                        </p>
                        <p className="mb-6">
                            We do not guarantee the App will be uninterrupted, error-free, or available at all times.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7) LIMITATION OF LIABILITY</h2>
                        <p className="mb-3">
                            To the maximum extent permitted by law, Watona Games shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or data, arising from or related to your use of (or inability to use) the App.
                        </p>
                        <p className="mb-6">
                            In any case, our total liability for any claim relating to the App shall not exceed the amount you paid for the App (if any) during the 12 months before the claim, or EUR 10 if you paid nothing, unless applicable law requires otherwise.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8) SHOWING CARE / SAFETY</h2>
                        <p className="mb-6">
                            The App is intended for entertainment. You are responsible for using your device safely and complying with local laws and rules. Do not use the App in situations where it may distract you and cause harm.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9) TERMINATION</h2>
                        <p className="mb-6">
                            We may suspend or terminate your access to the App if you violate these Terms or if required for legal or safety reasons. You may stop using the App at any time by uninstalling it.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10) GOVERNING LAW AND JURISDICTION</h2>
                        <p className="mb-3">
                            These Terms are governed by the laws of Belgium, without regard to conflict of laws rules.
                        </p>
                        <p className="mb-3">
                            If you are a consumer in the EU, you may also benefit from mandatory consumer protection laws of your country of residence.
                        </p>
                        <p className="mb-6">
                            Any disputes will be subject to the competent courts in Belgium, unless mandatory law provides otherwise.
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11) CONTACT</h2>
                        <p className="mb-3">
                            For questions about these Terms, contact:
                        </p>
                        <p className="mb-6">
                            <strong>Watona Games</strong><br />
                            Website: <a href="https://www.watonagames.com" className="text-[#05DAFF] hover:underline">https://www.watonagames.com</a><br />
                            Email: <a href="mailto:contact@watonagames.com" className="text-[#05DAFF] hover:underline">contact@watonagames.com</a>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
