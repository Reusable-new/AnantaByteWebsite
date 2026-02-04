import { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyChoose from "./components/WhyChoose";
import Mission from "./components/mission";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SEO from "./components/SEO";

const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Saas = lazy(() => import("./pages/Saas"));

const SITE_URL = import.meta.env.VITE_SITE_URL || "https://anantabyte.com";

function Home() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "AnantaByte",
        url: SITE_URL,
        email: "contact@anantabyte.com",
        logo: `${SITE_URL}/image/hero-mockup.svg`
      },
      {
        "@type": "WebSite",
        name: "AnantaByte",
        url: SITE_URL,
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE_URL}/?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="AnantaByte | Web, Mobile, AI & SaaS Development"
        description="AnantaByte builds scalable web, mobile, AI, and SaaS products for startups and growing businesses."
        path="/"
        jsonLd={homeJsonLd}
      />
      <Hero />
      <Services />
      <WhyChoose />
      <Mission />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("config", "G-YM2SM80M0B", {
        page_path: location.pathname + location.search + location.hash,
      });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Suspense fallback={<div style={{ padding: "80px 24px", textAlign: "center" }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/saas" element={<Saas />} />
        </Routes>
      </Suspense>
    </>
  );
}