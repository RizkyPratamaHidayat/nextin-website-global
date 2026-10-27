import React, { useState } from "react";
import { Icon } from "./Icons";
import { Reveal } from "./Reveal";
import { SITE } from "../data/site";
import { TEAM } from "../data/content";

const Head = ({ eyebrow, title, children }) => (
  <Reveal className="head">
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2>{title}</h2>
    {children}
  </Reveal>
);

export const About = ({ t }) => (
  <section className="section section--tight">
    <div className="container">
      <div className="about">
      <Reveal as="h2">{t.title}</Reveal>
      <Reveal as="p" delay={120}>{t.body}</Reveal>
      </div>
    </div>
  </section>
);

export const Services = ({ t }) => (
  <section id="services" className="section section--soft">
    <div className="container">
      <Head eyebrow={t.eyebrow} title={t.title} />
      <div className="cards cards--4">
        {t.items.map((s, i) => (
          <Reveal key={s.name} delay={i * 90} className="card">
            <span className="card__icon"><Icon name={s.icon} /></span>
            <h3>{s.name}</h3>
            <p>{s.text}</p>
            <ul className="tags">{s.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const Work = ({ t }) => {
  const [filter, setFilter] = useState("all");
  const items = t.items.filter((c) => filter === "all" || c.cats.includes(filter));
  const chips = ["all", ...Object.keys(t.filters)];
  return (
    <section id="work" className="section section--dark">
      <div className="container">
        <Head eyebrow={t.eyebrow} title={t.title}><p className="muted">{t.note}</p></Head>
        <div className="chips" role="group" aria-label={t.eyebrow}>
          {chips.map((k) => (
            <button key={k} type="button" aria-pressed={filter === k} className={filter === k ? "is-active" : ""} onClick={() => setFilter(k)}>
              {k === "all" ? t.all : t.filters[k]}
            </button>
          ))}
        </div>
        <div className="cases">
          {items.map((c, i) => (
            <article key={c.title} className="case case--in" style={{ "--d": `${i * 70}ms` }}>
              <div className="case__top">
                <span className="pill">{c.industry}</span>
                <span className="status"><i /> {c.status}</span>
              </div>
              <h3>{c.title}</h3>
              <dl>
                <dt>{t.labels.problem}</dt><dd>{c.problem}</dd>
                <dt>{t.labels.solution}</dt><dd>{c.solution}</dd>
                <dt>{t.labels.result}</dt><dd>{c.result}</dd>
              </dl>
              <p className="case__meta">{c.meta}</p>
            </article>
          ))}
        </div>
        <p className="muted case__more">{t.more}</p>
      </div>
    </section>
  );
};

export const Process = ({ t, industries }) => (
  <section id="process" className="section">
    <div className="container">
      <Head eyebrow={t.eyebrow} title={t.title} />
      <ol className="steps">
        {t.steps.map((s, i) => (
          <Reveal as="li" key={s.name} delay={i * 110} className="step">
            <span className="step__n">{String(i + 1).padStart(2, "0")}</span>
            <h3>{s.name}</h3>
            <p>{s.text}</p>
          </Reveal>
        ))}
      </ol>
      <Reveal className="industries">
        <h3>{industries.title}</h3>
        <ul>{industries.items.map((x) => <li key={x.name}><strong>{x.name}</strong><span>{x.text}</span></li>)}</ul>
      </Reveal>
    </div>
  </section>
);

export const Team = ({ t, lang }) => (
  <section id="team" className="section section--soft">
    <div className="container">
      <Head eyebrow={t.eyebrow} title={t.title} />
      <div className="cards cards--2">
        {TEAM.map((m, i) => (
          <Reveal key={m.name} delay={i * 120} className="person">
            <img src={m.img} alt={m.name} loading="lazy" width="96" height="96" />
            <div>
              <h3>{m.name}</h3>
              <p className="person__job">{m.job[lang]}</p>
              <p>{m.bio[lang]}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export const Contact = ({ t, lang }) => {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const body = [
      `Name: ${f.get("name")}`,
      `Email: ${f.get("email")}`,
      `Need: ${f.get("need")}`,
      `Timeline: ${f.get("timeline") || "-"}`,
      "",
      f.get("message"),
    ].join("\n");
    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      `Project inquiry: ${f.get("need")}`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  const waText = encodeURIComponent(lang === "id" ? "Halo Nextin, saya ingin diskusi proyek." : "Hi Nextin, I'd like to discuss a project.");
  const f = t.fields;
  return (
    <section id="contact" className="section section--dark contact">
      <div className="container contact__grid">
        <Reveal>
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>{t.title}</h2>
          <p className="muted">{t.sub}</p>
          <ul className="contact__list">
            <li><Icon name="mail" size={20} /><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li>
            <li><Icon name="phone" size={20} /><a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a></li>
            <li><Icon name="whatsapp" size={20} /><a href={`https://wa.me/${SITE.whatsapp}?text=${waText}`} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
          </ul>
        </Reveal>
        <Reveal delay={120} as="form" className="form" onSubmit={submit}>
          <label>{f.name}<input name="name" required autoComplete="name" /></label>
          <label>{f.email}<input name="email" type="email" required autoComplete="email" /></label>
          <div className="form__row">
            <label>{f.need}
              <select name="need" required defaultValue="">
                <option value="" disabled>{t.select}</option>
                {t.needs.map((n) => <option key={n}>{n}</option>)}
              </select>
            </label>
            <label>{f.timeline}
              <select name="timeline" defaultValue="">
                <option value="">{t.select}</option>
                {t.timelines.map((n) => <option key={n}>{n}</option>)}
              </select>
            </label>
          </div>
          <label>{f.message}<textarea name="message" rows="4" required /></label>
          <button className="btn btn--primary btn--lg" type="submit">{t.submit}<Icon name="arrow" size={18} /></button>
          {sent && <p className="form__note" role="status">{t.sent}</p>}
        </Reveal>
      </div>
    </section>
  );
};

export const Footer = ({ t }) => (
  <footer className="footer">
    <div className="container">© {new Date().getFullYear()} {t}</div>
  </footer>
);

export const WhatsAppFab = ({ lang }) => (
  <a
    className="fab"
    href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(lang === "id" ? "Halo Nextin, saya ingin diskusi proyek." : "Hi Nextin, I'd like to discuss a project.")}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    <Icon name="whatsapp" size={26} />
  </a>
);
