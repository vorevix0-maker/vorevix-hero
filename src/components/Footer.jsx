import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { subscribeToNewsletter } from "../lib/newsletter";
import "./Footer.css";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Branding", href: "/services/branding" },
  { label: "Website Development", href: "/services/web-development" },
  { label: "SEO Services", href: "/services/seo-services" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
];

const socialLinks = [
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61589562344260", icon: "/social-facebook.png" },
  { label: "Instagram", href: "https://www.instagram.com/vorevix.io", icon: "/social-instagram.png" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/vorevix/", icon: "/social-linkedin.png" },
  { label: "TikTok", href: "https://www.tiktok.com/@vorevix.io", icon: "/social-tiktok.png" },
];

export default function Footer() {
  const [subscribeStatus, setSubscribeStatus] = useState("idle");
  const [subscribeMessage, setSubscribeMessage] = useState("");

  async function handleSubscribe(event) {
    event.preventDefault();
    const form = event.currentTarget;

    setSubscribeStatus("loading");
    setSubscribeMessage("");

    try {
      const subscriber = await subscribeToNewsletter(new FormData(form));
      setSubscribeStatus("success");
      setSubscribeMessage(
        subscriber.alreadySubscribed
          ? "You're already subscribed."
          : "Subscribed successfully."
      );
      form.reset();
    } catch (error) {
      setSubscribeStatus("error");
      setSubscribeMessage(
        error instanceof Error
          ? error.message
          : "Subscription failed. Please try again."
      );
    }
  }

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-cta">
          <p className="footer-cta-title">Ready To Grow Your Business With Vorevix</p>
          <p>
            Let us help you unlock your business's full potential. With tailored
            Vorevix strategies and proven digital solutions, we drive traffic,
            improve conversions, and elevate your brand online.
          </p>

          <form className="footer-subscribe" onSubmit={handleSubscribe}>
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email"
              aria-label="Email address"
              required
            />
            <button type="submit" disabled={subscribeStatus === "loading"}>
              {subscribeStatus === "loading" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>
          {subscribeMessage && (
            <p className={`footer-subscribe-message ${subscribeStatus}`}>
              {subscribeMessage}
            </p>
          )}
        </div>

        <div className="footer-divider" />

        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/#home" className="footer-logo">
              <img src="/footer-logo-white.png" alt="Vorevix logo" />
            </a>
            <p>
              Vorevix is a growth-focused digital agency helping businesses
              build stronger brands, smarter websites, and scalable marketing
              systems.
            </p>

            <div className="footer-socials" aria-label="Social links">
              {socialLinks.map(({ label, href, icon }) => (
                <a href={href} aria-label={label} key={label} target="_blank" rel="noreferrer">
                  <img src={icon} alt="" loading="lazy" decoding="async" />
                </a>
              ))}
            </div>
          </div>

          <nav className="footer-column" aria-label="Footer quick links">
            <p className="footer-column-title">Quick Links</p>
            {quickLinks.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
          </nav>

          <nav className="footer-column" aria-label="Footer services">
            <p className="footer-column-title">Services We Offer</p>
            {services.map((service) => (
              <a href={service.href} key={service.href}>
                {service.label}
              </a>
            ))}
          </nav>

          <address className="footer-column footer-contact">
            <p className="footer-column-title">Contact Info</p>
            <a href="mailto:contact@vorevix.com">
              <Mail size={22} />
              <span>contact@vorevix.com</span>
            </a>
            <a href="tel:+923000000000">
              <Phone size={22} />
              <span>+92 300 0000000</span>
            </a>
            <p>
              <MapPin size={23} />
              <span>Mansehra, Pakistan</span>
            </p>
            <div className="footer-legal-links" aria-label="Legal links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-and-conditions">Terms &amp; Conditions</a>
            </div>
          </address>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Vorevix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
