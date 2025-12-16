"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Enable smooth scrolling globally
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <>
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

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-10">
              <Link href="#why" className="nav-link">Why TingoAI</Link>
              <Link href="#platforms" className="nav-link">Platforms</Link>
              <Link href="#industries" className="nav-link">Industries</Link>
              <Link href="#partnerships" className="nav-link">Partnerships</Link>
            </nav>

            {/* DESKTOP ACTIONS */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="mailto:info@tingo.ai"
                className="rounded-md border border-white/30 px-5 py-2 text-sm font-semibold text-white transition hover:border-white"
              >
                Request Demo
              </a>

              <a
                href="mailto:info@tingo.ai"
                className="rounded-md bg-orange-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Explore Platforms
              </a>
            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden text-white text-2xl"
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>

        {/* LINK STYLES */}
        <style jsx>{`
          .nav-link {
            font-size: 0.875rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.75);
            transition: color 0.2s ease;
          }
          .nav-link:hover {
            color: #f97316;
          }
        `}</style>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur">
          <div className="flex h-full flex-col px-6 pt-6">

            {/* TOP BAR */}
            <div className="flex items-center justify-between">
              <Image
                src="/ailogo.png"
                alt="TingoAI"
                width={120}
                height={36}
                className="object-contain"
              />

              <button
                onClick={() => setOpen(false)}
                className="text-white text-3xl"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            {/* LINKS */}
            <nav className="mt-16 flex flex-col gap-8 text-white text-lg">
              <Link href="#why" onClick={() => setOpen(false)}>Why TingoAI</Link>
              <Link href="#platforms" onClick={() => setOpen(false)}>Platforms</Link>
              <Link href="#industries" onClick={() => setOpen(false)}>Industries</Link>
              <Link href="#partnerships" onClick={() => setOpen(false)}>Partnerships</Link>
            </nav>

            {/* CTA */}
            <div className="mt-auto pb-10 flex flex-col gap-4">
              <a
                href="mailto:info@tingo.ai"
                className="rounded-md bg-orange-500 px-6 py-3 text-center text-sm font-semibold text-white"
              >
                Request Demo
              </a>

              <a
                href="mailto:info@tingo.ai"
                className="rounded-md border border-white/30 px-6 py-3 text-center text-sm font-semibold text-white"
              >
                Partner With Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
