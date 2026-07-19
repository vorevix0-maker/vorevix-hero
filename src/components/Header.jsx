import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import "./Header.css";

const serviceLinks = [
  { label: "Web Design", href: "/services/web-design" },
  { label: "Web Development", href: "/services/web-development-services" },
  { label: "SEO Services", href: "/services/seo-services" },
  { label: "UI/UX Design", href: "/services/ui-ux-design-services" },
  { label: "Branding", href: "/services/branding" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
];

const locationLinks = [
  { label: "Australia", href: "/locations/australia" },
  { label: "New Zealand", href: "/locations/new-zealand" },
  { label: "United Arab Emirates", href: "/locations/united-arab-emirates" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const pathname = window.location.pathname;

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setServicesOpen(false);
        setLocationsOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const currentPage = (href) => pathname === href;
  const linkProps = (href) => ({
    className: currentPage(href) ? "active" : undefined,
    ...(currentPage(href) ? { "aria-current": "page" } : {}),
  });

  return (
    <header className={`hero-header ${isMenuOpen ? "nav-open" : ""}`}>
      <a href="/" className="header-logo" aria-label="Vorevix home">
        <img src="/vorevix-logo.png" alt="Vorevix" />
      </a>

      <nav className="header-nav" id="primary-navigation" aria-label="Primary navigation">
        <a className={`header-link ${currentPage("/") ? "active" : ""}`} href="/" {...(currentPage("/") ? { "aria-current": "page" } : {})}>
          Home
        </a>
        <a className={`header-link ${currentPage("/about") ? "active" : ""}`} href="/about" {...(currentPage("/about") ? { "aria-current": "page" } : {})}>
          About
        </a>

        <div className={`nav-dropdown ${servicesOpen ? "is-open" : ""}`}>
          <button
            className={`nav-dropdown-toggle ${pathname.startsWith("/services") ? "active" : ""}`}
            type="button"
            aria-expanded={servicesOpen}
            aria-controls="services-navigation"
            onClick={() => {
              setServicesOpen((open) => !open);
              setLocationsOpen(false);
            }}
          >
            Services
            <ChevronDown size={15} aria-hidden="true" />
          </button>
          <div className="nav-dropdown-menu" id="services-navigation">
            <a href="/services" {...linkProps("/services")}>All Services</a>
            {serviceLinks.map((link) => (
              <a href={link.href} key={link.href} {...linkProps(link.href)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <a className={`header-link ${currentPage("/portfolio") ? "active" : ""}`} href="/portfolio" {...(currentPage("/portfolio") ? { "aria-current": "page" } : {})}>
          Portfolio
        </a>
        <a className={`header-link ${currentPage("/blog") ? "active" : ""}`} href="/blog" {...(currentPage("/blog") ? { "aria-current": "page" } : {})}>
          Blog
        </a>

        <div className={`nav-dropdown ${locationsOpen ? "is-open" : ""}`}>
          <button
            className={`nav-dropdown-toggle ${pathname.startsWith("/locations") ? "active" : ""}`}
            type="button"
            aria-expanded={locationsOpen}
            aria-controls="locations-navigation"
            onClick={() => {
              setLocationsOpen((open) => !open);
              setServicesOpen(false);
            }}
          >
            Locations
            <ChevronDown size={15} aria-hidden="true" />
          </button>
          <div className="nav-dropdown-menu" id="locations-navigation">
            <a href="/locations" {...linkProps("/locations")}>All Locations</a>
            {locationLinks.map((link) => (
              <a href={link.href} key={link.href} {...linkProps(link.href)}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <a className={`mobile-nav-contact ${currentPage("/contact") ? "active" : ""}`} href="/contact" {...(currentPage("/contact") ? { "aria-current": "page" } : {})}>
          Contact
        </a>
      </nav>

      <a href="/contact" className={`header-btn ${currentPage("/contact") ? "active" : ""}`} {...(currentPage("/contact") ? { "aria-current": "page" } : {})}>
        Contact <ArrowRight size={18} aria-hidden="true" />
      </a>

      <button
        className="header-menu-toggle"
        type="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
      </button>
    </header>
  );
}
