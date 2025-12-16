"use client";

import { useState } from "react";
import {
  Radio,
  Languages,
  Cpu,
  Bot,
  ChevronRight,
} from "lucide-react";

const platforms = [
  {
    id: "media",
    name: "AI Media & Broadcasting",
    tagline: "Smarter content. Wider reach. Higher monetization.",
    icon: <Radio className="h-5 w-5" />,
    bullets: [
      "AI radio networks and virtual presenters",
      "Real-time translation and dubbing",
      "Intelligent music programming",
      "Automated advertising optimization",
    ],
    audience: "Media networks · Governments · Brands",
  },
  {
    id: "generative",
    name: "Generative AI Platforms",
    tagline: "Enterprise-grade text, voice, and multimodal intelligence.",
    icon: <Languages className="h-5 w-5" />,
    bullets: [
      "Conversational and assistant AI",
      "Voice AI and call automation",
      "Multilingual African language models",
      "Private and secure deployments",
    ],
    audience: "Enterprises · Banks · Telecoms · Public sector",
  },
  {
    id: "infrastructure",
    name: "AI Infrastructure & Compute",
    tagline: "The backbone that powers AI at scale.",
    icon: <Cpu className="h-5 w-5" />,
    bullets: [
      "GPU compute and AI factories",
      "Training and inference infrastructure",
      "Cloud, edge, and hybrid deployments",
      "Sovereign AI systems",
    ],
    audience: "Governments · AI companies · Research institutions",
  },
  {
    id: "agentic",
    name: "Agentic & Autonomous AI",
    tagline: "AI that plans, decides, and executes.",
    icon: <Bot className="h-5 w-5" />,
    bullets: [
      "Autonomous AI agents",
      "Multi-agent workflows",
      "Enterprise automation",
      "Public service digitization",
    ],
    audience: "Enterprises · Public agencies",
  },
];

const Platforms = () => {
  const [active, setActive] = useState(platforms[0]);

  return (
    
      <section className="relative overflow-hidden py-32 inset-0 bg-gradient-to-br from-gray-200 via-white to-gray-200" id="platforms">

      {/* CURVED BACKGROUND LINES */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <svg
          className="absolute left-0 top-0 h-full w-full"
          viewBox="0 0 1200 600"
          fill="none"
        >
          <path
            d="M-100 100 C 300 0, 600 300, 1200 150"
            stroke="#E5E7EB"
            strokeWidth="1.5"
          />
          <path
            d="M-150 300 C 400 200, 700 500, 1300 350"
            stroke="#E5E7EB"
            strokeWidth="1"
          />
          <path
            d="M-200 450 C 500 350, 800 650, 1400 500"
            stroke="rgba(249,115,22,0.25)"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Our <span className="text-orange-500">Platforms</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Enterprise-ready AI platforms designed to scale across industries and markets.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* LEFT — VERTICAL TABS */}
          <div className="lg:col-span-4 space-y-3">
            {platforms.map((platform) => (
              <button
                key={platform.id}
                onClick={() => setActive(platform)}
                className={`w-full flex items-center justify-between rounded-xl border px-5 py-4 text-left transition
                  ${
                    active.id === platform.id
                      ? "border-orange-500 bg-orange-500/5"
                      : "border-gray-200 hover:bg-gray-50"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg
                      ${
                        active.id === platform.id
                          ? "bg-orange-500 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                  >
                    {platform.icon}
                  </div>
                  <span className="text-sm font-semibold text-black">
                    {platform.name}
                  </span>
                </div>
                <ChevronRight
                  className={`h-4 w-4 transition ${
                    active.id === platform.id
                      ? "text-orange-500"
                      : "text-gray-400"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* RIGHT — PLATFORM DETAILS */}
          <div className="lg:col-span-8">
            <div className="relative rounded-2xl border border-gray-200 bg-white p-10 shadow-sm">

              <h3 className="text-2xl font-bold text-black">
                {active.name}
              </h3>

              <p className="mt-3 text-lg text-gray-600">
                {active.tagline}
              </p>

              <ul className="mt-8 space-y-4">
                {active.bullets.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-orange-500" />
                    <span className="text-sm text-gray-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-8 text-sm font-medium text-gray-500">
                <span className="text-gray-900">For:</span> {active.audience}
              </p>

              <div className="mt-10">
                <a
                  href="mailto:info@tingo.ai"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:underline"
                >
                  Explore Our Platforms
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Platforms;
