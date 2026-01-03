import FooterLinks from "@/components/ui/FooterLinks";
import SocialLinks from "@/components/ui/SocialLinks";

export default function Footer() {
    return (
        <footer className="py-12 bg-slate-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="md:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 bg-[#05DAFF] rounded-xl flex items-center justify-center">
                                <span className="text-white font-bold text-xl">W</span>
                            </div>
                            <h2 className="text-xl font-bold text-white">Watona <span className="text-[#05DAFF]">Games</span></h2>
                        </div>
                        <p className="text-sm text-gray-400">Creating joy through gaming</p>
                    </div>

                    {/* Quick Links */}
                    <FooterLinks
                        title="Company"
                        links={[
                            { label: "About Us", href: "#about" },
                            { label: "Games", href: "#games" },
                            { label: "Contact", href: "#contact" }
                        ]}
                    />

                    {/* Resources */}
                    <FooterLinks
                        title="Resources"
                        links={[
                            { label: "Blog", href: "#" },
                            { label: "Support", href: "#" },
                            { label: "FAQ", href: "#" }
                        ]}
                    />

                    {/* Legal */}
                    <FooterLinks
                        title="Legal"
                        links={[
                            { label: "Privacy Policy", href: "#" },
                            { label: "Terms of Service", href: "#" },
                            { label: "Cookie Policy", href: "#" }
                        ]}
                    />
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-slate-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-400 mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} Watona Games. All rights reserved.
                        </p>
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </footer>
    );
}
