export default function Footer({ theme, palette }) {
  return (
    <footer className={`transition-colors duration-300 ${palette.sectionTint} border-t ${theme === "dark" ? "border-slate-800" : "border-slate-200"}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <div className="font-semibold">PulseGrid Studios</div>
          <div className={`text-sm mt-1 ${palette.subtle}`}>
            © {new Date().getFullYear()} PulseGrid Studios. All rights reserved.
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:items-center text-sm">
          <a href="#" target="_blank" rel="noopener noreferrer" className={`${palette.muted} hover:opacity-70 transition`}>
            Roblox Group
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className={`${palette.muted} hover:opacity-70 transition`}>
            Discord Server
          </a>
          <a href="#" className={`${palette.muted} hover:opacity-70 transition`}>
            Privacy
          </a>
          <a href="#" className={`${palette.muted} hover:opacity-70 transition`}>
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
}
