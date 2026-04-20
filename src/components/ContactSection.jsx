export default function ContactSection({ palette }) {
  return (
    <section id="contact" className={`transition-colors duration-300 ${palette.sectionTint}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className={`rounded-3xl p-8 sm:p-10 transition-all duration-300 ${palette.card} hover:-translate-y-1 hover:shadow-xl hover:border-sky-400/40`}>
          <p className={`text-sm font-medium ${palette.accentText}`}>Contact</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">Ready to expand this into a full studio website?</h2>
          <p className={`mt-4 text-base sm:text-lg leading-8 max-w-2xl ${palette.muted}`}>
            This layout is responsive, works well on mobile browsers, and now includes clickable cards, footer links, a featured game section, and avatar-ready team profiles.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#" className={`rounded-2xl px-5 py-3 font-medium transition text-center ${palette.buttonPrimary}`}>
              Add community links
            </a>
            <a href="#team" className={`rounded-2xl px-5 py-3 font-medium transition text-center ${palette.buttonSecondary}`}>
              Edit team profiles
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
