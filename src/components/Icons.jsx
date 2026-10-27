import React from "react";

const P = {
  mobile: "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm4 17h.01",
  web: "M3 5h18v12H3zM8 21h8M12 17v4",
  flow: "M5 6a2 2 0 1 0 0 .01M19 18a2 2 0 1 0 0 .01M7 6h6a4 4 0 0 1 4 4v0a4 4 0 0 1-4 4h-2a4 4 0 0 0-4 4v0h8",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4",
  arrow: "M5 12h14M13 6l6 6-6 6",
  whatsapp: "M20 12a8 8 0 1 1-3.2-6.4L20 4l-1 3.6A8 8 0 0 1 20 12zM9 9c0 3 3 6 6 6l1-2-2-1-1 1c-1-.5-2-1.5-2.5-2.5l1-1-1-2z",
  mail: "M3 6h18v12H3zM3 7l9 7 9-7",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z",
  check: "M5 12l5 5 9-10",
};

export const Icon = ({ name, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <path d={P[name]} />
  </svg>
);
