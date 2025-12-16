import {
  Radio,
  Landmark,
  CreditCard,
  Wifi,
  Zap,
  GraduationCap,
  ShoppingBag,
  ShieldCheck,
  Scale,
  Gavel,
  UserCheck,
} from "lucide-react";

const IndustriesAndGovernance = () => {
  return (
    <section className="relative overflow-hidden py-28" id="industries">

      {/* DARK BACKGROUND — SAME AS HERO */}
      <div className="absolute inset-0 -z-10">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800" />

        {/* Silver texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%)]" />

        {/* Orange accent glow */}
        <div className="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">

        {/* ================= INDUSTRIES ================= */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Industries We <span className="text-orange-500">Serve</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6">
            
            {[
              { name: "Media", icon: Radio },
              { name: "Government", icon: Landmark },
              { name: "Finance", icon: CreditCard },
              { name: "Telecoms", icon: Wifi },
              { name: "Energy", icon: Zap },
              { name: "Education", icon: GraduationCap },
              { name: "Retail", icon: ShoppingBag },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-6 backdrop-blur transition hover:bg-white/10"
              >
                <item.icon className="h-6 w-6 text-orange-500 mb-3" />
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-200">
                  {item.name}
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* ================= GOVERNANCE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Built for <span className="text-orange-500">Trust & Governance</span>
            </h2>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Responsible AI is not optional.
            </p>

            <p className="mt-4 text-base text-gray-400 max-w-xl">
              TingoAI systems are designed with governance, compliance,
              and accountability embedded from the ground up.
            </p>
          </div>

          {/* RIGHT — PRINCIPLES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {[
              {
                title: "Data Privacy & Sovereignty",
                icon: ShieldCheck,
              },
              {
                title: "Regulatory Alignment",
                icon: Scale,
              },
              {
                title: "Ethical AI Development",
                icon: Gavel,
              },
              {
                title: "Human Oversight by Design",
                icon: UserCheck,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/15">
                  <item.icon className="h-5 w-5 text-orange-500" />
                </div>
                <p className="text-sm font-semibold text-white">
                  {item.title}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustriesAndGovernance;
