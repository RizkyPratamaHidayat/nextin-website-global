import React, { useEffect, useState } from "react";

export const Navigation = ({ t, lang, setLang }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["services", t.services],
    ["work", t.work],
    ["process", t.process],
    ["team", t.team],
    ["contact", t.contact],
  ];
  return (
    <header className={`nav ${scrolled ? "nav--solid" : ""} ${open ? "nav--open" : ""}`}>
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" onClick={() => setOpen(false)}>
          <span className="nav__mark" aria-hidden="true" />
          <span>NEXTIN</span>
        </a>
        <button
          type="button"
          className="nav__toggle"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen(!open)}
        >
          <span /><span /><span />
        </button>
        <nav id="nav-menu" className="nav__menu" aria-label="Main">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <div className="lang" role="group" aria-label="Language">
            {["en", "id"].map((l) => (
              <button key={l} type="button" aria-pressed={lang === l} className={lang === l ? "is-active" : ""} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="btn btn--primary btn--sm" href="#contact" onClick={() => setOpen(false)}>{t.cta}</a>
        </nav>
      </div>
    </header>
  );
};
