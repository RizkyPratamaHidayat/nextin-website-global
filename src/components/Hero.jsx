import React from "react";
import { Icon } from "./Icons";
import { useReveal, useCountUp } from "../hooks/useReveal";
import { SITE } from "../data/site";

const Stat = ({ value, label, prefix = "", suffix = "", active }) => {
  const n = useCountUp(typeof value === "number" ? value : 0, active);
  return (
    <div className="stat">
      <strong>{prefix}{typeof value === "number" ? n : value}{suffix}</strong>
      <span>{label}</span>
    </div>
  );
};

export const Hero = ({ t, stats }) => {
  const [ref, visible] = useReveal(0.4);
  const years = new Date().getFullYear() - SITE.foundedYear;
  return (
    <section id="top" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <i className="orb orb--a" /><i className="orb orb--b" /><i className="grid" />
      </div>
      <div className="container hero__inner">
        <p className="eyebrow hero__in" style={{ "--i": 0 }}>{t.eyebrow}</p>
        <h1 className="hero__in" style={{ "--i": 1 }}>{t.title}</h1>
        <p className="hero__sub hero__in" style={{ "--i": 2 }}>{t.sub}</p>
        <div className="hero__cta hero__in" style={{ "--i": 3 }}>
          <a className="btn btn--primary btn--lg" href="#contact">{t.primary}<Icon name="arrow" size={18} /></a>
          <a className="btn btn--ghost btn--lg" href="#work">{t.secondary}</a>
        </div>
        <div ref={ref} className="stats hero__in" style={{ "--i": 4 }}>
          <Stat value={String(SITE.foundedYear)} label={stats.since} active={visible} />
          <Stat value={years} suffix="+" label={stats.years} active={visible} />
          <Stat value={SITE.countries} label={stats.countries} active={visible} />
          {SITE.projectsCount !== null && (
            <Stat value={SITE.projectsCount} suffix="+" label={stats.projects} active={visible} />
          )}
        </div>
      </div>
    </section>
  );
};
