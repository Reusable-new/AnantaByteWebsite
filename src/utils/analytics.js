const GA_ID = import.meta.env.VITE_GA_ID || "G-YM2SM80M0B";

function canTrack() {
  return typeof window !== "undefined" && typeof window.gtag === "function";
}

export function trackPageView({ path, title } = {}) {
  if (!canTrack()) return;
  window.gtag("event", "page_view", {
    page_location: window.location.href,
    page_path: path || window.location.pathname,
    page_title: title || document.title,
    send_to: GA_ID,
  });
}

export function trackScrollDepth(percent) {
  if (!canTrack()) return;
  window.gtag("event", "scroll_depth", {
    percent_scrolled: percent,
    send_to: GA_ID,
  });
}

export function trackCtaClick({ label, location, href } = {}) {
  if (!canTrack()) return;
  window.gtag("event", "cta_click", {
    cta_label: label || "CTA",
    cta_location: location || "unknown",
    cta_href: href || "",
    send_to: GA_ID,
  });
}

export function trackFormSubmit({ formId } = {}) {
  if (!canTrack()) return;
  window.gtag("event", "form_submit", {
    form_id: formId || "contact",
    send_to: GA_ID,
  });
}

export function trackFormSuccess({ formId } = {}) {
  if (!canTrack()) return;
  window.gtag("event", "form_success", {
    form_id: formId || "contact",
    send_to: GA_ID,
  });
}

export function trackFormError({ formId, error } = {}) {
  if (!canTrack()) return;
  window.gtag("event", "form_error", {
    form_id: formId || "contact",
    error_message: error || "unknown",
    send_to: GA_ID,
  });
}
