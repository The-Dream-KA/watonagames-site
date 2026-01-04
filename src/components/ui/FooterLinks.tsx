interface FooterLinksProps {
    title: string;
    links: Array<{
        label: string;
        href: string;
    }>;
}

export default function FooterLinks({ title, links }: FooterLinksProps) {
    return (
        <div>
            <h3 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">{title}</h3>
            <div className="space-y-1.5 sm:space-y-2">
                {links.map((link) => (
                    <a
                        key={link.label}
                        href={link.href}
                        className="block text-xs sm:text-sm hover:text-[#05DAFF] transition-colors"
                    >
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
    );
}
