export default function AboutSection({ palette }) {
  return (
    <section id="about" className={`transition-colors duration-300 ${palette.sectionTint}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-8">
        <div>
          <p className={`text-sm font-medium ${palette.accentText}`}>About PulseGrid Studios</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
            A studio focused on quality, atmosphere, and long-term vision.
          </h2>
        </div>
        <div>
          <p className={`text-base sm:text-lg leading-8 ${palette.muted}`}>
            PulseGrid Studios is a game development group centred around creating visually strong, system-driven experiences. We care about clean design, immersive gameplay, and building projects that feel distinctive from the moment players arrive.
          </p>
        </div>
      </div>
    </section>
  );
}
