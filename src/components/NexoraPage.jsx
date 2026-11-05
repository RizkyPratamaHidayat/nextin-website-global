import React, { useEffect } from "react";
import { Icon } from "./Icons";
import { Reveal } from "./Reveal";
import { NexoraPhones } from "./NexoraPhones";

// Halaman produk NEXORA (#/nexora). Aturan konten: tanpa nama mitra, tanpa klaim izin/keamanan,
// tanpa angka yang kebaca kayak janji untung, tanpa form data pribadi.
export const NexoraPage = ({ t }) => {
  useEffect(() => {
    const prev = document.title;
    document.title = "NEXORA · NEXTIN";
    window.scrollTo(0, 0);
    return () => { document.title = prev; };
  }, []);
  return (
    <div className="nxp">
      <section className="nxp__hero">
        <div className="container nxp__hero-inner">
          <div>
            <a className="nxp__back" href="#top">
              <span className="nxp__back-arrow"><Icon name="arrow" size={16} /></span>{t.back}
            </a>
            <p className="nexora__eyebrow">{t.eyebrow}</p>
            <h1 className="nxp__title">NEXORA</h1>
            <p className="nexora__tagline">Your Wealth, Your Next.</p>
            <p className="nxp__intro">{t.intro}</p>
            <span className="nexora__status">{t.status}</span>
          </div>
          <NexoraPhones label={t.mockLabel} eager />
        </div>
      </section>

      <section className="section nxp__features">
        <div className="container">
          <Reveal className="head">
            <h2>{t.featuresTitle}</h2>
          </Reveal>
          <div className="cards cards--4">
            {t.features.map((f, i) => (
              <Reveal key={f.name} delay={i * 90} className="card nxp__card">
                <span className="card__icon nxp__icon"><Icon name={f.icon} /></span>
                <h3>{f.name}</h3>
                <p>{f.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <Reveal className="nxp__note">
            <h2>{t.noteTitle}</h2>
            <p>{t.noteText}</p>
            <p className="nxp__risk">{t.risk}</p>
            <a className="btn btn--gold" href="#top">{t.back}</a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default NexoraPage;
