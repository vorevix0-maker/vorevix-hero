import { ArrowRight } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-shell hero-shell-approved">
        <div className="hero-content">
          <h1 className="hero-title">Digital Solutions for Businesses Ready to Grow</h1>
          <p className="hero-kicker hero-intro">
            Vorevix is a full-service digital agency combining strategy, branding, UI/UX design, web development, SEO and digital marketing to help businesses build stronger brands, improve digital experiences and grow online.
          </p>
          <p className="hero-copy">Whether you are launching a new business, rebuilding an outdated website or trying to improve your online visibility, we bring the right digital capabilities together around your goals.</p>
          <p className="hero-copy">Instead of treating branding, design, development, SEO and marketing as separate activities, we connect them through one clear strategy. This creates a more consistent customer experience and a stronger foundation for sustainable digital growth.</p>
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
