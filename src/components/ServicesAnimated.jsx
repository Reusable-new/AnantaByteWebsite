import { AnimatedSection } from "./ScrollAnimations";

// Enhanced Services component with scroll animations
export function ServicesAnimated() {
  const services = [
    {
      icon: "🌐",
      title: "Web Development",
      desc: "Custom websites and web apps built with cutting-edge technology.",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      desc: "Native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: "🤖",
      title: "AI & ML",
      desc: "Intelligent solutions powered by artificial intelligence and machine learning.",
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      desc: "Beautiful, intuitive interfaces designed for user engagement.",
    },
    {
      icon: "💼",
      title: "SaaS Development",
      desc: "Scalable SaaS platforms with multi-tenant architecture.",
    },
    {
      icon: "✅",
      title: "QA Testing",
      desc: "Comprehensive testing to ensure quality and reliability.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-b from-[#070a13] to-[#0f1724]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-900 text-white mb-4">Our Services</h2>
            <p className="text-[#97a6b7] text-lg max-w-2xl mx-auto">
              We specialize in building innovative digital products with cutting-edge technology
            </p>
          </div>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="p-8 rounded-xl bg-gradient-to-br from-[#0f1724] to-[#1a2235] border border-[#7c3aed]/30 hover:border-[#22d3ee]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#7c3aed]/20">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-[#97a6b7]">{service.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesAnimated;
