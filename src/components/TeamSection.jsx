import { ArrowUpRight } from "lucide-react";

export default function TeamSection({ palette, theme, team }) {
  return (
    <section id="team" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className={`text-sm font-medium ${palette.accentText}`}>Meet the team</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
          The people behind PulseGrid Studios
        </h2>
      </div>

      <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {team.map((member) => (
          <a
            key={member.name + member.role}
            href={member.href}
            className={`group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 ${palette.card} hover:-translate-y-2 hover:shadow-2xl hover:border-sky-400/40`}
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <div
                className={`absolute -bottom-16 -left-10 h-36 w-36 rounded-full blur-3xl ${
                  theme === "dark" ? "bg-sky-400/20" : "bg-sky-500/15"
                }`}
              />
            </div>

            <div
              className={`relative overflow-hidden rounded-2xl border mb-5 ${
                theme === "dark"
                  ? "border-slate-800 bg-slate-950/80"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/420x420/png?text=Avatar";
                }}
              />

              <div className="absolute inset-0 flex items-end justify-between p-4 opacity-0 translate-y-2 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent">
                <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-slate-950">
                  {member.cta}
                </span>
                <span className="rounded-full bg-white/15 p-2 text-white backdrop-blur-sm">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </div>

            <h3 className="mt-1 text-2xl font-semibold">{member.name}</h3>
            <p className={`mt-2 text-sm font-medium ${palette.accentText}`}>{member.role}</p>
            <p className={`mt-4 leading-7 ${palette.muted}`}>{member.bio}</p>
          </a>
        ))}
      </div>
    </section>
    
<section id="team" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-2xl">
        <p className={`text-sm font-medium ${palette.accentText}`}>Meet the team</p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">
          The people behind PulseGrid Studios
        </h2>
      </div>

      <div className="mt-10 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {team.map((member) => (
          <a
            key={member.name + member.role}
            href={member.href}
            className={`group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 ${palette.card} hover:-translate-y-2 hover:shadow-2xl hover:border-sky-400/40`}
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
              <div
                className={`absolute -bottom-16 -left-10 h-36 w-36 rounded-full blur-3xl ${
                  theme === "dark" ? "bg-sky-400/20" : "bg-sky-500/15"
                }`}
              />
            </div>

            <div
              className={`relative overflow-hidden rounded-2xl border mb-5 ${
                theme === "dark"
                  ? "border-slate-800 bg-slate-950/80"
                  : "border-slate-200 bg-slate-50"
              }`}
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/420x420/png?text=Avatar";
                }}
              />

              <div className="absolute inset-0 flex items-end justify-between p-4 opacity-0 translate-y-2 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent">
                <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-slate-950">
                  {member.cta}
                </span>
                <span className="rounded-full bg-white/15 p-2 text-white backdrop-blur-sm">
                  <ArrowUpRight size={16} />
                </span>
              </div>
            </div>

            <h3 className="mt-1 text-2xl font-semibold">{member.name}</h3>
            <p className={`mt-2 text-sm font-medium ${palette.accentText}`}>{member.role}</p>
            <p className={`mt-4 leading-7 ${palette.muted}`}>{member.bio}</p>
          </a>
        ))}
      </div>
    </section>
  );
    
  
}