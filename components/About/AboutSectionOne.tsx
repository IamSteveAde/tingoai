import { Landmark, Radio, Cloud, Lightbulb } from "lucide-react";
import Link from "next/link";

const Partnerships = () => {
  return (
    <section className="relative overflow-hidden bg-white py-28" id="partnerships">

      {/* ORBIT BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large orbit */}
        <div className="absolute -top-32 right-[-120px] h-[520px] w-[520px] rounded-full border border-gray-300/70" />

        {/* Medium orbit */}
        <div className="absolute top-1/3 left-[-140px] h-[440px] w-[440px] rounded-full border border-gray-300/60" />

        {/* Small orbit */}
        <div className="absolute bottom-[-180px] right-1/3 h-[360px] w-[360px] rounded-full border border-gray-300/50" />

        {/* Orange accent */}
        <div className="absolute top-40 left-1/2 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Partnerships
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We work with organizations building at scale.
          </p>
        </div>

        {/* PARTNER TYPES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">

          {[
            {
              title: "Governments & Regulators",
              icon: Landmark,
            },
            {
              title: "Media & Broadcast Networks",
              icon: Radio,
            },
            {
              title: "Technology & Cloud Providers",
              icon: Cloud,
            },
            {
              title: "Research & Innovation Hubs",
              icon: Lightbulb,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                <item.icon className="h-5 w-5 text-orange-500" />
              </div>
              <p className="text-sm font-semibold text-black">
                {item.title}
              </p>
            </div>
          ))}

        </div>

        {/* PARTNERSHIP MODELS */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 rounded-2xl border border-gray-200 bg-gray-50 p-10">

          <div>
            <p className="text-sm font-semibold text-black mb-2">
              Partnership Models
            </p>
            <p className="text-sm text-gray-600">
              Strategic partnerships · Licensing · Joint ventures
            </p>
          </div>

          <Link
            href="mailto:info@tingo.ai"
            className="inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Partner With Us
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Partnerships;
