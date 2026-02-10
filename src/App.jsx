import { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import ContactModal from "./components/ContactModal";
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
import { trackCtaClick, trackPageView, trackScrollDepth } from "./utils/analytics";

const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Saas = lazy(() => import("./pages/Saas"));
const WebDevelopment = lazy(() => import("./pages/WebDevelopment"));
const MobileAppDevelopment = lazy(() => import("./pages/MobileAppDevelopment"));
const AiMlDevelopment = lazy(() => import("./pages/AiMlDevelopment"));
const UiUxDesign = lazy(() => import("./pages/UiUxDesign"));
const QaTesting = lazy(() => import("./pages/QaTesting"));
const FintechSoftware = lazy(() => import("./pages/FintechSoftware"));
const HealthcareSoftware = lazy(() => import("./pages/HealthcareSoftware"));
const WebDevelopmentBengaluru = lazy(() => import("./pages/WebDevelopmentBengaluru"));
const SoftwareDevelopmentDelhi = lazy(() => import("./pages/SoftwareDevelopmentDelhi"));
const SaasMvpGuide = lazy(() => import("./pages/SaasMvpGuide"));
const ProductDiscoveryWorkshop = lazy(() => import("./pages/ProductDiscoveryWorkshop"));

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
      },
      {
        "@type": "Service",
        name: "Web Development",
        serviceType: "Web Development",
        provider: {
          "@type": "Organization",
          name: "AnantaByte",
          url: SITE_URL
        },
        areaServed: "Worldwide"
      },
      {
        "@type": "Service",
        name: "SaaS Development",
        serviceType: "SaaS Application Development",
        provider: {
          "@type": "Organization",
          name: "AnantaByte",
          url: SITE_URL
        },
        areaServed: "Worldwide"
      },
      {
        "@type": "Service",
        name: "AI Chatbot Development",
        serviceType: "AI Chatbot Development",
        provider: {
          "@type": "Organization",
          name: "AnantaByte",
          url: SITE_URL
        },
        areaServed: "Worldwide"
      },
      {
        "@type": "Service",
        name: "Mobile App Development",
        serviceType: "Mobile App Development",
        provider: {
          "@type": "Organization",
          name: "AnantaByte",
          url: SITE_URL
        },
        areaServed: "Worldwide"
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
    const path = location.pathname + location.search + location.hash;
    const title = document.title;
    trackPageView({ path, title });

    const thresholds = [25, 50, 75, 100];
    const fired = new Set();

    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      if (scrollHeight <= 0) return;
      const percent = Math.round((scrollTop / scrollHeight) * 100);

      thresholds.forEach((threshold) => {
        if (percent >= threshold && !fired.has(threshold)) {
          fired.add(threshold);
          trackScrollDepth(threshold);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [location]);

  useEffect(() => {
    const onClick = (event) => {
      const target = event.target.closest("a,button");
      if (!target) return;

      // If a link targets the contact fragment, open the contact modal instead
      const href = target.getAttribute("href") || "";
      if (href && href.includes("#contact")) {
        event.preventDefault();
        window.dispatchEvent(new CustomEvent("open-contact"));
      }

      const isCta = target.dataset.cta || target.classList.contains("btn-primary");
      if (!isCta) return;

      const label = target.dataset.cta || target.textContent?.trim() || "CTA";
      const ctaLocation = target.dataset.ctaLocation || location.pathname;
      trackCtaClick({ label, location: ctaLocation, href });
    };

    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <ContactModal />
      <Suspense fallback={<div style={{ padding: "80px 24px", textAlign: "center" }}>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/saas" element={<Saas />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/ai-ml-development" element={<AiMlDevelopment />} />
          <Route path="/ui-ux-design" element={<UiUxDesign />} />
          <Route path="/qa-testing" element={<QaTesting />} />
          <Route path="/fintech-software-development" element={<FintechSoftware />} />
          <Route path="/healthcare-software-development" element={<HealthcareSoftware />} />
          <Route path="/web-development-bengaluru" element={<WebDevelopmentBengaluru />} />
          <Route path="/software-development-delhi" element={<SoftwareDevelopmentDelhi />} />
          <Route path="/saas-mvp-guide" element={<SaasMvpGuide />} />
          <Route path="/product-discovery-workshop" element={<ProductDiscoveryWorkshop />} />
        </Routes>
      </Suspense>
    </>
  );
}