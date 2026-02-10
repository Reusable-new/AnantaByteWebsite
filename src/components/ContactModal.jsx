import React, { useEffect, useRef, useState } from "react";
import Contact from "./Contact";

export default function ContactModal() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("open-contact", onOpen);

    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.removeEventListener("open-contact", onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    // lock body scroll while modal is open
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      // focus the close button for accessibility
      setTimeout(() => closeRef.current?.focus(), 60);
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  if (!open) return null;

  const onOverlayClick = (e) => {
    if (e.target === e.currentTarget) setOpen(false);
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onClick={onOverlayClick}>
      <div className="modal-panel" ref={panelRef} onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeRef}
          className="modal-close"
          onClick={() => setOpen(false)}
          aria-label="Close contact form"
        >
          ×
        </button>
        <div className="modal-content">
          <Contact />
        </div>
      </div>
    </div>
  );
}
