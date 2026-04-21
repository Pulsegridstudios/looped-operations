export default function ContactSection({ palette }) {
  return (
    <section id="contact" className={`transition-colors duration-300 ${palette.sectionTint}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className={`rounded-3xl p-8 sm:p-10 transition-all duration-300 ${palette.card} hover:-translate-y-1 hover:shadow-xl hover:border-sky-400/40`}>
          <p className={`text-sm font-medium ${palette.accentText}`}>Useful Links</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="https://pulsegridstudios.github.io/wiki" className={`rounded-2xl px-5 py-3 font-medium transition text-center ${palette.buttonPrimary}`}>
              Looped Operations Wiki
            </a>
            <a href="https://pulsegridstudios.github.io/hub" className={`rounded-2xl px-5 py-3 font-medium transition text-center ${palette.buttonSecondary}`}>
              PulseGrid Studios Hub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
