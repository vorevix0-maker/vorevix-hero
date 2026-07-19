import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { subscribeToNewsletter } from "../lib/newsletter";
import "./Footer.css";

const companyLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Web Design", href: "/services/web-design" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "SEO Services", href: "/services/seo-services" },
  { label: "UI/UX Design", href: "/services/ui-ux-design-services" },
  { label: "Branding", href: "/services/branding" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
];

const locations = [
  { label: "Australia", href: "/locations/australia" },
  { label: "New Zealand", href: "/locations/new-zealand" },
  { label: "United Arab Emirates", href: "/locations/united-arab-emirates" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
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

        <div className="footer-overview">
          <div className="footer-brand">
            <a href="/#home" className="footer-logo">
              <img src="/footer-logo-white.png" alt="Vorevix" />
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

          <address className="footer-contact">
            <p className="footer-column-title">Contact Info</p>
            <a href="mailto:contact@vorevix.com">
              <Mail size={22} aria-hidden="true" />
              <span>contact@vorevix.com</span>
            </a>
            <a href="tel:+923000000000">
              <Phone size={22} aria-hidden="true" />
              <span>+92 300 0000000</span>
            </a>
            <p>
              <MapPin size={23} aria-hidden="true" />
              <span>Mansehra, Pakistan</span>
            </p>
          </address>
        </div>

        <div className="footer-grid">
          <nav className="footer-column" aria-label="Footer company links">
            <p className="footer-column-title">Company</p>
            {companyLinks.map((link) => (
              <a href={link.href} key={link.href}>{link.label}</a>
            ))}
          </nav>

          <nav className="footer-column" aria-label="Footer services">
            <p className="footer-column-title">Services</p>
            {services.map((service) => (
              <a href={service.href} key={service.href}>{service.label}</a>
            ))}
          </nav>

          <nav className="footer-column" aria-label="Footer locations">
            <p className="footer-column-title">Locations</p>
            {locations.map((location) => (
              <a href={location.href} key={location.href}>{location.label}</a>
            ))}
          </nav>

          <nav className="footer-column" aria-label="Footer legal links">
            <p className="footer-column-title">Legal</p>
            {legalLinks.map((link) => (
              <a href={link.href} key={link.href}>{link.label}</a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>Â© 2026 Vorevix. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
