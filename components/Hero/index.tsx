const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-[140px] pb-24"
    >

      {/* ================= MOBILE BACKGROUND VIDEO ================= */}
      {/* Shows ONLY on mobile/tablet */}
      <div className="absolute inset-0 z-0 lg:hidden">
        <video
          className="h-full w-full object-cover"
          src="/ai.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* DARK OVERLAY FOR READABILITY */}
        <div className="absolute inset-0 bg-black/75" />

        {/* OPTIONAL CINEMATIC GRADIENT */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90" />
      </div>

      {/* ================= DESKTOP BACKGROUND ================= */}
      {/* Shows ONLY on desktop */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-gray-800" />

        {/* Silver Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_40%)]" />

        {/* Orange Accent Glow */}
        <div className="absolute top-[-200px] right-[-200px] h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[120px]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — TEXT */}
          <div>
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-white">
              Building Africa’s AI{" "}
              <span className="text-orange-500">Future</span>{" "}
              for the{" "}
              <span className="text-orange-500">World</span>
            </h1>

            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Full-stack artificial intelligence for media, enterprises, and governments.
            </p>

            <p className="mt-4 text-base text-gray-400 max-w-xl">
              From AI-powered broadcasting to generative platforms, infrastructure,
              and autonomous agents—TingoAI delivers enterprise-ready AI at scale.
            </p>

            {/* POSITIONING BADGE */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur">
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-400">
                Africa-born
              </span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span className="text-xs font-semibold uppercase tracking-widest text-white">
                Globally deployed
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="mailto:info@tingo.ai"
                className="inline-flex items-center justify-center rounded-md bg-orange-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Explore Our Platforms
              </a>

              <a
                href="mailto:info@tingo.ai"
                className="inline-flex items-center justify-center rounded-md bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Partner With Us
              </a>

              <a
                href="mailto:info@tingo.ai"
                className="inline-flex items-center justify-center rounded-md border border-white/30 px-8 py-4 text-sm font-semibold text-white transition hover:border-white"
              >
                Request Demo
              </a>
            </div>
          </div>

          {/* RIGHT — DESKTOP VIDEO CARD */}
          <div className="relative hidden lg:block">
            <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">

              <video
                className="absolute inset-0 h-full w-full object-cover opacity-90"
                src="/ai.mp4"
                autoPlay
                muted
                loop
                playsInline
              />

              {/* CARD OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent" />

              {/* GLOWS */}
              <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-orange-500/30 blur-3xl" />
              <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

              {/* LABEL */}
              <div className="absolute bottom-6 left-6">
                <span className="text-xs uppercase tracking-widest text-white/70">
                  AI Infrastructure · Generative Systems
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
