import React from "react";
import { Reveal } from "./Reveal";
import { Icon } from "./Icons";
import { NexoraPhones } from "./NexoraPhones";

// Banner teaser full-bleed di homepage, satu blok bisa diklik ke #/nexora.
// Sengaja tanpa tombol daftar/waitlist, tanpa nama mitra, tanpa klaim izin/keamanan.
export const NexoraTeaser = ({ t }) => (
  <section id="nexora" className="nexora-band">
    <a href="#/nexora" className="container nexora-band__inner">
      <Reveal className="nexora-band__text">
        <p className="nexora__eyebrow">{t.eyebrow}</p>
        <h2>{t.title}</h2>
        <p className="nexora__tagline">Your Wealth, Your Next.</p>
        <p className="nexora__text">{t.text}</p>
        <div className="nexora__foot">
          <span className="nexora__status">{t.status}</span>
          <span className="nexora__more">{t.more}<Icon name="arrow" size={18} /></span>
        </div>
      </Reveal>
      <Reveal delay={120}>
        <NexoraPhones label={t.mockLabel} className="nexora-band__phones" />
      </Reveal>
    </a>
  </section>
);
