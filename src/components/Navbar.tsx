"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/terms-of-service", label: "Terms and Conditions" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/more", label: "More" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20 relative">
          {/* Logo Section - Mobile First */}
          <Link href="/" className="flex items-center flex-shrink-0 z-10">
            <div className="relative h-18 w-56 sm:h-24 sm:w-72 md:h-28 md:w-96 lg:h-32 lg:w-112">
              <Image
                src="https://res.cloudinary.com/dpag93lrl/image/upload/v1767478683/watona_games_logo_transparent_cropped_vquyhq.png"
                alt="Watona Games Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <ul className="flex items-center gap-4 xl:gap-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`
                        text-base lg:text-lg xl:text-xl font-semibold transition-all duration-200 whitespace-nowrap
                        ${isActive
                          ? "text-blue-600"
                          : "text-gray-800 hover:text-blue-600 hover:underline decoration-2 underline-offset-4"
                        }
                      `}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors ml-auto z-10"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      px-4 py-3 rounded-lg font-semibold transition-colors text-sm sm:text-base
                      ${isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-800 hover:bg-gray-50"
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
