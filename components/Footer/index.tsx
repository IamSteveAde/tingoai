"use client";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden pt-24">

      {/* HERO-STYLE BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800" />

        {/* Silver texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%)]" />

        {/* Orange accent glows */}
        <div className="absolute top-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[120px]" />
        <div className="absolute bottom-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div className="max-w-sm">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/ailogo.png"
                alt="TingoAI"
                width={140}
                height={32}
              />
            </Link>

            <p className="text-sm leading-relaxed text-gray-400">
              TingoAI is a full-stack artificial intelligence company building
              enterprise-ready AI platforms, infrastructure, and autonomous
              systems for Africa and the world.
            </p>

            <p className="mt-4 text-xs font-medium tracking-widest uppercase text-gray-300">
              Africa-born · Globally deployed
            </p>
          </div>

          {/* PLATFORMS */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-white">
              Platforms
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#platforms" className="hover:text-orange-500">AI Media & Broadcasting</Link></li>
              <li><Link href="#platforms" className="hover:text-orange-500">Generative AI Platforms</Link></li>
              <li><Link href="#platforms" className="hover:text-orange-500">AI Infrastructure & Compute</Link></li>
              <li><Link href="#platforms" className="hover:text-orange-500">Agentic AI Systems</Link></li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-white">
              Company
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link href="#why" className="hover:text-orange-500">Why TingoAI</Link></li>
              <li><Link href="#industries" className="hover:text-orange-500">Industries</Link></li>
              <li><Link href="#partnerships" className="hover:text-orange-500">Partnerships</Link></li>
              <li><Link href="#governance" className="hover:text-orange-500">Responsible AI</Link></li>
            </ul>
          </div>

          {/* CONTACT / CTA */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-white">
              Get Started
            </h3>

           <ul className="space-y-4 text-sm text-gray-400 mb-8">
  <li>
    <a
      href="mailto:info@tingo.ai"
      className="hover:text-orange-500"
    >
      Request a Demo
    </a>
  </li>
  <li>
    <a
      href="mailto:info@tingo.ai"
      className="hover:text-orange-500"
    >
      Partner With Us
    </a>
  </li>
  <li>
    <a
      href="mailto:info@tingo.ai"
      className="hover:text-orange-500"
    >
      Contact
    </a>
  </li>
</ul>


            <a
  href="mailto:info@tingo.ai"
  className="inline-flex items-center justify-center rounded-md bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
>
  Explore Our Platforms
</a>

          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        {/* BOTTOM BAR */}
        <div className="pb-10 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} TingoAI. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
