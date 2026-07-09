import { useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import "./Header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`hero-header ${isMenuOpen ? "nav-open" : ""}`}>
      <a href="/" className="header-logo">
        <img src="/vorevix-logo.png" alt="Vorevix logo" />
      </a>

      <nav className="header-nav" aria-label="Primary navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/contact">Contact</a>
      </nav>

      <a href="/contact" className="header-btn">
        Get Started <ArrowRight size={18} />
      </a>

      <button
        className="header-menu-toggle"
        type="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <X size={26} /> : <Menu size={28} />}
      </button>
    </header>
  );
}
