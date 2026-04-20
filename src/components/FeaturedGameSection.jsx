export default function FeaturedGameSection({ palette, theme, screenshotCards }) {
  return (
    <section id="looped-operations" className={`transition-colors duration-300 ${palette.sectionTint}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <div>
            <p className={`text-sm font-medium ${palette.accentText}`}>Featured game</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Looped Operations</h2>
            <p className={`mt-5 text-base sm:text-lg leading-8 ${palette.muted}`}>
              Looped Operations is the flagship PulseGrid Studios experience, designed around immersive plant operations, control-room presentation, and system-driven gameplay. This section works as a dedicated game page preview with room for screenshots, feature lists, links, and a launch button.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#" className={`rounded-2xl px-5 py-3 font-medium transition text-center ${palette.buttonPrimary}`}>
                Add Roblox game link
              </a>
              <a href="#projects" className={`rounded-2xl px-5 py-3 font-medium transition text-center ${palette.buttonSecondary}`}>
                Back to projects
              </a>
            </div>
          </div>

          <div className={`rounded-3xl p-6 ${palette.card}`}>
            <div className="grid gap-4">
              {screenshotCards.map((item, index) => (
                <div
                  key={item}
                  className={`relative overflow-hidden rounded-2xl border ${theme === "dark" ? "border-slate-800 bg-slate-950/70" : "border-slate-200 bg-slate-50"}`}
                >
                  <img
                    src={`https://placehold.co/1200x700/png?text=${encodeURIComponent(item)}`}
                    alt={item}
                    className="h-40 sm:h-48 w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                    <div className="text-sm uppercase tracking-wide opacity-80">Screenshot {index + 1}</div>
                    <div className="text-base font-medium">{item}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
