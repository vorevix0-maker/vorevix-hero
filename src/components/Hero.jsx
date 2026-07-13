import { ArrowRight, Quote } from "lucide-react";
import "./Hero.css";

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61589562344260", icon: "/social-facebook.png" },
  { label: "Instagram", href: "https://www.instagram.com/vorevix.io", icon: "/social-instagram.png" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/vorevix/", icon: "/social-linkedin.png" },
  { label: "TikTok", href: "https://www.tiktok.com/@vorevix.io", icon: "/social-tiktok.png" },
];

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-shell">
        <div className="hero-socials" aria-label="Social links">
          {socialLinks.map(({ label, href, icon }) => (
            <a href={href} aria-label={label} key={label} target="_blank" rel="noreferrer">
              <span className="social-icon-box">
                <img src={icon} alt="" loading="eager" decoding="async" />
              </span>
            </a>
          ))}
        </div>

        <div className="hero-content">
          <p className="hero-kicker">
          We design digital experiences that capture attention drive conversions and deliver lasting results.
          </p>

          <h1 className="hero-title">
            <span className="hero-line">Web Design,</span>
            <span className="hero-line">Web Development &amp; SEO</span>
            <span className="hero-line hero-line-accent">Agency in Pakistan</span>
          </h1>

          <a href="#contact" className="hero-cta">
         Schedule Your Free Strategy Call
            <ArrowRight size={20} />
          </a>
        </div>

        <aside className="hero-proof" aria-label="Client proof">
          <div className="quote-mark">
            <Quote size={28} />
          </div>

          <div className="testimonial-card">
            <p>
Every successful business is driven by a clear vision and the right digital strategy. 
At Vorevix, we turn ambitious ideas into measurable results through innovation, precision, and execution.

            </p>
            <strong>Aqib Hussain Shah </strong>
            <span>Marketing Director</span>
          </div>

          <div className="client-proof">
            <div className="client-avatars" aria-hidden="true">
              <img src="/client-1.png" alt="" loading="eager" decoding="async" />
              <img src="/client-2.png" alt="" loading="eager" decoding="async" />
              <img src="/client-3.png" alt="" loading="eager" decoding="async" />
            </div>
            <div>
              <strong>450+</strong>
              <span>Clients Served</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
