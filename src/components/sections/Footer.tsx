import FooterLinks from "@/components/ui/FooterLinks";
import SocialLinks from "@/components/ui/SocialLinks";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="py-8 sm:py-10 lg:py-12 bg-slate-900 text-gray-300">
            <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
                    {/* Company Info */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="mb-3 sm:mb-4">
                            <div className="relative h-20 w-56 sm:h-24 sm:w-64 md:h-28 md:w-72">
                                <Image
                                    src="https://res.cloudinary.com/dpag93lrl/image/upload/v1767478683/watona_games_logo_transparent_cropped_vquyhq.png"
                                    alt="Watona Games Logo"
                                    fill
                                    className="object-contain object-left"
                                />
                            </div>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-400">Creating joy through gaming</p>
                    </div>

                    {/* Quick Links */}
                    <FooterLinks
                        title="Company"
                        links={[
                            { label: "About Us", href: "#about" },
                            { label: "Games", href: "#games" },
                            { label: "Contact", href: "/contact" }
                        ]}
                    />

                    {/* Legal */}
                    <FooterLinks
                        title="Legal"
                        links={[
                            { label: "Privacy Policy", href: "/privacy-policy" },
                            { label: "Terms of Service", href: "#" },
                            { label: "Cookie Policy", href: "#" }
                        ]}
                    />
                </div>

                {/* Bottom Section */}
                <div className="pt-6 sm:pt-8 border-t border-slate-800">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
                            &copy; {new Date().getFullYear()} Watona Games. All rights reserved.
                        </p>
                        <SocialLinks />
                    </div>
                </div>
            </div>
        </footer>
    );
}
