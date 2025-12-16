import {
  Layers,
  ShieldCheck,
  Globe,
  Building2,
} from "lucide-react";

const WhyTingoAI = () => {
  return (
    <section className="relative overflow-hidden bg-white py-28" id="why">

      {/* ORBIT BACKGROUND — MORE VISIBLE */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large orbit */}
        <div className="absolute -top-20 -left-20 h-[520px] w-[520px] rounded-full border border-gray-300/80" />

        {/* Medium orbit */}
        <div className="absolute top-24 right-[-120px] h-[420px] w-[420px] rounded-full border border-gray-300/70" />

        {/* Small orbit */}
        <div className="absolute bottom-[-140px] left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full border border-gray-300/60" />

        {/* Orange accent orbit */}
        <div className="absolute top-40 left-1/3 h-48 w-48 rounded-full border border-orange-400/30" />
      </div>

      <div className="container mx-auto px-6 relative">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Why <span className="text-orange-500">TingoAI</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            AI designed for real-world deployment, not experiments.
          </p>
        </div>

        {/* VALUE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* CARD 1 */}
          <div className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
              <Layers className="h-5 w-5 text-orange-500" />
            </div>
            <p className="text-sm font-semibold text-black">
              Full-stack AI
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Models, platforms, and infrastructure—fully integrated.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
              <Building2 className="h-5 w-5 text-orange-500" />
            </div>
            <p className="text-sm font-semibold text-black">
              Enterprise & Government Ready
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Built for regulated and mission-critical environments.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
              <Globe className="h-5 w-5 text-orange-500" />
            </div>
            <p className="text-sm font-semibold text-black">
              Built to Scale
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Designed for Africa and global markets.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="group rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-md">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
              <ShieldCheck className="h-5 w-5 text-orange-500" />
            </div>
            <p className="text-sm font-semibold text-black">
              Secure by Design
            </p>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">
              Compliant, production-ready, and trusted.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyTingoAI;
