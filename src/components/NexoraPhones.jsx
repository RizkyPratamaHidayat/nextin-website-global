import React from "react";
import mockTwo from "../assets/nexora/mockup-dua-hp.webp";
import mockOne from "../assets/nexora/mockup-hp-miring.webp";

// Mockup HP dari aset branding Lexa (marketing-assets, versi tanpa glow), dikecilin ke WebP. Glow emas dari CSS.
// Saldo disembunyiin, harga ditandai "Ilustrasi". Layar sempit pakai satu HP miring biar tetap kebaca.
export const NexoraPhones = ({ label, eager = false, className = "" }) => (
  <figure className={`nxp__phone ${className}`}>
    <picture>
      <source media="(max-width: 560px)" srcSet={mockOne} />
      <img src={mockTwo} alt={label} width="1000" height="1152" loading={eager ? "eager" : "lazy"} decoding="async" />
    </picture>
    <figcaption>{label}</figcaption>
  </figure>
);
