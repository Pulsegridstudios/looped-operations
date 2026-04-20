import { Sun, Moon, Menu, X } from "lucide-react";

export default function Header({
  theme,
  palette,
  menuOpen,
  setMenuOpen,
  toggleTheme,
  navItems,
}) {
  return (
    <header className={`sticky top-0 z-50 backdrop-blur border-b transition-colors duration-300 ${palette.nav}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-3">
          <div className={`h-14 w-14 rounded-xl flex items-center justify-center font-semibold ${theme === "dark" ? "bg-slate-800 text-white" : "bg-slate-200 text-slate-900"}`}>
            PG
          </div>

          <div>
            <div className="text-lg sm:text-xl font-semibold tracking-tight">PulseGrid Studios</div>
            <div className={`text-sm ${palette.subtle}`}>Game development group</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className={`transition hover:opacity-70 ${palette.muted}`}>
                {item.label}
              </a>
            ))}
          </nav>
          <button
            onClick={toggleTheme}
            className={`inline-flex items-center justify-center rounded-xl p-2 transition ${palette.buttonSecondary}`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className={`inline-flex items-center justify-center rounded-xl p-2 transition ${palette.buttonSecondary}`}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`inline-flex items-center justify-center rounded-xl p-2 transition ${palette.buttonSecondary}`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={`md:hidden border-t ${theme === "dark" ? "border-slate-800" : "border-slate-200"}`}>
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col gap-3 text-sm">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`${palette.muted}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
