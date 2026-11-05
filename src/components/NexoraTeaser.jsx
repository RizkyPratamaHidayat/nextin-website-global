import React from "react";
import { Reveal } from "./Reveal";
import { Icon } from "./Icons";

// Logo N NEXORA, disalin dari prototype-ui/logo/n-mark.svg (id gradient dikasih prefix biar nggak bentrok).
export const NMark = () => (
  <svg className="nexora__mark" viewBox="0 0 120 120" aria-hidden="true">
    <defs>
      <linearGradient id="nx-g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#F6D77E" /><stop offset=".55" stopColor="#D4A437" /><stop offset="1" stopColor="#A8781C" /></linearGradient>
      <linearGradient id="nx-g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#FBE7A6" /><stop offset="1" stopColor="#C9962B" /></linearGradient>
      <linearGradient id="nx-g3" x1="1" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#E6C15C" /><stop offset="1" stopColor="#8A6414" /></linearGradient>
    </defs>
    <path d="M14 104V34c0-5 2.6-8.4 7-10.4L40 14v70z" fill="url(#nx-g1)" />
    <path d="M14 34c0-5 2.6-8.4 7-10.4L40 14l40 56v22L40 38z" fill="url(#nx-g2)" />
    <path d="M106 16v70c0 5-2.6 8.4-7 10.4L80 106V36z" fill="url(#nx-g3)" />
    <path d="M80 70v36l-40-56v-12z" fill="#8A6414" opacity=".35" />
  </svg>
);

// Teaser produk. Sengaja tanpa tombol daftar/waitlist, tanpa nama mitra, tanpa klaim izin/keamanan.
export const NexoraTeaser = ({ t }) => (
  <section id="nexora" className="section section--tight">
    <div className="container">
      <Reveal as="a" href="#/nexora" className="nexora nexora--link">
        <NMark />
        <div className="nexora__body">
          <p className="nexora__eyebrow">{t.eyebrow}</p>
          <h2>{t.title}</h2>
          <p className="nexora__tagline">Your Wealth, Your Next.</p>
          <p className="nexora__text">{t.text}</p>
          <div className="nexora__foot">
            <span className="nexora__status">{t.status}</span>
            <span className="nexora__more">{t.more}<Icon name="arrow" size={18} /></span>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
