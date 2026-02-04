import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://anantabyte.com";
const DEFAULT_IMAGE = `${SITE_URL}/image/hero-mockup.svg`;

function buildCanonical(pathname) {
  try {
    const url = new URL(pathname, SITE_URL);
    return url.toString();
  } catch {
    return `${SITE_URL}${pathname || "/"}`;
  }
}

export default function SEO({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = "website",
  noIndex = false,
  jsonLd,
}) {
  const location = useLocation();
  const pathname = path || location.pathname || "/";
  const canonical = buildCanonical(pathname);
  const metaTitle = title || "AnantaByte";
  const metaDescription =
    description ||
    "AnantaByte builds scalable web, mobile, AI, and SaaS products for startups and growing businesses.";

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="AnantaByte" />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />

      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}
