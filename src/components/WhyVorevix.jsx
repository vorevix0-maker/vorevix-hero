import { ArrowUpRight } from "lucide-react";
import "./WhyVorevix.css";

const stats = [
  { number: "450", suffix: "+", label: "Total Clients" },
  { number: "6", suffix: "+", label: "Years of Industry Experience" },
  { number: "100", suffix: "+", label: "Successful Projects Delivered" },
  { number: "24/7", suffix: "", label: "Dedicated Client Support" },
];

export default function WhyVorevix() {
  return (
    <section className="why-section" id="about">
      <div className="why-container">
        <div className="about-visual">
          <div className="about-image-card">
            <img
              src="/about-founder.jpg"
              alt="Vorevix founder portrait"
              className="about-visual-image"
              loading="lazy"
              decoding="async"
            />
          </div>

          <a href="#contact" className="about-btn">
            More About Us
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="about-copy">
          <span className="section-label">( About Us )</span>

          <h2 className="about-title">
            <span>Your Vision, Our Expertise</span>
            <span>Together we create digital</span>
            <span>brands that command attention</span>
          </h2>

          <p>
            Vorevix helps ambitious businesses transform ideas into strong digital
            systems. Through premium branding modern websites marketing automation 
            and custom software we deliver clear strategies that establish trust generate qualified leads and drive sustainable growth.
          </p>

          <div className="why-stats">
            {stats.map((stat) => (
              <div className="why-stat" key={stat.label}>
                <strong>
                  {stat.number}
                  <span>{stat.suffix}</span>
                </strong>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
