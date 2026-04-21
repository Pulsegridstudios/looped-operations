import { useState } from "react";
import { useTheme } from "./hooks/useTheme";
import {
  navItems,
  heroStats,
  projects,
  screenshotCards,
  team,
  discordTeam,
} from "./data/siteData";
import BackgroundGlow from "./components/BackgroundGlow";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import FeaturedGameSection from "./components/FeaturedGameSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, palette, toggleTheme } = useTheme();

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden transition-colors duration-300 ${palette.page}`}
    >
      <BackgroundGlow palette={palette} />
      <Header
        theme={theme}
        palette={palette}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        toggleTheme={toggleTheme}
        navItems={navItems}
      />
      <main id="top" className="relative z-10">
        <HeroSection palette={palette} heroStats={heroStats} />
        <AboutSection palette={palette} />
        <ProjectsSection palette={palette} theme={theme} projects={projects} />
        <FeaturedGameSection
          palette={palette}
          theme={theme}
          screenshotCards={screenshotCards}
        />
        <TeamSection
          palette={palette}
          theme={theme}
          team={team}
          discordTeam={discordTeam}
        />
        <ContactSection palette={palette} />
      </main>
      <Footer theme={theme} palette={palette} />
    </div>
  );
}