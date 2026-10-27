import React, { useState, useEffect } from "react";
import { CONTENT } from "./data/content";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About, Services, Work, Process, Team, Contact, Footer, WhatsAppFab } from "./components/Sections";
import "./index.css";

const initialLang = () => {
  const saved = window.localStorage.getItem("lang");
  if (saved === "en" || saved === "id") return saved;
  return "en"; // default Inggris (DEC-014)
};

const App = () => {
  const [lang, setLang] = useState(initialLang);
  const t = CONTENT[lang];
  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <>
      <Navigation t={t.nav} lang={lang} setLang={setLang} />
      <main>
        <Hero t={t.hero} stats={t.stats} />
        <About t={t.about} />
        <Services t={t.services} />
        <Work t={t.work} />
        <Process t={t.process} industries={t.industries} />
        <Team t={t.team} lang={lang} />
        <Contact t={t.contact} lang={lang} />
      </main>
      <Footer t={t.footer} />
      <WhatsAppFab lang={lang} />
    </>
  );
};

export default App;
