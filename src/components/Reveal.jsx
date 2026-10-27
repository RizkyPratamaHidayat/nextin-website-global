import React from "react";
import { useReveal } from "../hooks/useReveal";

// Bungkus elemen supaya fade-up saat masuk viewport. delay dalam ms (untuk stagger).
export const Reveal = ({ as: Tag = "div", delay = 0, className = "", children, ...rest }) => {
  const [ref, visible] = useReveal();
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ "--d": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
