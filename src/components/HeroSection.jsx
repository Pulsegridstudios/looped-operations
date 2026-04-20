export default function HeroSection({ palette, heroStats }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-24 pb-16 sm:pb-20">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm ${palette.softCard}`}>
            <span className={`h-2 w-2 rounded-full ${palette.accent}`} />
            Building immersive game experiences
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Modern game development with a clear creative identity.
          </h1>

          <p className={`mt-6 text-base sm:text-lg leading-8 max-w-2xl ${palette.muted}`}>
            PulseGrid Studios creates polished, ambitious experiences with a focus on strong presentation, immersive systems, and memorable worldbuilding.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className={`rounded-2xl px-5 py-3 font-medium transition text-center ${palette.buttonPrimary}`}>
              View projects
            </a>
            <a href="#team" className={`rounded-2xl px-5 py-3 font-medium transition text-center ${palette.buttonSecondary}`}>
              Meet the team
            </a>
          </div>
        </div>

        <div className={`rounded-3xl p-6 sm:p-8 transition-colors duration-300 shadow-sm ${palette.heroPanel}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {heroStats.map((item) => (
              <div key={item.label} className={`rounded-2xl p-5 ${palette.softCard}`}>
                <div className={`text-sm ${palette.subtle}`}>{item.label}</div>
                <div className="mt-2 text-xl font-semibold">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
