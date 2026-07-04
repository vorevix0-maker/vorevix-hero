import {
  ArrowUpRight,
  Lightbulb,
  MessagesSquare,
  Network,
  UsersRound,
} from "lucide-react";
import "./Process.css";

const reasons = [
  {
    title: "Creative Excellence",
    desc: "Strategic brand thinking elegant visuals and engaging digital experiences designed to elevate your market presence.",
    icon: Lightbulb,
  },
  {
    title: "Data-Driven Strategies",
    desc: "Every website marketing campaign and automation sequence is optimized to build trust generate qualified leads and deliver measurable growth.",
    icon: Network,
  },
  {
    title: "Passionate & Dedicated Team",
    desc: "A highly focused team that communicates clearly moves quickly and keeps your project perfectly aligned from initial concept to final launch.",
    icon: UsersRound,
  },
  {
    title: "Full-Service Solutions",
    desc: "Brand identity custom websites strategic marketing mobile apps SEO and software platforms all managed by one dedicated growth partner.",
    icon: MessagesSquare,
  },
];

const marqueeItems = ["Branding", "UI/UX", "Web Design", "Social Marketing", "SEO", "Software"];

export default function Process() {
  return (
    <section className="process-section" id="why-choose-us">
      <div className="process-wrap">
        <div className="process-heading">
          <h2 className="process-title">
            <span>Why Vorevix Is The </span>
            <span>Ideal Growth Partner for Your Brand?</span>
          </h2>
          <p>( Why Choose Us )</p>
        </div>

        <div className="reason-list">
          {reasons.map(({ icon: Icon, ...reason }) => (
            <article className="reason-row" key={reason.title}>
              <div className="reason-icon">
                <Icon size={28} />
              </div>
              <div className="reason-copy">
                <h3 className="reason-title">{reason.title}</h3>
                <p>{reason.desc}</p>
              </div>
              <a href="#contact" aria-label={`Contact us about ${reason.title}`}>
                <ArrowUpRight size={30} />
              </a>
            </article>
          ))}
        </div>
      </div>

      <div className="service-ribbon service-ribbon-orange" aria-hidden="true">
        <div className="ribbon-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`orange-${item}-${index}`}>We build brand that stand out</span>
          ))}
        </div>
      </div>

      <div className="service-ribbon service-ribbon-white" aria-hidden="true">
        <div className="ribbon-track">
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={`white-${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
