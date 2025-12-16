import Link from "next/link";

const FinalCTA = () => {
  return (
    <section className="relative overflow-hidden py-28">

      {/* HERO-STYLE BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800" />

        {/* Silver texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%)]" />

        {/* Orange accent glow */}
        <div className="absolute top-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[120px]" />
        <div className="absolute bottom-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">

        <div className="mx-auto max-w-4xl text-center">

          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight">
            Ready to Build with{" "}
            <span className="text-orange-500">TingoAI</span>?
          </h2>

          <p className="mt-6 text-lg text-gray-300">
            Deploy AI that is secure, scalable, and globally competitive.
          </p>

          <p className="mt-2 text-base text-gray-400">
            Built for enterprises, governments, and institutions operating at scale.
          </p>

          {/* ACTIONS */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">

            <a
  href="mailto:info@tingo.ai"
  className="inline-flex items-center justify-center rounded-md bg-orange-500 px-10 py-4 text-sm font-semibold text-white transition hover:bg-orange-600"
>
  Explore Our Platforms
</a>

<a
  href="mailto:info@tingo.ai"
  className="inline-flex items-center justify-center rounded-md bg-white/10 px-10 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
>
  Partner With Us
</a>

<a
  href="mailto:info@tingo.ai"
  className="inline-flex items-center justify-center rounded-md border border-white/30 px-10 py-4 text-sm font-semibold text-white transition hover:border-white"
>
  Request Demo
</a>


          </div>

        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
