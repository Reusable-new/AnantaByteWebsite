import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL =
  import.meta.env.VITE_SITE_URL || "https://anantabyte.com";

const DEFAULT_IMAGE = `${SITE_URL}/image/hero-mockup.svg`;

function buildCanonical(pathname) {
  try {
    const cleanPath = pathname.split("?")[0]; // remove query params
    const url = new URL(cleanPath, SITE_URL);
    return url.toString();
  } catch {
    return `${SITE_URL}${pathname?.split("?")[0] || "/"}`;
  }
}

export default function SEO({
  title,
  description,
  keywords,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  noIndex = false,
  jsonLd,
}) {
  const location = useLocation();

  const pathname =
    (path || location.pathname || "/").split("?")[0];

  const canonical = buildCanonical(pathname);

  const metaTitle =
    title ||
    "AnantaByte - Software, AI & SaaS Development Company";

  const metaDescription =
    description ||
    "AnantaByte builds scalable web, mobile, AI, and SaaS products for startups and growing businesses.";

  const metaKeywords =
    keywords ||
    "software development, web development, mobile app development, SaaS development, AI solutions, IT services India";

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta
        name="robots"
        content={noIndex ? "noindex,nofollow" : "index,follow"}
      />

      {/* Canonical */}
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="AnantaByte" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {/* Theme Color */}
      <meta name="theme-color" content="#000000" />

      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}