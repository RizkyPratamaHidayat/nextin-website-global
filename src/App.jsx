import React, { useState, useEffect, Suspense, lazy } from "react";
import { CONTENT } from "./data/content";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { NexoraTeaser } from "./components/NexoraTeaser";
import { About, Reach, Services, Work, Process, Team, Contact, Footer, WhatsAppFab } from "./components/Sections";
import "./index.css";

// Halaman NEXORA dimuat terpisah (chunk sendiri) biar landing page tetap ringan.
const NexoraPage = lazy(() => import("./components/NexoraPage"));
const NEXORA_ROUTE = "#/nexora";
const isNexora = () => window.location.hash.startsWith(NEXORA_ROUTE);

const initialLang = () => {
  const saved = window.localStorage.getItem("lang");
  if (saved === "en" || saved === "id") return saved;
  return "en"; // default Inggris (DEC-014)
};

const App = () => {
  const [lang, setLang] = useState(initialLang);
  const t = CONTENT[lang];
  const [onNexora, setOnNexora] = useState(isNexora);
  useEffect(() => {
    // Balik dari #/nexora ke anchor biasa (#services, #top, ...): render landing dulu, baru scroll ke section-nya.
    const onHash = () => {
      const next = isNexora();
      setOnNexora(next);
      if (!next) {
        const id = window.location.hash.slice(1);
        requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);
  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <>
      <Navigation t={t.nav} lang={lang} setLang={setLang} />
      {onNexora ? (
        <main>
          <Suspense fallback={<div className="nxp nxp--loading" />}>
            <NexoraPage t={t.nexoraPage} />
          </Suspense>
        </main>
      ) : (
        <main>
          <Hero t={t.hero} stats={t.stats} />
          <About t={t.about} />
          <Reach t={t.reach} />
          <NexoraTeaser t={t.nexora} />
          <Services t={t.services} />
          <Work t={t.work} />
          <Process t={t.process} industries={t.industries} />
          <Team t={t.team} lang={lang} />
          <Contact t={t.contact} lang={lang} />
        </main>
      )}
      <Footer t={t.footer} />
      <WhatsAppFab lang={lang} />
    </>
  );
};

export default App;
