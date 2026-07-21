import { ArrowRight } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-shell hero-shell-approved">
        <div className="hero-content">
          <h1 className="hero-title">Digital Solutions for Businesses Ready to Grow</h1>
          <p className="hero-kicker hero-intro">Vorevix is a full-service digital agency that combines strategy, branding, UI/UX design, web design, web development, SEO and digital marketing around clear business objectives.</p>
          <p className="hero-copy">We support startups, SMEs, eCommerce brands, SaaS companies, professional-service firms and established organisations that need stronger digital foundations, clearer customer experiences and a more coordinated approach to online growth.</p>
          <p className="hero-copy">Whether you are launching a new business, rebuilding an outdated website or improving your digital visibility, we help identify what matters, connect the right services and turn ideas into practical digital solutions.</p>
          <p className="hero-copy">Instead of treating branding, design, development, search and marketing as separate activities, we bring them together through one strategy. This creates a more consistent customer experience and a stronger foundation for long-term improvement.</p>
          <div className="hero-actions">
            <a href="/contact" className="hero-cta">Start Your Project <ArrowRight size={20} /></a>
            <a href="/portfolio" className="hero-cta hero-cta-secondary">View Our Work</a>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img src="/images/vorevix-laptop.png" alt="Full-service digital agency supporting business growth" width="620" height="470" decoding="async" />
        </div>
      </div>
    </section>
  );
}
