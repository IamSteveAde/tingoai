"use client";

import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";


const Navbar = () => {
  // Enable smooth scrolling globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <header className="fixed top-0 left-0 z-50 w-full backdrop-blur bg-black/70 border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex h-20 items-center justify-between">

          {/* LOGO */}
         

<Link href="#home" className="flex items-center">
  <Image
    src="/ailogo.png"
    alt="TingoAI"
    width={140}
    height={40}
    priority
    className="object-contain"
  />
</Link>


          {/* NAV LINKS */}
          <nav className="hidden lg:flex items-center text-white gap-10">
            <Link href="#why" className="nav-link">Why TingoAI</Link>
            <Link href="#platforms" className="nav-link">Platforms</Link>
            <Link href="#industries" className="nav-link">Industries</Link>
            <Link href="#partnerships" className="nav-link">Partnerships</Link>
         
          </nav>

          {/* ACTIONS */}
          <div className="hidden lg:flex items-center gap-4">
            <a
  href="mailto:info@tingo.ai"
  className="rounded-md border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:border-white"
>
  Request Demo
</a>

<Link
  href="#platforms"
  className="rounded-md bg-orange-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
>
  Explore Platforms
</Link>

          </div>

          {/* MOBILE MENU PLACEHOLDER */}
          <button className="lg:hidden text-white">
            ☰
          </button>

        </div>
      </div>

      {/* NAV LINK STYLES */}
      <style jsx>{`
        .nav-link {
          font-size: 0.875rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.75);
          transition: color 0.2s ease;
        }
        .nav-link:hover {
          color: #f97316; /* orange-500 */
        }
      `}</style>
    </header>
  );
};

export default Navbar;
