import { useConfigurables } from "~/modules/configurables";

export default function IndexPage() {
  const { config, loading } = useConfigurables();

  // Resolve configurable values with safe fallbacks
  const heading = loading ? "" : (config.heroHeading ?? "He");
  const subtitle = loading ? "" : (config.heroSubtitle ?? "");
  const tagline = loading ? "" : (config.heroTagline ?? "");
  const primary = config?.brandColor?.primary ?? "#6366F1";
  const accent = config?.brandColor?.accent ?? "#A78BFA";

  return (
    <main
      style={{ minHeight: "100vh" }}
      className="relative flex flex-col items-center justify-center overflow-hidden bg-[#F9F9FB]"
    >
      {/* Subtle radial gradient background blob */}
      <div
        aria-hidden="true"
        style={{
          background: `radial-gradient(ellipse 70% 55% at 50% 40%, ${primary}18 0%, transparent 70%)`,
        }}
        className="pointer-events-none absolute inset-0"
      />

      {/* Decorative top-right accent orb */}
      <div
        aria-hidden="true"
        style={{
          background: `radial-gradient(circle, ${accent}22 0%, transparent 70%)`,
          width: "480px",
          height: "480px",
          top: "-120px",
          right: "-120px",
        }}
        className="pointer-events-none absolute rounded-full"
      />

      {/* Decorative bottom-left accent orb */}
      <div
        aria-hidden="true"
        style={{
          background: `radial-gradient(circle, ${primary}18 0%, transparent 70%)`,
          width: "360px",
          height: "360px",
          bottom: "-80px",
          left: "-80px",
        }}
        className="pointer-events-none absolute rounded-full"
      />

      {/* Hero content */}
      <section className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        {/* Tagline pill */}
        {tagline && !loading && (
          <div
            style={{
              background: `${primary}14`,
              borderColor: `${primary}30`,
              color: primary,
            }}
            className="inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-semibold tracking-widest uppercase"
          >
            <span
              style={{ background: primary }}
              className="inline-block h-1.5 w-1.5 rounded-full"
            />
            {tagline}
          </div>
        )}

        {/* Main heading */}
        {loading ? (
          <div className="h-20 w-96 max-w-full animate-pulse rounded-2xl bg-gray-200" />
        ) : (
          <h1
            className="font-sans text-5xl font-black leading-[1.05] tracking-tight text-[#111118] sm:text-6xl md:text-7xl lg:text-8xl"
            style={{
              // Subtle gradient on the brand name portion via a clip trick
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundImage: `linear-gradient(135deg, #111118 0%, #111118 45%, ${primary} 100%)`,
              backgroundClip: "text",
            }}
          >
            {heading}
          </h1>
        )}

        {/* Accent rule */}
        <div
          style={{
            background: `linear-gradient(90deg, transparent, ${primary}, ${accent}, transparent)`,
          }}
          className="h-px w-48 opacity-60"
        />

        {/* Subtitle */}
        {subtitle && !loading && (
          <p className="max-w-md text-base font-medium leading-relaxed text-[#64748B] sm:text-lg">
            {subtitle}
          </p>
        )}
      </section>
    </main>
  );
}
